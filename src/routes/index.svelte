<script>
    import { state } from '../store/store'
    // import successkid from 'images/successkid.jpg';
</script>

<style>
    /* Here is empty, all into global.css */
</style>

<svelte:head>
    <title>TriaFly UI Kit - CSS/JS framework for TriaFly BI system</title>
</svelte:head>

<div>
    <button
        on:click="{() => $state.fullscreen = !$state.fullscreen}"
        class="tf_btn tf_btn-secondary float-right"
    >
        <i class="fas {$state.fullscreen ? 'fa-compress' : 'fa-expand'}"></i>
    </button>
</div>
<div class="d-grid g-3">
    <div>
        <!-- <img class="d-inline-flex" src="images/logo-icon.svg" alt="TriaFly"> -->
        <h1>TriaFly UI Kit</h1>
        <strong>This tool make design easier to create responsive and high-loaded applications.</strong>
        <p>Easy to design and multiple settings of responsive Bootstrap interfaces makes it a promising toolkit with lots of diverse components.</p>
    </div>
</div>
