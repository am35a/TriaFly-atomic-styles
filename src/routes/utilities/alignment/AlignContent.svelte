<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let align = {
        display: 'grid',
        content: 'normal',
        // items: 'normal',
        // self: 'auto'
        size: true
    }
</script>

<div id="align-content" class="mb-4">
    <div class="h4" role="heading" aria-level="4">Align content</div>
    <p>Align rows vertically. The alignment value sets to the container. Default value is <b>normal</b>.</p>
    <p>The main container must have a height and width greater than the content to display it correctly.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-flex flex-wrap g-4">
                <button
                    on:click="{() => align.display = 'grid'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'grid'}
                ><i class="fas {align.display === 'grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Grid</button>
                <button
                    on:click="{() => align.display = 'inline-grid'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'inline-grid'}
                ><i class="fas {align.display === 'inline-grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline grid</button>
                <button
                    on:click="{() => align.display = 'flex'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'flex'}
                ><i class="fas {align.display === 'flex' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Flex</button>
                <button
                    on:click="{() => align.display = 'inline-flex'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.display === 'inline-flex'}
                ><i class="fas {align.display === 'inline-flex' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline flex</button>
            </div>
            <hr>
            <div>
                <button
                    on:click="{() => align.size = !align.size}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {align.size ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Sized</button>
            </div>
            <hr>
            <div class="d-flex flex-wrap g-4">
                <button
                    on:click="{() => align.content = 'around'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'around'}
                ><i class="fas {align.content === 'around' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Around</button>
                <button
                    on:click="{() => align.content = 'between'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'between'}
                ><i class="fas {align.content === 'between' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Between</button>
                <button
                    on:click="{() => align.content = 'center'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'center'}
                ><i class="fas {align.content === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                <button
                    on:click="{() => align.content = 'end'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'end'}
                ><i class="fas {align.content === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                <button
                    on:click="{() => align.content = 'evenly'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'evenly'}
                ><i class="fas {align.content === 'evenly' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Evenly</button>
                <button
                    on:click="{() => align.content = 'start'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'start'}
                ><i class="fas {align.content === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                <button
                    on:click="{() => align.content = 'stretch'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={align.content === 'stretch'}
                ><i class="fas {align.content === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
            </div>
            <hr>
            <div
                class="d-{align.display.includes('flex') ? `${align.display} flex-wrap` : align.display} g-4 p-4 rounded bg-positive cols-2 align-content-{align.content}"
                style={align.size ? 'width: 100%; height:16rem;' : ''}
            >
                <div class="p-4 bg-background rounded">Item 1</div>
                <div class="p-4 bg-background rounded">Item 2</div>
                <div class="p-4 bg-background rounded">Item 3</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="d-{align.display.includes('flex') ? `${align.display} flex-wrap` : align.display} align-content-{align.content}" {align.size ? 'style="width: 100%; height:16rem;"' : ''}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
            '
        />
    </div>
</div>
