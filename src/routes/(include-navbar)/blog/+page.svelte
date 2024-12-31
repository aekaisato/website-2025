<script lang="ts">
  import { fetchPosts } from "$lib/functions/blog-content"

  const posts = fetchPosts();
</script>

<svelte:head>
  <title>Blog | aekai</title>
</svelte:head>

<div class="content-container">
  <h1>Blog</h1>
  <ul>
    {#each posts as p}
      <li><a href="/blog/{p.slug}">{p.date} | {p.metadata.name}</a></li>
    {/each}
  </ul>
</div>