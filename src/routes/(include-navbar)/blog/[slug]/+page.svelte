<script lang="ts">
	import { dateFormatter } from "$lib/functions/formatters";
	import type { BlogComponent } from "$lib/util/types";

  export let data: BlogComponent;
</script>

<svelte:head>
  <title>{data.metadata.name} | Aiden Sato</title>
</svelte:head>

<div class="content-container">
  <h1>{data.metadata.name}</h1>
  <sub>{dateFormatter(data.date)}</sub>
  <article>
    <svelte:component this={data.default} />
  </article>
</div>