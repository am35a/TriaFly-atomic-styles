<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="group" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Group</div>
    <p>To create a group of buttons, use the <b>.tf_btn-group</b> class for wrapping container.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap align-items-center">
                <div class="tf_btn-group">
                    <button class="tf_btn tf_btn-primary">First button</button>
                    <button class="tf_btn tf_btn-primary">Second button</button>
                    <button class="tf_btn tf_btn-primary">Third button</button>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="tf_btn-group">
        <button class="tf_btn tf_btn-primary">First button</button>
        <button class="tf_btn tf_btn-primary">Second button</button>
        <button class="tf_btn tf_btn-primary">Third button</button>
    </div>
            '
        />
    </div>
</div>