<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let justify = {
        display: 'grid',
        content: 'normal',
        // items: 'normal',
        // self: 'auto'
        size: true
    }
</script>

<div id="justify-content" class="mb-4">
    <div class="h4" role="heading" aria-level="4">Justify content</div>
    <p>Justify rows vertically. The justify value sets to the container. Default value is <b>normal</b>.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-flex flex-wrap g-4">
                <button
                    on:click="{() => justify.display = 'grid'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.display === 'grid'}
                ><i class="fas {justify.display === 'grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Grid</button>
                <button
                    on:click="{() => justify.display = 'inline-grid'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.display === 'inline-grid'}
                ><i class="fas {justify.display === 'inline-grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline grid</button>
                <button
                    on:click="{() => justify.display = 'flex'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.display === 'flex'}
                ><i class="fas {justify.display === 'flex' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Flex</button>
                <button
                    on:click="{() => justify.display = 'inline-flex'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.display === 'inline-flex'}
                ><i class="fas {justify.display === 'inline-flex' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline flex</button>
            </div>
            <hr>
            <div>
                <button
                    on:click="{() => justify.size = !justify.size}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {justify.size ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Sized</button>
            </div>
            <hr>
            <div class="d-flex flex-wrap g-4">
                <button
                    on:click="{() => justify.content = 'around'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'around'}
                ><i class="fas {justify.content === 'around' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Around</button>
                <button
                    on:click="{() => justify.content = 'between'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'between'}
                ><i class="fas {justify.content === 'between' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Between</button>
                <button
                    on:click="{() => justify.content = 'center'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'center'}
                ><i class="fas {justify.content === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                <button
                    on:click="{() => justify.content = 'end'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'end'}
                ><i class="fas {justify.content === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                <button
                    on:click="{() => justify.content = 'evenly'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'evenly'}
                ><i class="fas {justify.content === 'evenly' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Evenly</button>
                <button
                    on:click="{() => justify.content = 'start'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'start'}
                ><i class="fas {justify.content === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                <button
                    on:click="{() => justify.content = 'stretch'}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                    disabled={justify.content === 'stretch'}
                ><i class="fas {justify.content === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
            </div>
            <hr>
            <div
                class="d-{justify.display.includes('flex') ? `${justify.display}` : justify.display} g-4 p-4 rounded bg-positive justify-content-{justify.content}"
                style={justify.size ? 'width: 100%; height:16rem;' : ''}
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
    <div class="d-{justify.display.includes('flex') ? `${justify.display} flex-wrap` : justify.display} justify-content-{justify.content}">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
            '
        />
    </div>
</div>
