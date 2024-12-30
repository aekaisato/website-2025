<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
	<title>{`${page.status} ${page.error?.message}`} | aekai</title>
</svelte:head>

<div class="container">
  <div class="text-box">
    <h1>{page.status}</h1>
    <h2>{page.error?.message}</h2>
  </div>
  <div class="spacer"></div>
  <a href="/">return to homepage...</a>
</div>

<style>
  .container {
    display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		background-color: black;
		flex-direction: column;
    color: var(--text-color);
  }
  .text-box {
    display: flex;
		align-items: center;
		justify-content: center;
    flex-direction: column;
  }
  .spacer {
    height: 10vh;
  }

  h1 {
    font-size: 20vh;
  }
  h1, h2 {
    margin: 0;
  }
  a {
    color: var(--text-color);
  }
</style>