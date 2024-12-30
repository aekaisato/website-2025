<script lang="ts">
	import NavLinks from '$lib/components/NavLinks.svelte';
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
		<hr />
		<NavLinks />
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

		:global(h1),
		:global(h2) {
			margin: 2vh;
			text-align: left;
		}

		:global(h2) {
			font-weight: normal;
		}

		:global(a) {
			text-decoration: none;
			color: var(--text-color);
		}

		:global(a:hover) {
			text-decoration: underline;
		}

		:global(.wip) {
			color: #888888;
		}

		:global(.wip:after) {
			content: ' (coming soon...)';
		}
	}
</style>
