<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let align = {
        content: 'normal',
        items: 'normal',
        self: 'auto'
    }
</script>

<div id="multi-alignment" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Flex and grid alignment</div>
    <div id="align-content" class="mb-3">
        <div class="h4" role="heading" aria-level="4">Align content</div>
        <p>Align rows vertically. The alignment value sets to the container. Default value is <b>normal</b>.</p>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => align.content = 'around'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'around' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Around</button>
                    <button
                        on:click="{() => align.content = 'between'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'between' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Between</button>
                    <button
                        on:click="{() => align.content = 'center'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                    <button
                        on:click="{() => align.content = 'end'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                    <button
                        on:click="{() => align.content = 'evenly'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'evenly' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Evenly</button>
                    <button
                        on:click="{() => align.content = 'start'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                    <button
                        on:click="{() => align.content = 'stretch'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.content === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
                </div>
                <hr>
                <div class="d-grid g-3 p-3 rounded bg-positive cols-2 align-content-{align.content}" style="height:16rem;">
                    <div class="p-3 bg-background rounded">Item 1</div>
                    <div class="p-3 bg-background rounded">Item 2</div>
                    <div class="p-3 bg-background rounded">Item 3</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="align-content-{align.content}">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
                '
            />
        </div>
    </div>
    <div id="align-items" class="mb-3">
        <div class="h4" role="heading" aria-level="4">Align items</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => align.items = 'baseline'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.items === 'baseline' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Baseline</button>
                    <button
                        on:click="{() => align.items = 'center'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.items === 'center' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Center</button>
                    <button
                        on:click="{() => align.items = 'end'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.items === 'end' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> End</button>
                    <button
                        on:click="{() => align.items = 'start'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.items === 'start' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Start</button>
                    <button
                        on:click="{() => align.items = 'stretch'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {align.items === 'stretch' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Stretch</button>
                </div>
                <hr>
                <div class="d-grid g-3 p-3 rounded bg-positive cols-2 align-items-{align.items}" style="height:16rem;">
                    <div class="p-3 bg-background rounded">Item 1</div>
                    <div class="p-3 bg-background rounded">Item 2</div>
                    <div class="p-3 bg-background rounded">Item 3</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="align-items-{align.items}">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
                '
            />
        </div>
    </div>
    <div id="align-self" class="mb-3">
        <div class="h4" role="heading" aria-level="4">Align self</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
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
                <div class="d-grid g-3 p-3 rounded bg-positive cols-2" style="height:16rem;">
                    <div class="p-3 bg-background rounded align-self-{align.self}">Item 1</div>
                    <div class="p-3 bg-background rounded align-self-{align.self}">Item 2</div>
                    <div class="p-3 bg-background rounded align-self-{align.self}">Item 3</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div>
        <div class="align-self-{align.self}">Item 1</div>
        <div class="align-self-{align.self}">Item 2</div>
        <div class="align-self-{align.self}">Item 3</div>
    </div>
                    '
            />
        </div>
    </div>
</div>