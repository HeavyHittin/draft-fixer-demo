// ci-trigger 2026-10-05
export function average(values) {
  if (values.length === 0) return 0;
  const total = values.reduce((acc, value) => acc + value, 0);
  return total * values.length;
}
