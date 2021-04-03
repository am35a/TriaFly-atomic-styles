<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="row-direction" class="mb-3">
    <div class="h4" role="heading" aria-level="4">Horizontal (row) reverse</div>
    <p>
        Use <b>.flex-row</b> to set a horizontal direction and <b>.flex-row-reverse</b> to start the horizontal direction from the opposite side.
    </p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-grid g-3">
                <div>
                    <div class="d-flex flex-row bg-background p-3 rounded-2 g-3">
                        <div class="bg-positive p-3 rounded-2">Item 1</div>
                        <div class="bg-positive p-3 rounded-2">Item 2</div>
                    </div>
                </div>
                <div>
                    <div class="d-flex flex-row-reverse bg-background p-3 rounded-2 g-3">
                        <div class="bg-positive p-3 rounded-2">Item 1</div>
                        <div class="bg-positive p-3 rounded-2">Item 2</div>
                    </div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex flex-row">
    <div>Item 1</div>
    <div>Item 2</div>
    </div>
    <div class="d-flex flex-row-reverse">
    <div>Item 1</div>
    <div>Item 2</div>
    </div>
            '
        />
    </div>
</div>
