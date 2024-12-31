import { error } from "@sveltejs/kit";
import { extname, basename } from "pathe";
import { Constants } from "./constants";

export function extractSlug(modulePath: string): string {
  const ext = extname(modulePath);
  const slug = basename(modulePath, ext);
  return slug;
}

export function splitDateslug(dateslug: string): { date: string, slug: string } {
  const arr = dateslug.split(Constants.DATESLUG_SEPARATOR);
  if (arr.length === 2) {
    return { date: arr[0], slug: arr[1] }
  } else {
    error(500, `invalid dateslug: ${dateslug}`)
  }
}