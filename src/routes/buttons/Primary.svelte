<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="primary" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Primary</div>
    <p>One of the main colors button is primary.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-primary">Primary button</button>
                <button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> Icon button</button>
                <button class="tf_btn tf_btn-primary active">Active button</button>
                <button class="tf_btn tf_btn-primary used">Used button</button>
                <button class="tf_btn tf_btn-primary" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Primary color button
    <button class="tf_btn tf_btn-primary">Primary button</button>

    // Primary color button with icon
    <button class="tf_btn tf_btn-primary">
        <i class="fas fa-home"></i> Icon button
    </button>

    // Primary color active button
    <button class="tf_btn tf_btn-primary active">Active button</button>

    // Primary color used button
    <button class="tf_btn tf_btn-primary used">Used button</button>

    // Primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>Disabled button</button>
            '
        />
    </div>
</div>