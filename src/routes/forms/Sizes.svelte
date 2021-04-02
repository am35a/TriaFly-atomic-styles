<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="sizes" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Sizes</div>
    <p>For change size of forms use <b>.tf_form-control-sm</b> and <b>.tf_form-control-lg</b> classes.</p>
    <div class="rounded-2 overflow-hidden">
        <form class="d-grid g-3 bg-positive rounded-2 rounded-bottom-0 p-3">
            <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
            <input class="tf_form-control" type="text" placeholder="Placeholder">
            <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
    <input class="tf_form-control" type="text" placeholder="Placeholder">
    <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">    
            '
        />
    </div>
</div>