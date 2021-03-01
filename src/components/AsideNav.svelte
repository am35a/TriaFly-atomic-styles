<script>
	import { state } from '../store/store'

	import IconHome from '../components/icons/Home.svelte'
	import IconButtons from './icons/Buttons.svelte'
	import IconForms from './icons/Forms.svelte'
	import IconBlocks from './icons/Blocks.svelte'
	import IconGrid from './icons/Grid.svelte'
	import IconLayout from './icons/Layout.svelte'
	import IconUtilities from './icons/Utilities.svelte'

	export let segment
	const pages = [
			{
				id: 1,
				segment: 'buttons',
				component: IconButtons
			},
			{
				id: 2,
				segment: 'forms',
				component: IconForms
			},
			{
				id: 3,
				segment: 'blocks',
				component: IconBlocks
			},
			{
				id: 4,
				segment: 'grid',
				component: IconGrid
			},
			{
				id: 99,
				segment: 'layout',
				component: IconLayout
			},
			{
				id: 100,
				segment: 'utilities',
				component: IconUtilities
			}
		]
</script>

<style>
	:global(svg) {
		width: calc(var(--key-size) * 1.5);
		height: calc(var(--key-size) * 1.5);
	}
	.tf_item-title {
		padding-right: var(--key-size) !important;
	}
</style>

<div
	class="tf_aside-fader"
	on:click={() => $state.isAsideExpand = false}
>
	<i class="fas fa-times"></i>
</div>
<div class="tf_aside-navbar">
	<div class="tf_navbar-item {segment === undefined  ? 'tf_navbar-item--active' : ''}">
		<div class="tf_item-hover"></div>
		<div class="tf_item-active"></div>
		<a class="tf_item-identicon" href="."><IconHome/></a>
		<a class="tf_item-title" href=".">Home</a>
	</div>
	{#each pages as page (page.id)}
		<div
			class="tf_navbar-item {segment === page.segment  ? 'tf_navbar-item--active' : ''}"
			on:click={() => $state.isAsideExpand = false}
		>
			<div class="tf_item-hover"></div>
			<div class="tf_item-active"></div>
			<a class="tf_item-identicon" href="{page.segment}">
				<svelte:component this={page.component}/>
			</a>
			<a class="tf_item-title text-capitalize" href="{page.segment}">{page.segment}</a>
		</div>
	{/each}
	<!-- <div class="tf_navbar-item {segment === 'blog' ? 'tf_navbar-item--active' : ''} position-absolute bottom-0">
		<div class="tf_item-hover"></div>
		<div class="tf_item-active"></div>
		<a class="tf_item-identicon" href="blog"><IconBlog/></a>
		<a class="tf_item-title" href="blog">Blog</a>
	</div> -->
</div>