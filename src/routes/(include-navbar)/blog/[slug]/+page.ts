import { loadBlogComponent } from '$lib/functions/blog-content.js';

export async function load({ params }) {
  const component = await loadBlogComponent(params.slug);
  return component;
}