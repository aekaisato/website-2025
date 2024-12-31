<script lang="ts">
  import navLinks from "$lib/content/nav-links.json";
</script>

{#each navLinks as link}
  <h2 class={link.wip ? "wip" : ""}>
    {#if link.wip}
      {link.name}
    {:else}
      <a href="{link.path}" target={link.newtab ? "_blank" : '_self'}>{link.name}</a>
    {/if}
  </h2>
{/each}