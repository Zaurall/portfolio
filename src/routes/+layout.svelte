<script>
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
</script>

<svelte:head>
	<title>Zaurall's Personal Website</title>
	<meta name="author" content="Zaurall Mach aka Nurislam Zinnatullin" />
	<meta
		name="description"
		content="My personal website-portfolio that has some information about me, my projects, and contacts"
	/>
	<meta
		name="keywords"
		content="personal website, portfolio, blog, zaurall, mach, zaurallmach, zaurall mach"
	/>
	<meta name="robots" content="index, follow" />
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
