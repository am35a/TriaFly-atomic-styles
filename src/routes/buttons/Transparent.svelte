<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="transparent" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Transparent</div>
    <p>Inverted color buttons are transparent like buttons by default.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn tf_btn-transparent">Transparent button</button>
                <button class="tf_btn tf_btn-transparent"><i class="fas fa-home"></i> icon button</button>
                <button class="tf_btn tf_btn-transparent active">Active button</button>
                <button class="tf_btn tf_btn-transparent used">Used button</button>
                <button class="tf_btn tf_btn-transparent" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Transparent color button
    <button class="tf_btn tf_btn-transparent">transparent button</button>
        
    // Transparent color button with icon
    <button class="tf_btn tf_btn-transparent">
        <i class="fas fa-home"></i> Icon button
    </button>

    // Transparent coloractive button
    <button class="tf_btn tf_btn-transparent active">active button</button>
    
    // Transparent color used button
    <button class="tf_btn tf_btn-transparent used">Used button</button>
    
    // Transparent color disabled button
    <button class="tf_btn tf_btn-transparent" disabled>Disabled button</button>
            '
        />
    </div>
</div>
