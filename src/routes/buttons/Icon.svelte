<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="icon" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Icon</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4 text-center">
            <div class="d-inline-flex g-4 flex-wrap align-items-center">
                <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-xs"><i class="fas fa-cog"></i></button>
                <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm"><i class="fas fa-info"></i></button>
                <button class="tf_btn tf_btn-primary tf_btn-icon"><i class="fas fa-infinity"></i></button>
                <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg"><i class="fas fa-brain"></i></button>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // Icon extra small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-xs">
        <i class="fas fa-cog"></i>
    </button>

    // Icon small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm">
        <i class="fas fa-info"></i>
    </button>

    // Icon normal size button
    <button class="tf_btn tf_btn-primary tf_btn-icon">
        <i class="fas fa-infinity"></i>
    </button>

    // Icon large size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg">
        <i class="fas fa-brain"></i>
    </button>
            '
        />
    </div>
</div>