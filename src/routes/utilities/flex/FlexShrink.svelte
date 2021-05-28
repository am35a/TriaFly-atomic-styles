<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="flex-shrink" class="mb-4">
    <div class="h4" role="heading" aria-level="4">Shrink</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-grid g-4">
                <div>
                    <div class="d-flex bg-background p-4 rounded-2 g-4">
                        <div class="bg-positive p-4 rounded-2">Item</div>
                        <div class="w-100 bg-positive p-4 rounded-2">Item</div>
                        <div class="flex-shrink-0 bg-positive p-4 rounded-2">A lot of content in item</div>
                    </div>
                </div>
                <div>
                    <div class="d-flex bg-background p-4 rounded-2 g-4">
                        <div class="bg-positive p-4 rounded-2">Item</div>
                        <div class="w-100 bg-positive p-4 rounded-2">Item</div>
                        <div class="flex-shrink-1 bg-positive p-4 rounded-2">A lot of content in item</div>
                    </div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex">
        <div>Item</div>
        <div class="w-100">Item</div>
        <div class="flex-shrink-0">A lot of content in item</div>
    </div>
    <div class="d-flex">
        <div>Item</div>
        <div class="w-100">Item</div>
        <div class="flex-shrink-1">A lot of content in item</div>
    </div>
            '
        />
    </div>
</div>
