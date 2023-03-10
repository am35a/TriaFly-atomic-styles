<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="size" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Sizes</div>
    <p>For change size of buttons use <b>.tf_btn-xs</b>, <b>.tf_btn-sm</b> and <b>.tf_btn-lg</b> classes.</p>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Pay attention: the following font size classes 
        <b>.fs-xxs</b>, <b>.fs-xs</b>, <b>.fs-sm</b>, <b>.fs-lg</b>, <b>.fs-xl</b> or <b>.fs-xxl</b> can be used to resize buttons.
    </div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap align-items-center">
                <button class="tf_btn tf_btn-primary tf_btn-xs">Extra small button</button>
                <button class="tf_btn tf_btn-primary tf_btn-sm">Small button</button>
                <button class="tf_btn tf_btn-primary">Normal button</button>
                <button class="tf_btn tf_btn-primary tf_btn-lg">Large button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Extra small size button
    <button class="tf_btn tf_btn-primary tf_btn-xs">Extra small button</button>
    
    // Small size button
    <button class="tf_btn tf_btn-primary tf_btn-sm">Small button</button>
    
    // Normal size button
    <button class="tf_btn tf_btn-primary">Normal button</button>
    
    // Large size button
    <button class="tf_btn tf_btn-primary tf_btn-lg">Large button</button>
            '
        />
    </div>
</div>