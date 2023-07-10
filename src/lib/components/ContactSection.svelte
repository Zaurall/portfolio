<script lang="ts">
	import gitHubIcon from '../assets/icons/git-hub-icon.png';
	import telegramIcon from '../assets/icons/telegram-icon.png';
	import emailIcon from '../assets/icons/email-icon.png';
	export let contactString = '';
</script>

<p class="contact-string">{contactString}</p>
<section class="contact" id="contact">
	<a href="https://github.com/Zaurall"
		><img src={gitHubIcon} alt="git-hub-icon" class="contact-logo" id="gh-link" /></a
	>
	<a href="https://t.me/zaurall"
		><img src={telegramIcon} alt="telegram-icon" class="contact-logo" id="tg-link" /></a
	>
	<a href="mailto:n.zinnatullin@innopolis.university"
		><img src={emailIcon} alt="email-icon" class="contact-logo" id="email" /></a
	>
</section>

<style>
	.contact-string {
		text-align: center;
		font-size: var(--fontsize-small1);
		margin-top: 10rem;
	}
	.contact {
		display: flex;
		justify-content: space-between;
		margin: auto;
		width: 25rem;
	}
	.contact-logo {
		width: 5rem;
		padding-bottom: 5rem;
	}
	#gh-link {
		width: 5rem;
	}
</style>
