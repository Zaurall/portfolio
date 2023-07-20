<script lang="ts">
	import ImageSection from '$lib/components/ImageSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import PortfolioSection from '$lib/components/PortfolioSection.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="author" content="Zaurall Mach aka Nurislam Zinnatullin" />
	<meta
		name="description"
		content="My portfolio that has some information about me, my projects, and contacts"
	/>
	<meta
		name="keywords"
		content="personal website, portfolio, blog, zaurall, mach, zaurallmach, zaurall mach"
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<ImageSection />
<AboutSection />
<PortfolioSection />
