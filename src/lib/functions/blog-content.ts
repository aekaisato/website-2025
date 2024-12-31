import type { BlogComponent, BlogMetadata, ComponentImport } from "$lib/util/types";
import { error } from "@sveltejs/kit";
import { extractSlug, splitDateslug } from "$lib/util/naming";

type PortfolioComponentRecord = Record<string, ComponentImport<BlogMetadata>>;

export function loadBlogComponent(slug: string): BlogComponent {
  const msg404 = `no component found with slug: ${slug}`;
  const posts = fetchPosts();
  const matches = posts.filter(x => x.slug == slug);
  const selected = matches.pop();
  if (!selected) {
    error(404, msg404)
  }
  if (matches.length > 0) {
    console.warn(`more than one matching dateslug. selected: ${selected.date}_${selected.slug}`)
  }

  return selected;
}

export function fetchPosts(): BlogComponent[] {
  const componentsGlob = import.meta.glob("$lib/content/blog/*.svx", { eager: true }) as PortfolioComponentRecord;
  const componentKeys = Object.keys(componentsGlob).filter(x => !componentsGlob[x].metadata.hide).toSorted().toReversed();
  const blogComponents = componentKeys.map(k => {
    const dateslug = extractSlug(k);
    const component = componentsGlob[k];
    const blogComponent: BlogComponent = {
      ...component,
      ...splitDateslug(dateslug)
    }
    return blogComponent;
  });
  return blogComponents;
}