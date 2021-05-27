<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="warning" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Warning</div>
    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive rounded-2 rounded-bottom-0 p-4">
            <label for="inputTextWarning" class="tf_form-label text-warning">Label warning</label>
            <input id="inputTextWarning" class="tf_form-control tf_form-control-warning" type="text" placeholder="Placeholder">
            <div class="tf_form-text text-warning">
                This line can contains additional information to the input field above.
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <label for="inputText" class="tf_form-label text-warning">Label warning</label>
    <input id="inputText" class="tf_form-control tf_form-control-warning" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-warning">
        This line can contains additional information to the input field above.
    </div>
            '
        />
    </div>
</div>
