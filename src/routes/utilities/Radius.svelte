<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="radius" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Radius</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-grid g-3">
                <div class="d-flex flex-wrap g-3">
                    <div class="bg-background border p-5 rounded-0"></div>
                    <div class="bg-background border p-5 rounded-sm"></div>
                    <div class="bg-background border p-5 rounded"></div>
                    <div class="bg-background border p-5 rounded-lg"></div>
                </div>
                <div class="d-flex flex-wrap g-3">
                    <div class="bg-background border p-5 rounded-circle"></div>
                    <div class="bg-background border p-5 rounded-pill" style="width: 16rem;"></div>
                </div>
                <div class="d-flex flex-wrap g-3">
                    <div class="bg-background border p-5 rounded-circle rounded-left-0"></div>
                    <div class="bg-background border p-5 rounded-circle rounded-top-0"></div>
                    <div class="bg-background border p-5 rounded-circle rounded-right-0"></div>
                    <div class="bg-background border p-5 rounded-circle rounded-bottom-0"></div>
                </div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="rounded-0"></div>
    <div class="rounded-sm"></div> /* or rounded-1 */
    <div class="rounded"></div>
    <div class="rounded-lg"></div> /* or rounded-3 */

    <div class="rounded-circle"></div>
    <div class="rounded-pill"></div>

    <div class="rounded-circle rounded-left-0"></div>
    <div class="rounded-circle rounded-top-0"></div>
    <div class="rounded-circle rounded-right-0"></div>
    <div class="rounded-circle rounded-bottom-0"></div>
            '
        />
    </div>
</div>
