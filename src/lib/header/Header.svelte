<script lang="ts">
	import { page } from '$app/stores';
	import logo from '../../../static/Decathlon_Logo.svg';
	import IconButton from '../header/IconButton.svelte';
	import DecathlonIcon from './DecathlonIcon.svelte';
	import Search from '../../components/searchbar/Search.svelte';
	let searchQuery = ''
</script>

<header>
	<div class="corner">
		<IconButton title="menu" className="menuicon" />
		<a href="http://localhost:3000" class="logo">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
    <Search bind:query={searchQuery} />
	<div class="corner">
		<ul class="mobile-hide">
			<li class:active={$page.path === '/contact-us'}><a sveltekit:prefetch href="/contact-us"> <DecathlonIcon style="" type='help-line' title="contact us" /> </a></li>
			<li class:active={$page.path === '/find-a-store'}><a sveltekit:prefetch href="/find-a-store"> <DecathlonIcon style="" type='store' title="find a store" /> </a></li>
			<li class:active={$page.path === '/profile'}><a sveltekit:prefetch href="/profile"> <DecathlonIcon style="" type="user" title="profile" /> </a></li>
		</ul>
		<div class="mybasket">
			<DecathlonIcon type="cart" style="" title="My Basket"/>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		
		padding: 0px;
		justify-content: space-between;
	}
	.logo {
		padding: 10px 10px;
	}
	img{
		max-width: 120px;
	}

	.corner {
		display: flex;
	}

	.corner a {
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: #1a2a34;
	}
	.corner a:hover,.corner a:visited{
		color: #1a2a34;
		cursor: pointer;
		text-decoration: none;
	}
	.corner ul{
		padding: 10px 0;
	}
	.corner ul li a span::before{
		font-size: 30px;
	}
	.corner img {
		max-width: 180px;
		object-fit: contain;
	}

	.mybasket {
		background: #ffea28;
		padding: 10px 20px;
		align-items: center;
		width: 60px;
		position: relative;
		text-align: center;
	}
	.mybasket::before{
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #ffea28;
		-webkit-transform: skewX(-10deg);
		transform: skewX(-10deg);
		-webkit-transform-origin: top left;
		transform-origin: top left;
		z-index: -1;
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
		width: 90px;
		text-align: center;
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
	@media screen and (max-width:480px){
		.mybasket{
			padding: 10px 5px;
		}
	}
</style>
