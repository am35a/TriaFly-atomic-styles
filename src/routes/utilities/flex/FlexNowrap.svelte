<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="flex-nowrap" class="mb-3">
    <div class="h4" role="heading" aria-level="4">No wrap</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-flex flex-nowrap bg-background p-3 rounded-2 g-3 w-25">
                <div class="bg-secondary p-3 rounded-2">Item 1</div>
                <div class="bg-secondary p-3 rounded-2">Item 2</div>
                <div class="bg-secondary p-3 rounded-2">Item 3</div>
                <div class="bg-secondary p-3 rounded-2">Item 4</div>
                <div class="bg-secondary p-3 rounded-2">Item 5</div>
                <div class="bg-secondary p-3 rounded-2">Item 6</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex flex-wrap">
    <div>Item 1</div>
    <div>Item n</div>
    </div>
            '
        />
    </div>
</div>
