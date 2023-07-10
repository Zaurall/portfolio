<script>
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
</script>

<svelte:head>
	<title>Zaurall</title>
</svelte:head>

<header>
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer>
	<ContactSection contactString={'Contact Me'} />
</footer>

<style>
	header {
		height: 4em;
		background-color: var(--secondary-color);
	}
	main {
		align-items: center;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 2em;
	}
</style>
