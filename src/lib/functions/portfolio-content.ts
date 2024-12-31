import type { ComponentImport, PortfolioComponent, PortfolioMetadata } from "$lib/util/types";
import { Constants } from "$lib/util/constants";
import { parseISO, compareDesc } from "date-fns";
import { extractSlug } from "$lib/util/naming";

type PortfolioComponentRecord = Record<string, ComponentImport<PortfolioMetadata>>;

const rawComponents = import.meta.glob("$lib/content/portfolio/*.svx", { eager: true });
const processed = processComponents(recordToPortfolioComponents(rawComponents as PortfolioComponentRecord));
export default processed;

function recordToPortfolioComponents(record: PortfolioComponentRecord): PortfolioComponent[] {
  const arr = [];
  for (const k of Object.keys(record)) {
    const c = {...record[k] as object, slug: extractSlug(k)} as PortfolioComponent;
    if (!c.metadata) {
      console.warn(`portfolio item ${c.slug} has no metadata object`);
      console.warn(c);
    }
    arr.push(c);
  }
  return arr;
}

function processComponents(components: PortfolioComponent[]): PortfolioComponent[] {
  const filtered = filterHidden(components);
  const grouped = groupByPriority(filtered);
  const sorted = sortByDate(grouped);
  return sorted;
}

function filterHidden(components: PortfolioComponent[]): PortfolioComponent[] {
  return components.filter(x => !x.metadata.hide);
}

function groupByPriority(components: PortfolioComponent[]): PortfolioComponent[][] {
  const map: {[key in string]: PortfolioComponent[]} = {};
  for (const c of components) {
    const priority = c.metadata.priority ?? Constants.PORTFOLIO_DEFAULT_PRIORITY;
    if (map[priority]) {
      map[priority].push(c);
    } else {
      map[priority] = [c];
    }
  }
  const keys = Object.keys(map).map(x => Number.parseInt(x));
  const sortedKeys = keys.toSorted();
  return sortedKeys.map(k => map[k]);
}

function sortByDate(componentGroups: PortfolioComponent[][]): PortfolioComponent[] {
  return componentGroups.flatMap(group => group.toSorted(sortFn))
}

function sortFn(a: PortfolioComponent, b: PortfolioComponent): number {
  const dateA = parseISO(a.metadata.date);
  const dateB = parseISO(b.metadata.date);
  const nanA = isNaN(dateA.getTime());
  const nanB = isNaN(dateB.getTime());
  if (nanA && nanB) {
    return 0;
  } else if (nanA) {
    return 1;
  } else if (nanB) {
    return -1;
  } else {
    return compareDesc(dateA, dateB);
  }
}