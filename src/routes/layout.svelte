<script>
    import { state } from '../store/store'
</script>

<svelte:head>
	<title>Layout</title>
</svelte:head>

<h1>Layout</h1>

<h2>Full screen mode</h2>
<p>
    Add <code>.tf_layout-main--fullscreen</code> or <code>.fullscreen-mode</code> classes to <code>.tf_layout-main</code> to expand the area to full screen
</p>
<button
    on:click="{() => $state.fullscreen = !$state.fullscreen}"
    class="tf_btn tf_btn-secondary"
>
    <i class="fas {$state.fullscreen ? 'fa-compress' : 'fa-expand'} mr-2"></i>Toogle fullscreen
</button>

