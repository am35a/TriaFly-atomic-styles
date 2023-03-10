<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="success" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Success</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-success">Success button</button>
                <button class="tf_btn tf_btn-success"><i class="fas fa-home"></i> Icon button</button>
                <button class="tf_btn tf_btn-success active">Active button</button>
                <button class="tf_btn tf_btn-success used">Used button</button>
                <button class="tf_btn tf_btn-success" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Success color button
    <button class="tf_btn tf_btn-success">Success button</button>
        
    // Success color button with icon
    <button class="tf_btn tf_btn-success">
        <i class="fas fa-home"></i> Icon button
    </button>
    
    // active button
    <button class="tf_btn tf_btn-success active">Active button</button>

    // Success color used button
    <button class="tf_btn tf_btn-success used">Used button</button>

    // Success color disabled button
    <button class="tf_btn tf_btn-success" disabled>Disabled button</button>
            '
        />
    </div>
</div>