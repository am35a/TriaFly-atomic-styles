<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="info" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Info</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-3 text-center">
            <div class="d-inline-flex g-3 flex-wrap">
                <button class="tf_btn tf_btn-info">info button</button>
                <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-info active">active button</button>
                <button class="tf_btn tf_btn-info" disabled>disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // info color button
    <button class="tf_btn tf_btn-info">info button</button>
    
    // info color button with icon
    <button class="tf_btn tf_btn-info">
    <i class="fas fa-home"></i>
    icon button
    </button>

    // active button
    <button class="tf_btn tf_btn-info active">active button</button>

    // info color disabled button
    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
            '
        />
    </div>
</div>