const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

// Parses display dates like "23 August 2026" as a UTC calendar date, so the
// result doesn't shift a day depending on the build machine's timezone.
export function parseDisplayDate(date: string): Date {
  const [day, month, year] = date.trim().split(/\s+/);
  const monthIndex = MONTHS.indexOf(month?.toLowerCase());
  if (monthIndex === -1 || !day || !year) {
    throw new Error(`Unrecognised date format: "${date}"`);
  }
  return new Date(Date.UTC(Number(year), monthIndex, Number(day)));
}

// "23 August 2026" -> "2026-08-23"
export function toIsoDate(date: string): string {
  return parseDisplayDate(date).toISOString().slice(0, 10);
}
