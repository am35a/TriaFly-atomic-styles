<script>
    import { state } from '../store/store'

    import IconHome		 from './icons/Home.svelte'
    import IconCore		 from './icons/Core.svelte'
    import IconButtons	 from './icons/Buttons.svelte'
    import IconForms	 from './icons/Forms.svelte'
    // import IconBlocks	 from './icons/Blocks.svelte'
    import IconGrid		 from './icons/Grid.svelte'
    import IconLayout	 from './icons/Layout.svelte'
    import IconUtilities from './icons/Utilities.svelte'

    export let segment
    const pages = [
            {
                id: 1,
                segment: 'core',
                component: IconCore
            },		
            {
                id: 2,
                segment: 'buttons',
                component: IconButtons
            },
            {
                id: 3,
                segment: 'forms',
                component: IconForms
            },
            // {
            //     id: 4,
            //     segment: 'blocks',
            //     component: IconBlocks
            // },
            {
                id: 5,
                segment: 'grid',
                component: IconGrid
            },
            {
                id: 99,
                segment: 'utilities',
                component: IconUtilities
            },
            {
                id: 100,
                segment: 'layout',
                component: IconLayout
            }
        ]
</script>

<style>
    :global(svg) {
        width: calc(var(--key-size) * 1.5);
        height: calc(var(--key-size) * 1.5);
    }
    /* .tf_item-title {
        padding-right: var(--key-size) !important;
    } */
</style>

<div
    class="tf_aside-fader"
    on:click={() => $state.isAsideExpand = false}
>
<i class="fas fa-times-circle fa-lg"></i>
</div>
<div class="tf_aside-navbar">
    <div
        class="tf_navbar-item {segment === undefined  ? 'tf_navbar-item--active' : ''}"
        on:click={() => $state.isAsideExpand = false}
    >
        <div class="tf_item-hover"></div>
        <div class="tf_item-active"></div>
        <a class="tf_item-identicon" href="."><IconHome/></a>
        <!-- <a class="tf_item-actioncon" href="" title=""><i class="fa fa-plus"></i></a> -->
        <a class="tf_item-title" href=".">Home</a>
    </div>
    {#each pages as page (page.id)}
        <div
            class="tf_navbar-item {segment === page.segment  ? 'tf_navbar-item--active' : ''}"
            on:click={() => $state.isAsideExpand = false}
        >
            <div class="tf_item-hover"></div>
            <div class="tf_item-active"></div>
            <a class="tf_item-identicon" href="{page.segment}/#{page.segment}">
                <svelte:component this={page.component}/>
            </a>
            <a class="tf_item-title text-capitalize" href="{page.segment}/#{page.segment}">{page.segment}</a>
        </div>
    {/each}
</div>
<div class="tf_aside-logo">
    <div class="tf_logo-container">
        <div class="tf_logo-small">
            <img class="tf_logo-small" src="images/logo-icon.svg" alt="TriaFly">
        </div>
        <div class="tf_logo-normal">
            <img src="images/logo-icon.svg" alt="TriaFly">
            <div class="tf_logo-title">
                <b>TriaFly UI Kit</b> <br> The easier way to create high-loaded apps.
            </div>
        </div>
    </div>
</div>
