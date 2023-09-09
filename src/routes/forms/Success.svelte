<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="success" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Success</div>
    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive rounded-2 rounded-bottom-0 p-4">
            <label for="inputTextSuccess" class="tf_form-label text-success">Label success</label>
            <input id="inputTextSuccess" class="tf_form-control tf_form-control-success" type="text" placeholder="Placeholder">
            <p class="tf_form-text text-success">
                This line can contains additional information to the input field above.
            </p>
            <div class="tf_form-check text-success">
                <input class="tf_form-check-input" id="сheckSuccessSize" type="checkbox">
                <label class="tf_form-check-label" for="сheckSuccessSize">Checkbox success</label>
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <label for="inputText" class="tf_form-label text-success">Label success</label>
    <input id="inputText" class="tf_form-control tf_form-control-success" type="text" placeholder="Placeholder">
    <p class="tf_form-text text-success">
        This line can contains additional information to the input field above.
    </p>
    <div class="tf_form-check text-success">
        <input class="tf_form-check-input" id="сheckSuccessSize" type="checkbox">
        <label class="tf_form-check-label" for="сheckSuccessSize">Checkbox success</label>
    </div>'
        />
    </div>
</div>
