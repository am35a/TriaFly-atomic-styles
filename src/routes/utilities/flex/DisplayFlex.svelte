<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="d-flex" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Display flex</div>
    <p>For enable the layout as flex just add one of <b>.d-flex</b> или <b>.d-inline-flex</b> and use alignment, sizing, navigation of flex components.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-grid g-4">
                <div>
                    <div class="d-flex bg-background p-4 rounded-2">Flex</div>
                </div>
                <div>
                    <div class="d-inline-flex bg-background p-4 rounded-2">Inline flex</div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-flex">Flex</div>
    <div class="d-inline-flex">Inline flex</div>
            '
        />
    </div>
</div>