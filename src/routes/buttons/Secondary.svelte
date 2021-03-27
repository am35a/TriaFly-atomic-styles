<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="secondary" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Secondary</div>
    <p>Next of the main colors button is secondary.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
            <div class="d-inline-flex g-3 flex-wrap">
                <button class="tf_btn tf_btn-secondary">secondary button</button>
                <button class="tf_btn tf_btn-secondary"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // secondary color button
    <button class="tf_btn tf_btn-secondary">secondary button</button>

    // secondary color button with icon
    <button class="tf_btn tf_btn-secondary">
    <i class="fas fa-home"></i>
    icon button
    </button>

    // secondary color disabled button
    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
            '
        />
    </div>
</div>