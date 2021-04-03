<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="flex-equal" class="mb-3">
    <div class="h4" role="heading" aria-level="4">Equal</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-flex bg-background p-3 rounded-2 g-3">
                <div class="flex-equal bg-positive p-3 rounded-2">Item</div>
                <div class="flex-equal bg-positive p-3 rounded-2">Item</div>
                <div class="flex-equal bg-positive p-3 rounded-2">A lot of content in item</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex">
        <div class="flex-equal">Item</div>
        <div class="flex-equal">Item</div>
        <div class="flex-equal">A lot of content in item</div>
    </div>
            '
        />
    </div>
</div>