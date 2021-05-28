<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="column-direction" class="mb-4">
    <div class="h4" role="heading" aria-level="4">Vertical (column) reverse</div>
    <p>
        Use <b>.flex-column</b> to set a horizontal direction and <b>.flex-column-reverse</b> to start the horizontal direction from the opposite side.
    </p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-grid g-4">
                <div>
                    <div class="d-flex flex-column bg-background p-4 rounded-2 g-4">
                        <div class="bg-positive p-4 rounded-2">Item 1</div>
                        <div class="bg-positive p-4 rounded-2">Item 2</div>
                    </div>
                </div>
                <div>
                    <div class="d-flex flex-column-reverse bg-background p-4 rounded-2 g-4">
                        <div class="bg-positive p-4 rounded-2">Item 1</div>
                        <div class="bg-positive p-4 rounded-2">Item 2</div>
                    </div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex flex-column">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
    <div class="d-flex flex-column-reverse">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
            '
        />
    </div>
</div>
