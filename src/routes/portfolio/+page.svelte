<script lang="ts">
	import { dateFormatter } from "$lib/functions/formatters";
  import portfolioContent from "$lib/functions/portfolio-content"
</script>

<svelte:head>
  <title>Portfolio | aekai</title>
</svelte:head>

<div class="content-container">
  <header>
    <h1>Portfolio</h1>
    <sub>Last updated {dateFormatter("2023-08-22")}</sub>
    <p>
      This is a list of some of the projects I have worked on,
      alongside some descriptions for each of them. I haven't
      updated this list in...over a year...but since I'm currently
      refreshing my entire personal page, I'll have more recent
      projects added sooner than later.
    </p>
  </header>
  <div>
    <h2>Table of Contents</h2>
    <ol>
      {#each portfolioContent as pc}
        <li><a href={"#" + pc.slug}>{pc.metadata.name}</a></li>
      {/each}
    </ol>
  </div>
  <div>
    {#each portfolioContent as pc}
      {@const formattedDate = dateFormatter(pc.metadata.date)}
      <hr/>
      <div id={pc.slug}>
        <h2>{pc.metadata.name}</h2>
        {#if formattedDate}
          <sub>{formattedDate}</sub>
        {/if}
        <svelte:component this={pc.default} />
      </div>
    {/each}
  </div>
</div>

<style>
  h1 {
    margin-bottom: 0px;
  }
</style>