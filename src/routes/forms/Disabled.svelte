<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="disabled" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Disabled</div>
    <p>For change state of forms use <b>disabled</b> attribute.</p>
    <div class="rounded-2 overflow-hidden">
        <form class="d-grid g-4 bg-positive rounded-2 rounded-bottom-0 p-4">
            <input class="tf_form-control tf_form-control-primary" type="text" placeholder="placeholder" disabled>
            <input class="tf_form-control tf_form-control-secondary" type="text" placeholder="placeholder" disabled>
            <input class="tf_form-control tf_form-control-info" type="text" placeholder="placeholder" disabled>
            <input class="tf_form-control tf_form-control-success" type="text" placeholder="placeholder" disabled>
            <input class="tf_form-control tf_form-control-warning" type="text" placeholder="placeholder" disabled>
            <input class="tf_form-control tf_form-control-error" type="text" placeholder="placeholder" disabled>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <input class="tf_form-control tf_form-control-primary" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-secondary" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-info" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-success" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-warning" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-error" type="text" placeholder="placeholder" disabled>
            '
        />
    </div>
</div>