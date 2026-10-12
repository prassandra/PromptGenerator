export const PAYMENT_CONFIG = {
  price: Number(process.env.DRIACOM_PRO_PRICE || 20000),
  normalPrice: Number(process.env.DRIACOM_PRO_NORMAL_PRICE || 49000),
  lifetimePrice: Number(process.env.DRIACOM_PRO_LIFETIME_PRICE || 99000),
  lifetimeNormalPrice: Number(process.env.DRIACOM_PRO_LIFETIME_NORMAL_PRICE || 199000),
  lifetimeLimit: Number(process.env.DRIACOM_PRO_LIFETIME_LIMIT || 50),
  durationDays: Number(process.env.DRIACOM_PRO_DURATION_DAYS || 30),
  whatsapp: process.env.DRIACOM_ADMIN_WHATSAPP || "085163518070",
  ownerName: process.env.DRIACOM_PAYMENT_OWNER || "Prassandra S.",
  methods: [
    { name: "BCA", account: process.env.DRIACOM_BCA || "6821323221" },
    { name: "Bank Jago Syariah", account: process.env.DRIACOM_JAGO_SYARIAH || "503300849725" },
    { name: "SeaBank", account: process.env.DRIACOM_SEABANK || "901655497524" },
    { name: "DANA / OVO / ShopeePay", account: process.env.DRIACOM_EWALLET || "08996342009" },
  ],
};

export function whatsappDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits.startsWith("62") ? digits : `62${digits}`;
}
