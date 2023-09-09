<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let pointerPositions = {
        after: 'after',
        before: 'before',
        none: ''
    },
    pointerPosition = pointerPositions.after

    let dropPositions = [
        'center center',
        'right top',
        'right center',
        'right bottom',
        'bottom right',
        'bottom center',
        'bottom left',
        'left bottom',
        'left center',
        'left top',
        'top left',
        'top center',
        'top right',
    ],
    dropPosition = dropPositions[6]
</script>

<div id="dropdown" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Dropdown</div>
    <p>The width of the dropdown container can be changed using <b>--drop-content-width</b> variable.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-flex flex-wrap g-4">
                {#each Object.entries(pointerPositions) as [name, position]}
                    <button
                        on:click="{() => pointerPosition = pointerPositions[name]}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={pointerPosition === position}
                    ><i class="fas {pointerPosition === position ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> {name}</button>
                {/each}
            </div>
            <hr>
            <div class="d-flex flex-wrap g-4">
                {#each dropPositions as position, i}
                    <button
                        on:click="{() => dropPosition = dropPositions[i]}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={dropPosition === position}
                    ><i class="fas {dropPosition === position ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> {position}</button>
                {/each}
            </div>
            <hr>
            <div class="d-inline-flex g-4 flex-wrap">
                <div class="tf_drop-focus">
                    <button
                        class="tf_btn tf_btn-drop"
                        data-pointer-position={pointerPosition}
                        data-drop-position={dropPosition}
                    >Dropdown button</button>
                    <div class="tf_drop-content" style="--drop-content-width:12rem;">
                        <div class="bg-positive rounded p-1 shadow" tabindex="0">
                            <div class="d-grid g-1">
                                <div>Dropdown content is located here.</div>
                                <div>It can be buttons, forms and other elements of UI.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="tf_drop-focus">
        <button
            class="tf_btn tf_btn-drop"
            {pointerPosition ? `data-pointer-position="${pointerPosition}"` : ''}
            data-drop-position="{dropPosition}"
        >Dropdown button</button>
        <div class="tf_drop-content">
            <div class="d-grid g-1 bg-positive rounded p-1 shadow" tabindex="0">
                // dropdown content
            </div>
        </div>
    </div>
            '
        />
    </div>
</div>