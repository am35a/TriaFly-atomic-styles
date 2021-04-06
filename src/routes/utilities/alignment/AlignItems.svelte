<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let align = {
        display: 'grid',
        // content: 'normal',
        items: 'normal',
        // self: 'auto'
    }
</script>

<div id="align-items" class="mb-3">
    <div class="h4" role="heading" aria-level="4">Align items</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-flex flex-wrap g-3">
                <button
                    on:click="{() => align.display = 'grid'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'grid'}
                ><i class="fas {align.display === 'grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Grid</button>
                <button
                    on:click="{() => align.display = 'flex'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'flex'}
                ><i class="fas {align.display === 'flex' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Flex</button>
            </div>
            <hr>
            <div class="d-flex flex-wrap g-3">
                <button
                    on:click="{() => align.items = 'baseline'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.items === 'baseline'}
                ><i class="fas {align.items === 'baseline' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Baseline</button>
                <button
                    on:click="{() => align.items = 'center'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.items === 'center'}
                ><i class="fas {align.items === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                <button
                    on:click="{() => align.items = 'end'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.items === 'end'}
                ><i class="fas {align.items === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                <button
                    on:click="{() => align.items = 'start'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.items === 'start'}
                ><i class="fas {align.items === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                <button
                    on:click="{() => align.items = 'stretch'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.items === 'stretch'}
                ><i class="fas {align.items === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
            </div>
            <hr>
            <div class="d-{align.display} g-3 p-3 rounded bg-positive cols-2 align-items-{align.items}" style="height:16rem;">
                <div class="p-3 bg-background rounded">Item 1</div>
                <div class="p-3 bg-background rounded">Item 2</div>
                <div class="p-3 bg-background rounded">Item 3</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-{align.display} align-items-{align.items}">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
            '
        />
    </div>
</div>
