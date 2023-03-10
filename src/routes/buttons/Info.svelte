<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="info" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Info</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-info">Info button</button>
                <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> Icon button</button>
                <button class="tf_btn tf_btn-info active">Active button</button>
                <button class="tf_btn tf_btn-info used">Used button</button>
                <button class="tf_btn tf_btn-info" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Info color button
    <button class="tf_btn tf_btn-info">Info button</button>
    
    // Info color button with icon
    <button class="tf_btn tf_btn-info">
    <i class="fas fa-home"></i> Icon button
    </button>

    // Info color active button
    <button class="tf_btn tf_btn-info active">Active button</button>

    // Info color used button
    <button class="tf_btn tf_btn-info used">Used button</button>

    // Info color disabled button
    <button class="tf_btn tf_btn-info" disabled>Disabled button</button>
            '
        />
    </div>
</div>