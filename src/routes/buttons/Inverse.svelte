<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="inverse" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Inverse</div>
    <p>Inverted color buttons are transparent like buttons by default.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-inverse">inverse button</button>
                <button class="tf_btn tf_btn-inverse"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-inverse active">active button</button>
                <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // inverse color button
    <button class="tf_btn tf_btn-inverse">inverse button</button>
        
    // inverse color button with icon
    <button class="tf_btn tf_btn-inverse">
    <i class="fas fa-home"></i>
    icon button
    </button>

    // inverse color disabled button
    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
            '
        />
    </div>
</div>
