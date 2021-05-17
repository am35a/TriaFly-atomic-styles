<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="transparent" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Transparent</div>
    <p>Inverted color buttons are transparent like buttons by default.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-3 text-center">
            <div class="d-inline-flex g-3 flex-wrap">
                <button class="tf_btn tf_btn-transparent">transparent button</button>
                <button class="tf_btn tf_btn-transparent"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-transparent active">active button</button>
                <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // transparent button
    <button class="tf_btn tf_btn-transparent">transparent button</button>
        
    // transparent button with icon
    <button class="tf_btn tf_btn-transparent">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // active button
    <button class="tf_btn tf_btn-transparent active">active button</button>
    
    // transparent disabled button
    <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
            '
        />
    </div>
</div>
