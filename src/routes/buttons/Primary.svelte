<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="primary" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Primary</div>
    <p>One of the main colors button is primary.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-3 text-center">
            <div class="d-inline-flex g-3 flex-wrap">
                <button class="tf_btn tf_btn-primary">primary button</button>
                <button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // primary color button
    <button class="tf_btn tf_btn-primary">primary button</button>

    // primary color button with icon
    <button class="tf_btn tf_btn-primary">
    <i class="fas fa-home"></i>
    icon button
    </button>

    // primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
            '
        />
    </div>
</div>