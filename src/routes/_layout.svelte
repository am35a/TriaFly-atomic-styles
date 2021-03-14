<script>
    import { qtcreator_dark, qtcreator_light } from "svelte-highlight/styles"

    import { state } from '../store/store'
    import AsideNav from '../components/AsideNav.svelte'

    export let segment
    let inverTheme = false
</script>

<style>
    /* Here is empty, all into global.css */
</style>

<svelte:head>
    <title>TriaFly UI Kit - {segment}</title>
    {#if inverTheme}
	    <link rel="stylesheet" href="css/_root-colors-alt.css">
        {@html qtcreator_light}
    {:else}
        {@html qtcreator_dark}
    {/if}
</svelte:head>

<main class="tf_layout-main {$state.fullscreen ? 'tf_layout-main--fullscreen' : ''} p-3">
    <slot></slot>
</main>
<header class="tf_layout-header position-relative">
    <button
        class="tf_layout-aside-expander" tabindex="-1"
        on:click={() => $state.isAsideExpand = true}
    >
        <i class="fas fa-bars"></i>
    </button>
    <div class="text-uppercase text-truncate">
        {segment === undefined ? 'Home' : segment}
    </div>
    <div class="d-flex g-1 ml-auto h-100"> <!-- align-items-center -->
        <button
            class="tf_btn tf_btn-lg tf_btn-transparent tf_btn-icon"
            on:click={() => inverTheme = !inverTheme}
        >
            <i class="fas fa-fill-drip"></i>
        </button>
        <button
            class="tf_btn tf_btn-lg tf_btn-transparent tf_btn-icon mr-1"
            on:click={() => window.location = "https://github.com/am35a/TriaFly-atomic-styles"}
        >
            <i class="fab fa-github fa-lg"></i>
        </button>
    </div>
</header>
<aside class="tf_layout-aside {$state.isAsideExpand ? 'tf_expand' : ''}">
    <AsideNav {segment}/>
</aside>
{#if $state.loader}
    <div class="tf_layout-loader">
        Loading data...
    </div>
{/if}
