<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Menu from '$lib/menu/Menu.svelte';
	import '../app.css';
	// import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { page } from '$app/stores';

</script>

<Header>
	<!-- <Breadcrumb path={$page.path} /> -->
</Header>
<Menu/>
<main>
	<slot />
</main>

<footer>
	<Footer/>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
