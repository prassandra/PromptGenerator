import { NextResponse } from "next/server";
import { PAYMENT_CONFIG } from "@/lib/payment-config";
import { getDriacomSession, supabaseAdmin, ensurePaymentBucket, PAYMENT_BUCKET, packageFromPayment } from "@/lib/payment-server";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const session = await getDriacomSession();
    if (session?.role !== "admin") return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    const { id } = await context.params;
    const body = await request.json().catch(() => null);
    const action = body?.action === "APPROVE" || body?.action === "REJECT" ? body.action : "";
    if (!action) return NextResponse.json({ error: "Aksi tidak valid." }, { status: 400 });

    const admin = supabaseAdmin();
    const { data: payment, error: paymentError } = await admin.from("payments").select("*").eq("id", id).maybeSingle();
    if (paymentError) throw paymentError;
    if (!payment) return NextResponse.json({ error: "Pembayaran tidak ditemukan." }, { status: 404 });
    if (payment.status !== "PENDING") return NextResponse.json({ error: "Pembayaran ini sudah diverifikasi sebelumnya." }, { status: 409 });

    if (action === "REJECT") {
      const rejectionReason = String(body?.rejectionReason || "").trim() || "Bukti pembayaran ditolak admin.";
      const { error } = await admin.from("payments").update({ status: "REJECTED", rejection_reason: rejectionReason, verified_at: new Date().toISOString(), verified_by: session.supabaseUserId || null }).eq("id", id).eq("status", "PENDING");
      if (error) throw error;
      if (payment.proof_path) { await ensurePaymentBucket(admin); await admin.storage.from(PAYMENT_BUCKET).remove([payment.proof_path]); }
      return NextResponse.json({ ok: true, message: "Pembayaran ditolak." });
    }

    const plan = packageFromPayment(payment);
    if (plan === "PRO_LIFETIME") {
      const { count, error } = await admin.from("payments").select("id", { count: "exact", head: true }).eq("amount", PAYMENT_CONFIG.lifetimePrice).eq("duration_days", 0).eq("status", "APPROVED");
      if (error) throw error;
      if ((count ?? 0) >= PAYMENT_CONFIG.lifetimeLimit) return NextResponse.json({ error: `Kuota ${PAYMENT_CONFIG.lifetimeLimit} akun Lifetime sudah penuh.` }, { status: 409 });
    }

    const expiresAt = plan === "PRO_30D" ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : null;
    const { error: profileError } = await admin.from("profiles").upsert({ user_id: payment.user_id, plan, pro_expires_at: expiresAt, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
    if (profileError) throw profileError;
    const { error: updateError } = await admin.from("payments").update({ status: "APPROVED", verified_at: new Date().toISOString(), verified_by: session.supabaseUserId || null }).eq("id", id).eq("status", "PENDING");
    if (updateError) throw updateError;
    if (payment.proof_path) { await ensurePaymentBucket(admin); await admin.storage.from(PAYMENT_BUCKET).remove([payment.proof_path]); }
    return NextResponse.json({ ok: true, message: plan === "PRO_LIFETIME" ? "Pembayaran diterima. Akun menjadi PRO Lifetime." : "Pembayaran diterima. Akun menjadi PRO selama 30 hari." });
  } catch (error) {
    console.error("Driacom Admin Payment Action Error:", error);
    return NextResponse.json({ error: "Gagal memproses pembayaran." }, { status: 500 });
  }
}
