import { loadBlogComponent } from '$lib/functions/blog-content.js';

export function load({ params }) {
  const component = loadBlogComponent(params.slug);
  return component;
}