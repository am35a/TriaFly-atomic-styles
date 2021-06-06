<script>
    import {onMount} from 'svelte'
    import { qtcreator_dark, qtcreator_light } from "svelte-highlight/styles"

    import { fly } from 'svelte/transition'

    import { state } from '../store/store'
    import AsideNav from '../components/AsideNav.svelte'

    export let segment
    let inverTheme = false
    let font = ''
    let body

    onMount(() => {
        body = document.body
    })

    $: font, changeFont()
    function changeFont() {
        if (!font && body)
            body.classList.remove('roboto', 'source-sans-pro')
        if (font === 'source-sans-pro') {
            if(!body)
                body = document.body
            body.classList.remove('roboto')
            body.classList.add(font)
        }
        if (font === 'roboto') {
            if(!body)
                body = document.body
            body.classList.remove('source-sans-pro')
            body.classList.add(font)
        }
    }
</script>

<style>
    /* Here is empty, all into global.css */
    :global(.source-sans-pro) { font-family: "Source Sans Pro"; }
    :global(.roboto) { font-family: "Roboto"; }
</style>

<svelte:head>
    <title>TriaFly UI Kit - {segment}</title>
    {#if inverTheme}
	    <link rel="stylesheet" href="css/theme-dark.css">
        {@html qtcreator_light}
    {:else}
        {@html qtcreator_dark}
    {/if}
</svelte:head>

<main class="tf_layout-main {$state.fullscreen ? 'tf_layout-main--fullscreen' : ''} p-4">
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
    <div class="d-flex g-1 ml-auto"> <!-- align-items-center -->
        <button
            class="tf_btn tf_btn-lg tf_btn-transparent tf_btn-icon"
            on:click="{() => $state.popupSettings = !$state.popupSettings}"
        >
            <i class="fas fa-cog"></i>
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
{#if $state.popupLoader}
    <div
        on:click="{() => $state.popupLoader = !$state.popupLoader}"
        class="tf_layout-popup-loader"
    >
        Loading data...
    </div>
{/if}
{#if $state.popupToaster}
    <div
        on:click="{() => $state.popupToaster = !$state.popupToaster}"
        class="tf_layout-popup-toster"
    >
        <div>First toast message</div>
        <div>Second toast message</div>
        <div>Third toast message</div>
    </div>
{/if}
{#if $state.modalLoader}
    <div class="tf_layout-modal-loader" on:click="{() => $state.modalLoader = !$state.modalLoader}">
        <div class="m-auto bg-positive px-5 py-4 rounded d-flex">
            <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".25" cx="18" cy="18" r="18"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="1s"
                                repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
            <div class="my-auto ml-4">
                Loading data...
            </div>
        </div>
    </div>
{/if}
{#if $state.popupSettings}
    <div class="tf_layout-popup-settings" transition:fly="{{ x: 100, duration: 250 }}">
        <div class="p-4 overflow-y-auto">
            <div class="h4" role="heading">Settings</div>
            <hr>
            <div class="mb-4">
                <div class="h5" role="heading">Themes</div>
                <button
                    class="tf_btn tf_btn-transparent w-100 text-start"
                    on:click={() => inverTheme = !inverTheme}
                >
                    {#if inverTheme}
                        <i class="fas fa-sun mr-1"></i>
                        Back to default light
                    {:else}
                        <i class="fas fa-moon mr-1"></i>
                        Enable alt dark theme
                    {/if}
                </button>
            </div>
            <div class="mb-4">
                <div class="h5" role="heading">Fonts</div>
                <label class="d-block p-2" for="font-default">
                    <input type="radio" id="font-default" bind:group={font} value="">
                    Default system
                </label>
                <label class="d-block p-2" for="font-source-sans-pro">
                    <input type="radio" id="font-source-sans-pro" bind:group={font} value="source-sans-pro">
                    Source Sans Pro
                </label>
                <label class="d-block p-2" for="font-roboto">
                    <input type="radio" id="font-roboto" bind:group={font} value="roboto">
                    Roboto
                </label>
            </div>
        </div>
        <div class="mt-auto p-2">
            <button
                on:click="{() => $state.popupSettings = !$state.popupSettings}"
                class="tf_btn tf_btn-secondary w-100"
            >
                Close
            </button>
        </div>
    </div>
{/if}