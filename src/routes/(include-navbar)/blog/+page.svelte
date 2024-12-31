<script lang="ts">
  import { fetchPosts } from "$lib/functions/blog-content"
	import { pageTitle } from "$lib/util/naming";

  const posts = fetchPosts();
</script>

<svelte:head>
  <title>{pageTitle("Blog")}</title>
</svelte:head>

<div class="content-container">
  <h1>Blog</h1>
  <a href="/blog/rss.xml" target="_blank"><i>(rss feed)</i></a>
  <ul>
    {#each posts as p}
      <li><a href="/blog/{p.slug}">{p.date} | {p.metadata.name}</a></li>
    {/each}
  </ul>
</div>