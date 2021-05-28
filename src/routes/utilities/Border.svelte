<script>
    import AddBorder from './border/AddBorder.svelte'
    import CutBorder from './border/CutBorder.svelte'
</script>

<div id="border">
    <div class="h2" role="heading" aria-level="2">Border</div>
    <div class="d-inline-block rounded-2 bg-warning mb-4 p-4">
        <i class="fas fa-info-circle"></i> Border partly support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>. Here is not support breakpoints: 'add border' and 'cut border'.
    </div>
    <AddBorder/>
    <CutBorder/>
</div>