<script lang="ts">
	import navLinks from "$lib/content/nav-links.json";
</script>

<svelte:head>
	<title>Aiden Sato | aekai</title>
</svelte:head>

<div class="container">
	<div class="background">
		<img src="./bg.webp" alt="background displaying buildings in tokyo at night" />
	</div>
	<div class="content-box">
		<h1>Aiden Sato</h1>
		<hr/>
		{#each navLinks as link}
			<h2 class={link.wip ? "wip" : ""}>
				{#if link.wip}
					{link.name}
				{:else}
					<a href="{link.path}">{link.name}</a>
				{/if}
			</h2>
		{/each}
	</div>
</div>

<style>
	.background {
		position: absolute;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		z-index: -1;
	}

	.background > img {
		object-fit: cover;
		width: 100vw;
		height: 100vh;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.3);
		flex-direction: column;
	}

	.content-box {
		background-color: rgba(0, 0, 0, 0.8);
		color: var(--text-color);
		font-family: 'Space Grotesk';
		padding: 3vh;
		backdrop-filter: blur(10px);
		border-radius: 8px;
	}

	h1, h2 {
		margin: 2vh;
		text-align: left;
	}

	h2 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}

	a:hover {
		text-decoration: underline;
	}

	.wip {
		color: #888888;
	}

	.wip:after {
		content: " (coming soon...)"
	}
</style>
