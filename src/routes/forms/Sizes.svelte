<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="sizes" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Sizes</div>
    <p>For change size of forms use <b>.tf_form-control-sm</b> and <b>.tf_form-control-lg</b> classes.</p>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Pay attention: the following font size classes 
        <b>.fs-xxs</b>, <b>.fs-xs</b>, <b>.fs-sm</b>, <b>.fs-lg</b>, <b>.fs-xl</b> or <b>.fs-xxl</b> can be used to resize forms.
    </div>
    <div class="rounded-2 overflow-hidden">
        <form class="d-grid g-4 bg-positive rounded-2 rounded-bottom-0 p-4">
            <input class="tf_form-control tf_form-control-xs" type="text" placeholder="Placeholder">
            <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
            <input class="tf_form-control" type="text" placeholder="Placeholder">
            <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">
        </form>
        <form class="d-grid g-4 bg-positive rounded-2 rounded-bottom-0 p-4">
            <div class="tf_form-check">
                <input class="tf_form-check-input" id="сheckSize" type="checkbox">
                <label class="tf_form-check-label" for="сheckSize">Checkbox input</label>
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <input class="tf_form-control tf_form-control-xs" type="text" placeholder="Placeholder">
    <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
    <input class="tf_form-control" type="text" placeholder="Placeholder">
    <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">'
        />
    </div>
</div>