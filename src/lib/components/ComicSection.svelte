<script lang="ts">
	import moment from 'moment';
	import type { Comic } from '$lib/components/comic';

	const email = 'n.zinnatullin@innopolis.university';

	let alt = '';
	let momentFrom = '';
	let date = '';
	let safe_title = '';
	let src = '';

	function fetchComicId(email: string): Promise<Comic> {
		const params = new URLSearchParams();
		if (email) {
			params.append('email', email);
		}
		return fetch('https://fwd.innopolis.university/api/hw2?' + params.toString()).then((r) =>
			r.json()
		);
	}

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

	async function fetchComicImg() {
		const id = await fetchComicId(email);
		const comicJson: Comic = await fetch(
			'https://fwd.innopolis.university/api/comic?id=' + id
		).then((r) => r.json());
		handleImg(comicJson);
	}
</script>

{#await fetchComicImg() then}
	{#if alt}
		<section class="section-img">
			<img class="main-img" {src} {alt} />
			<p>{safe_title}</p>
			<p>{date}</p>
			<p>Published {momentFrom}</p>
		</section>
	{/if}
{/await}

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
