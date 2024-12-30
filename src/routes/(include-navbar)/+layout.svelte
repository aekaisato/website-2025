<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';
	let { children } = $props();
</script>

<nav class="navbar">
	<a href="/"><img class="home-img" src="/pfp.svg" alt="home" /></a>
	<NavLinks />
</nav>

{@render children()}

<style>
  :root {
    --glow-color: #917adf;
  }

	.navbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		padding: 15px 0px;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		border-bottom: 2px solid var(--text-color);

		:global(h2) {
			color: var(--text-color);
			font-weight: normal;
      font-size: 14pt;
		}
		:global(a) {
			color: var(--text-color);
			text-decoration: none;
		}
		:global(a:hover) {
			text-decoration: underline;
		}
		:global(.wip) {
			opacity: 0.5;
		}

    @media (orientation: portrait) {
    :global(h2) {
      font-size: 12pt;
    }
  }
	}

	.home-img {
		width: 2em;
		height: 2em;
		image-rendering: pixelated;
		filter: drop-shadow(0px 0px 2px var(--glow-color));
		transition-duration: 1s;
	}
	.home-img:hover {
		filter: drop-shadow(0px 0px 10px var(--glow-color));
	}

  @media print {
    nav {
      display: none !important;
    }
  }
</style>
