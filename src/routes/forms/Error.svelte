<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="error" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Error</div>
    <div class="rounded-2 overflow-hidden">
        <form class="bg-background rounded-2 rounded-bottom-0 p-3">
            <label for="inputTextError" class="tf_form-label text-error">Label error</label>
            <input id="inputTextError" class="tf_form-control tf_form-control-error" type="text" placeholder="Placeholder">
            <div class="tf_form-text text-error">
                This line can contains additional information to the input field above.
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <label for="inputText" class="tf_form-label text-error">Label error</label>
    <input id="inputText" class="tf_form-control tf_form-control-error" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-error">
        This line can contains additional information to the input field above.
    </div>
            '
        />
    </div>
</div>
