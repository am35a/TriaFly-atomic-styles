<script>
    import { state } from '../store/store'
    import AsideNav from '../components/AsideNav.svelte'

    export let segment
    let inverTheme = false
</script>

<style>
    /* Here is empty, all into global.css */
</style>

<svelte:head>
    {#if inverTheme}
	    <link rel="stylesheet" href="css/_root-colors-alt.css">
    {/if}    
</svelte:head>

<main class="tf_layout-main {$state.fullscreen ? 'tf_layout-main--fullscreen' : ''} p-3">
    <slot></slot>
</main>
<header class="tf_layout-header position-relative">
    <button class="tf_layout-aside-expander" tabindex="-1"><i class="fas fa-bars"></i></button>
    <div class="text-uppercase">
        {segment === undefined ? 'Home' : segment}
    </div>
    <div class="d-flex align-items-center ml-auto h-100">
        <button
            class="tf_btn px-3 h-100"
            on:click="{() => inverTheme = !inverTheme}"
        >
            <i class="fas fa-fill-drip"></i>
        </button>
        <a class="d-flex text-decoration-none px-2 h-100" href="https://github.com/am35a/TriaFly-atomic-styles" target="_blank"><i class="fab fa-github fa-2x m-auto"></i></a>
    </div>
</header>
<aside class="tf_layout-aside">
    <AsideNav {segment}/>
</aside>