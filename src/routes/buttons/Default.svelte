<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="default" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Default</div>
    <p>To create a default button, use the <b>.tf_btn</b> class, but default state is not recommended to use without color classes for any buttons.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap">
                <button class="tf_btn">Default button</button>
                <button class="tf_btn"><i class="fas fa-home"></i> Icon button</button>
                <button class="tf_btn active">Active button</button>
                <button class="tf_btn used">Used button</button>
                <button class="tf_btn" disabled>Disabled button</button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Default color button
    <button class="tf_btn">Default button</button>

    // Default color button with icon
    <button class="tf_btn">
        <i class="fas fa-home fa-fw"></i> Icon button
    </button>

    // Default color active button
    <button class="tf_btn active">Active button</button>

    // Default color used button
    <button class="tf_btn used">Used button</button>

    // Default color disabled button
    <button class="tf_btn" disabled>Disabled button</button>
            '
        />
    </div>
</div>