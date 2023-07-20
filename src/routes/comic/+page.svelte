<script lang="ts">
	import ComicSection from '$lib/components/ComicSection.svelte';
	import { load } from '../+page.js';

	export async function loadComic() {
		return await load();
	}

	export let data;
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="author" content="Zaurall Mach aka Nurislam Zinnatullin">
	<meta name="description" content="Some comic that is connected to particular id. Can make you laugh">
	<meta name="keywords" content="comic, laugh, bad ex, personal website, portfolio, blog, zaurall, mach, zaurallmach, zaurall mach">
	<meta name="robots" content="index, follow">
</svelte:head>

<ComicSection comicData={data.comicData} />