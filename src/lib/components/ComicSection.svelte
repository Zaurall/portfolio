<script lang="ts">
	import moment from 'moment';
	import type { Comic } from '$lib/components/comic';
	import { afterUpdate, onMount } from 'svelte';

	export let comicData: Comic;

	let alt = '';
	let momentFrom = '';
	let date = '';
	let safe_title = '';
	let src = '';

	onMount(() => {
		handleImg(comicData);
	});

	function handleImg(comicObj: Comic) {
		alt = comicObj.alt;
		src = comicObj.img.toString();
		let dateObj: Date = new Date(
			Date.UTC(Number(comicObj.year), Number(comicObj.month), Number(comicObj.day))
		);
		safe_title = comicObj.safe_title;
		momentFrom = moment(dateObj).fromNow();
		date = dateObj.toLocaleDateString();
	}

	onMount(() => {
		handleImg(comicData);
	});

	afterUpdate(() => {
		handleImg(comicData);
	});
</script>

{#if alt}
	<section class="section-img">
		<img class="main-img" {src} {alt} />
		<p>{safe_title}</p>
		<p>{date}</p>
		<p>Published {momentFrom}</p>
	</section>
{/if}

<style>
	.section-img {
		margin: 10rem auto;
		position: relative;
		width: 127rem;
	}
	.main-img {
		display: block;
		margin: auto;
		max-width: 700px;
		width: 127rem;
	}
	p {
		text-align: center;
		font-size: var(--fontsize-medium2);
	}
</style>
