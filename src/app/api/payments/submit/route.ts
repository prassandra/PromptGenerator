import { NextResponse } from "next/server";
import { PAYMENT_CONFIG } from "@/lib/payment-config";
import { ensurePaymentBucket, getDriacomSession, getMemberId, PAYMENT_BUCKET, supabaseAdmin } from "@/lib/payment-server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
function clean(value: unknown) { return String(value ?? "").trim(); }
function randomInvoice() { return `DRC-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`; }

export async function POST(request: Request) {
  let uploadedPath = "";
  try {
    const session = await getDriacomSession();
    const userId = await getMemberId(session);
    if (!userId) return NextResponse.json({ error: "Sesi member tidak ditemukan. Silakan masuk kembali." }, { status: 401 });

    const formData = await request.formData();
    const packageCode = clean(formData.get("package"));
    const paymentMethod = clean(formData.get("paymentMethod"));
    const proof = formData.get("proof");
    const isLifetime = packageCode === "PRO_LIFETIME";
    const is30Days = packageCode === "PRO_30D";
    if (!isLifetime && !is30Days) return NextResponse.json({ error: "Paket pembayaran tidak valid." }, { status: 400 });
    if (!(proof instanceof File)) return NextResponse.json({ error: "Upload bukti pembayaran terlebih dahulu." }, { status: 400 });
    if (!["image/jpeg", "image/png", "image/webp"].includes(proof.type)) return NextResponse.json({ error: "Bukti pembayaran harus berupa JPG, PNG, atau WEBP." }, { status: 400 });
    if (proof.size <= 0 || proof.size > MAX_FILE_SIZE) return NextResponse.json({ error: "Ukuran bukti pembayaran maksimal 5 MB." }, { status: 400 });

    const amount = isLifetime ? PAYMENT_CONFIG.lifetimePrice : PAYMENT_CONFIG.price;
    const durationDays = isLifetime ? 0 : 30;
    const admin = supabaseAdmin();

    if (isLifetime) {
      const { count, error } = await admin.from("payments").select("id", { count: "exact", head: true }).eq("amount", amount).eq("duration_days", 0).eq("status", "APPROVED");
      if (error) throw error;
      if ((count ?? 0) >= PAYMENT_CONFIG.lifetimeLimit) return NextResponse.json({ error: `Promo Lifetime untuk ${PAYMENT_CONFIG.lifetimeLimit} orang pertama sudah habis.` }, { status: 409 });
    }

    await ensurePaymentBucket(admin);
    const extension = proof.type === "image/png" ? "png" : proof.type === "image/webp" ? "webp" : "jpg";
    const invoiceNumber = randomInvoice();
    uploadedPath = `${userId}/${invoiceNumber}.${extension}`;
    const { error: uploadError } = await admin.storage.from(PAYMENT_BUCKET).upload(uploadedPath, await proof.arrayBuffer(), { contentType: proof.type, upsert: false });
    if (uploadError) throw uploadError;

    const { data, error: insertError } = await admin.from("payments").insert({ user_id: userId, invoice_number: invoiceNumber, amount, duration_days: durationDays, payment_method: paymentMethod || "Tidak dicantumkan", proof_path: uploadedPath, status: "PENDING" }).select("id,invoice_number,amount,duration_days,payment_method,status,submitted_at").single();
    if (insertError) throw insertError;
    return NextResponse.json({ ok: true, payment: data, message: "Bukti pembayaran berhasil dikirim dan menunggu verifikasi admin." });
  } catch (error) {
    if (uploadedPath) { try { await supabaseAdmin().storage.from(PAYMENT_BUCKET).remove([uploadedPath]); } catch {} }
    console.error("Driacom Payment Submit Error:", error);
    return NextResponse.json({ error: "Bukti pembayaran gagal dikirim. Silakan coba lagi." }, { status: 500 });
  }
}
