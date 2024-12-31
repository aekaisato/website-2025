import { fetchPosts } from "$lib/functions/blog-content";
import { Constants } from "$lib/util/constants";
import type { BlogComponent } from "$lib/util/types";
import { parseISO } from "date-fns";

export const prerender = true;

export function GET() {
  const posts = fetchPosts();

  const body: BodyInit = renderFeed(posts);
  const options: ResponseInit = {
    headers: {
      "content-type": "application/xml"
    }
  }

  return new Response(body, options)
}

// quite hacky tbh, would like to revise in the future maybe idk
function renderFeed(posts: BlogComponent[]) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
      <title>${Constants.SITE_NAME}</title>
      <description>${Constants.SITE_DESCRIPTION}</description>
      <link>${Constants.SITE_URL}</link>
      <atom:link href="${Constants.SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
      ${posts.map(post => { const postPath = `${Constants.SITE_URL}/blog/${post.slug}`; return `
        <item>
          <guid isPermaLink="true">${postPath}</guid>
          <title>${post.metadata.name}</title>
          <link>${postPath}</link>
          <description>${post.metadata.description}</description>
          <pubDate>${parseISO(post.date).toUTCString()}</pubDate>
        </item>
      `}).join("")}
      </channel>
    </rss>
  `
}