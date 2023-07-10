<script lang="ts">
	import Logo from '$lib/components/navigation/Logo.svelte';
	import { base } from '$app/paths';
</script>

<nav class="menu-wrapper">
	<Logo />
	<div class="link-navbar">
		<a href="/comic" class="link-block-navbar">Comics</a>
		<a href="/#about" class="link-block-navbar">About Me</a>
		<a href="/#portfolio" class="link-block-navbar">Portfolio</a>
		<a href="/#contact" class="link-block-navbar">Contact</a>
	</div>
</nav>

<style>
	.menu-wrapper {
		display: flex;
		justify-content: space-between;
		margin: auto;
		width: 127rem;
	}
	.link-navbar {
		display: flex;
	}
	.link-block-navbar {
		margin-left: 30px;
		margin-right: 20px;
		padding: 10px;
		align-self: center;
		font-size: var(--fontsize-small1);
	}
</style>
