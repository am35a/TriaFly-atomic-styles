<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="clearfix" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Clearfix</div>
    <p>
        To expand and cover floated content by a container just add <b>.clearfix</b> class to container.
    </p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4 text-center">
            <div class="d-grid g-4">
                <div class="clearfix">
                    <div class="bg-negative">
                        <div class="bg-background p-4 float-left">Floated left block</div>
                        <div class="bg-background p-4 float-right">Floated left block</div>
                    </div>
                </div>

                <div class="bg-negative clearfix">
                    <div class="bg-background p-4 float-left">Floated left block</div>
                    <div class="bg-background p-4 float-right">Floated left block</div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="clearfix">
        <div class="float-left">Floated left block</div>
        <div class="float-right">Floated left block</div>
    </div>
            '
        />
    </div>
</div>
