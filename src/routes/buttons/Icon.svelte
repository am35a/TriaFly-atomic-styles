<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="icon" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Icon</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
            <div class="d-inline-flex g-3 flex-wrap align-items-center">
                <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm"><i class="fas fa-info"></i></button>
                <button class="tf_btn tf_btn-primary tf_btn-icon"><i class="fas fa-infinity"></i></button>
                <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg"><i class="fas fa-brain"></i></button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // icon small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm">
    <i class="fas fa-info"></i>
    </button>

    // icon normal size button
    <button class="tf_btn tf_btn-primary tf_btn-icon">
    <i class="fas fa-infinity"></i>
    </button>

    // icon large size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg">
    <i class="fas fa-brain"></i>
    </button>
            '
        />
    </div>
</div>