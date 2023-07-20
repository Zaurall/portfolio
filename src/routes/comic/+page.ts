import type { Comic } from "$lib/components/comic";

export async function load({ fetch }: { fetch: typeof window.fetch }) {
	const email = 'n.zinnatullin@innopolis.university';

	const id = await fetch('https://fwd.innopolis.university/api/hw2?email=' + email).then((r) => r.json());

	const data: Comic = await fetch('https://fwd.innopolis.university/api/comic?id=' + id).then((r) => r.json());
	
	return {
		title: 'Comic',
		comicData: data,
	};
}
  