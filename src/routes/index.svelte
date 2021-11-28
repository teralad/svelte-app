<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Banner from "../components/banner/Banner.svelte";
	import Slider from '../components/slider/Slider.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Banner/>
	<Slider />
</section>

<style>
</style>
