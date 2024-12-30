<script lang="ts">
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('@justinribeiro/lite-youtube');
	});

	export let videoId: string;
	export let videoTitle = 'Play YouTube Video';
</script>

<div class="yt-box">
	<lite-youtube videoid={videoId} videotitle={videoTitle}>
    <a class="lite-youtube-fallback" target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>{videoTitle}</a>
  </lite-youtube>
</div>

<style>
	.yt-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
