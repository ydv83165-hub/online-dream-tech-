import { BRAND } from "./constants";

export interface MinimalCartItem {
  name: string;
  quantity: number;
  price?: number;
}

export function buildOrderMessage(items: MinimalCartItem[] = []): string {
  const lines = items.length
    ? items.map(
        (item) =>
          `• ${item.name} × ${item.quantity}${
            typeof item.price === "number" ? ` — ₹${item.price * item.quantity}` : ""
          }`
      )
    : ["• Enquiry request"];

  return [
    `Hi, I'd like to enquire about ${BRAND.name}:`,
    "",
    "Name:",
    "Email:",
    "Message:",
    "",
    ...lines,
    "",
    "Please share the details and we will get back to you soon.",
  ].join("\n");
}

export function buildEnquiryMessage(): string {
  return `Hi, I have an enquiry about ${BRAND.name}.`;
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
