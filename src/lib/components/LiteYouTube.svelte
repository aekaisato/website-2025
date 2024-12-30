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
		<div class="lite-youtube-fallback">
			<img loading="lazy" src="https://i.ytimg.com/vi/{videoId}/hqdefault.jpg" alt="thumbnail for {videoTitle}" />
			<a target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>Play: {videoTitle}</a>
		</div>
  </lite-youtube>
</div>

<style>
	.yt-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.lite-youtube-fallback {
		display: flex;
		flex-direction: column;
		align-items: center;
		
		a {
			text-align: center;
		}
	}
</style>
