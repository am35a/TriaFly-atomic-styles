<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="size" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Sizes</div>
    <p>For change size of buttons use <b>.tf_btn-sm</b> and <b>.tf_btn-lg</b> classes:</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap align-items-center">
                <button class="tf_btn tf_btn-primary tf_btn-xs">extra small button</button>
                <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>
                <button class="tf_btn tf_btn-primary">normal button</button>
                <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // extra small size button
    <button class="tf_btn tf_btn-primary tf_btn-xs">extra small button</button>
    
    // small size button
    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>
    
    // normal size button
    <button class="tf_btn tf_btn-primary">normal button</button>
    
    // large size button
    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
            '
        />
    </div>
</div>