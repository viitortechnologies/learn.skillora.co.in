export function discountPercent(price: number, original: number) {
  if (!original || original <= price) return 0;
  return Math.round(((original - price) / original) * 100);
}

export function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function whatsappBuyLink(itemName: string, price?: number) {
  const wa = "919966282831";
  const priceText = price ? ` (${formatInr(price)})` : "";
  const msg = encodeURIComponent(
    `Hi Skillora! I'm interested in: *${itemName}*${priceText}. Please share more details.`
  );
  return `https://wa.me/${wa}?text=${msg}`;
}
