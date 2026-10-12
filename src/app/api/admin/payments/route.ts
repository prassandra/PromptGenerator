import { NextResponse } from "next/server";
import { getDriacomSession, supabaseAdmin, ensurePaymentBucket, PAYMENT_BUCKET } from "@/lib/payment-server";

export async function GET() {
  try {
    const session = await getDriacomSession();
    if (session?.role !== "admin") return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    const admin = supabaseAdmin();
    const { data: payments, error } = await admin.from("payments").select("*").order("submitted_at", { ascending: false });
    if (error) throw error;
    const { data: usersData } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const users = new Map((usersData?.users || []).map(user => [user.id, { email: user.email || "", name: typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : "" }]));
    const result = [];
    for (const payment of payments || []) {
      let proofUrl = "";
      if (payment.proof_path && payment.status === "PENDING") {
        await ensurePaymentBucket(admin);
        const { data } = await admin.storage.from(PAYMENT_BUCKET).createSignedUrl(payment.proof_path, 600);
        proofUrl = data?.signedUrl || "";
      }
      result.push({ ...payment, user: users.get(payment.user_id) || { email: "", name: "" }, proofUrl });
    }
    return NextResponse.json({ payments: result });
  } catch (error) {
    console.error("Driacom Admin Payments GET Error:", error);
    return NextResponse.json({ error: "Gagal membaca data pembayaran." }, { status: 500 });
  }
}
