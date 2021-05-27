<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="group" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Group</div>
    <!-- <p>For change size of buttons use <b>.tf_btn-sm</b> and <b>.tf_btn-lg</b> classes:</p> -->
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap align-items-center">
                <div class="tf_btn-group">
                    <button class="tf_btn tf_btn-primary">first button</button>
                    <button class="tf_btn tf_btn-primary">second button</button>
                    <button class="tf_btn tf_btn-primary">third button</button>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    ...
            '
        />
    </div>
</div>