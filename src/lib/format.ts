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
