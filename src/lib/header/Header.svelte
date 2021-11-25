<script lang="ts">
	import { page } from '$app/stores';
	import logo from '../../../static/Decathlon_Logo.svg';
	import IconButton from '../header/IconButton.svelte';
	import Search from '../../components/searchbar/Search.svelte';
	let searchQuery = ''
</script>

<header>
	<div class="corner">
		<IconButton title="menu" />
		<a href="http://localhost:3000">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
    <Search bind:query={searchQuery} />
	</nav>

	<div class="corner">
		<ul>
			<li class:active={$page.path === '/contact-us'}><a sveltekit:prefetch href="/contact-us"> <IconButton title="contact-us" /> </a></li>
			<li class:active={$page.path === '/find-a-store'}><a sveltekit:prefetch href="/find-a-store"> <IconButton title="find-a-store" /> </a></li>
			<li class:active={$page.path === '/profile'}><a sveltekit:prefetch href="/profile"> <IconButton title="profile" /> </a></li>
		</ul>
		<div class="border">
			<IconButton title="cart" />
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		background: #f7f7f7;
		padding: 20px;
		justify-content: space-between;
	}

	img{
		max-width: 120px;
	}

	.corner {
		display: flex;
		align-items: center;
	}

	.corner a {
		align-items: center;
		justify-content: center;
		margin-left: 20px;
		width: 100%;
		height: 100%;
	}

	.corner img {
		max-width: 180px;
		object-fit: contain;
	}

	.border {
		background: yellow;
		padding-left: 25px;
		transform: skewX(-11deg);
		align-items: center;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
