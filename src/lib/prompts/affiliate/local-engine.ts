import type { AffiliateForm } from "./types";
import { generateLocalAffiliate } from "./generator";

export function generateLocalAffiliateEngine(form: AffiliateForm) {
  return generateLocalAffiliate(form);
}
