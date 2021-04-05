<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let align = {
        display: 'grid',
        // content: 'normal',
        // items: 'normal',
        self: 'auto'
    }
</script>

<div id="align-self" class="mb-3">
    <div class="h4" role="heading" aria-level="4">Align self</div>
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
                    on:click="{() => align.self = 'baseline'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.self === 'baseline' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Baseline</button>
                <button
                    on:click="{() => align.self = 'center'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.self === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                <button
                    on:click="{() => align.self = 'end'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.self === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                <button
                    on:click="{() => align.self = 'start'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.self === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                <button
                    on:click="{() => align.self = 'stretch'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.self === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
            </div>
            <hr>
            <div class="d-{align.display} g-3 p-3 rounded bg-positive cols-2" style="height:16rem;">
                <div class="p-3 bg-background rounded align-self-{align.self}">Item 1</div>
                <div class="p-3 bg-background rounded align-self-{align.self}">Item 2</div>
                <div class="p-3 bg-background rounded align-self-{align.self}">Item 3</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-{align.display}">
        <div class="align-self-{align.self}">Item 1</div>
        <div class="align-self-{align.self}">Item 2</div>
        <div class="align-self-{align.self}">Item 3</div>
    </div>
                '
        />
    </div>
</div>
