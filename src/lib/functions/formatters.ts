import { format, parseISO } from "date-fns";

export function dateFormatter(dateStr: string): string | null {
  const d = parseISO(dateStr);
  if (!isNaN(d.getDate())) {
    return format(d, "LLLL d, yyyy");
  } else {
    return null;
  }
}