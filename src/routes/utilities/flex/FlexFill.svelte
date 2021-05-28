<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="flex-fill" class="mb-4">
    <div class="h4" role="heading" aria-level="4">Fill</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-flex bg-background p-4 rounded-2 g-4">
                <div class="flex-fill bg-positive p-4 rounded-2">Item</div>
                <div class="flex-fill bg-positive p-4 rounded-2">Item</div>
                <div class="flex-fill bg-positive p-4 rounded-2">A lot of content in item</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex">
        <div class="flex-fill">Item</div>
        <div class="flex-fill">Item</div>
        <div class="flex-fill">A lot of content in item</div>
    </div>
            '
        />
    </div>
</div>
