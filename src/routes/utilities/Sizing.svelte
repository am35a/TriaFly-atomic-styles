<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="sizing" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Sizing</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Sizing fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div id="sizing-values" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Values</div>
        <p>The following classes are used to control the width size:</p>
        <ul>
            <li>.w-25</li>
            <li>.w-50</li>
            <li>.w-75</li>
            <li>.w-100</li>
            <li>.w-auto</li>
        </ul>
        <p>The following classes are used to control the height size:</p>
        <ul>
            <li>.h-25</li>
            <li>.h-50</li>
            <li>.h-75</li>
            <li>.h-100</li>
            <li>.h-auto</li>
        </ul>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <div class="bg-background mb-4">
                    <div class="bg-secondary text-center p-2 w-25">.w-25</div>
                    <div class="bg-secondary text-center p-2 w-50">.w-50</div>
                    <div class="bg-secondary text-center p-2 w-75">.w-75</div>
                    <div class="bg-secondary text-center p-2 w-100">.w-100</div>
                </div>
                <div class="bg-background d-flex" style="height: 16rem;">
                    <div class="bg-secondary text-center p-2 h-25">.h-25</div>
                    <div class="bg-secondary text-center p-2 h-50">.h-50</div>
                    <div class="bg-secondary text-center p-2 h-75">.h-75</div>
                    <div class="bg-secondary text-center p-2 h-100">.h-100</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="w-25">.w-25</div>
    <div class="w-50">.w-50</div>
    <div class="w-75">.w-75</div>
    <div class="w-100">.w-100</div>

    <div class="h-25">.h-25</div>
    <div class="h-50">.h-50</div>
    <div class="h-75">.h-75</div>
    <div class="h-100">.h-100</div>
                '
            />
        </div>
    </div>
    <div id="sizing-resize" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Resize</div>
        <p></p>
        <ul>
            <li>.resize-none</li>
            <li>.resize-both</li>
            <li>.resize-horizontal</li>
            <li>.resize-vertical</li>
        </ul>
    </div>
</div>