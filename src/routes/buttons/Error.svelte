<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="error" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Error</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-error">Error button</button>
                <button class="tf_btn tf_btn-error"><i class="fas fa-home"></i> Icon button</button>
                <button class="tf_btn tf_btn-error active">Active button</button>
                <button class="tf_btn tf_btn-error used">Used button</button>
                <button class="tf_btn tf_btn-error" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Error color button
    <button class="tf_btn tf_btn-error">Error button</button>
    
    // error color button with icon
    <button class="tf_btn tf_btn-error">
        <i class="fas fa-home"></i> Icon button
    </button>

    // Error color active button
    <button class="tf_btn tf_btn-error active">Active button</button>

    // Error color used button
    <button class="tf_btn tf_btn-error used">Used button</button>

    // Error color disabled button
    <button class="tf_btn tf_btn-error" disabled>Disabled button</button>
            '
        />
    </div>
</div>