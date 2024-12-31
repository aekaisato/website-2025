<script lang="ts">
	import { dateFormatter } from "$lib/functions/formatters";
	import { pageTitle } from "$lib/util/naming";
	import type { BlogComponent } from "$lib/util/types";

  export let data: BlogComponent;
</script>

<svelte:head>
  <title>{pageTitle(data.metadata.name)}</title>
</svelte:head>

<div class="content-container">
  <h1>{data.metadata.name}</h1>
  <sub>{dateFormatter(data.date)}</sub>
  <p><i>{data.metadata.description}</i></p>
  <hr />
  <article>
    <svelte:component this={data.default} />
  </article>
</div>