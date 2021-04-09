<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="float" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Float</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-3 p-3">
        <i class="fas fa-check-circle"></i> Float fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3 text-center">
            <div class="clearfix">
                <div class="float-left">Float left</div>
                <div class="float-right">Float right</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="float-left">Float left</div>
    <div class="float-right">Float right</div>
            '
        />
    </div>
</div>

