<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="primary" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Primary</div>
    <!-- <p>To create a default button, use the <b>.tf_btn</b> class, but default state is not recommended to use without color classes for any buttons.</p> -->
    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive rounded-2 rounded-bottom-0 p-3">
            <label for="inputTextPrimary" class="tf_form-label text-primary">Label primary</label>
            <input id="inputTextPrimary" class="tf_form-control tf_form-control-primary" type="text" placeholder="Placeholder">
            <div class="tf_form-text text-primary">
                This line can contains additional information to the input field above.
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <label for="inputText" class="tf_form-label text-primary">Label primary</label>
    <input id="inputText" class="tf_form-control tf_form-control-primary" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-primary">
        This line can contains additional information to the input field above.
    </div>
            '
        />
    </div>
</div>
