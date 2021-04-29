<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="position" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Position</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-3 p-3">
        <i class="fas fa-check-circle"></i> Position fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div id="position-values" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Values</div>
        <ul>
            <li>.position-static</li>
            <li>.position-relative</li>
            <li>.position-absolute</li>
            <li>.position-fixed</li>
            <li>.position-sticky</li>
        </ul>
    </div>
    <div id="position-arrange" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Arrange</div>
        <p>
            X-axis
        </p>
        <ul>
            <li>.left-0 | .start-0</li>
            <li>.left-50 | .start-50</li>
            <li>.left-100 | .start-100</li>
            <li>.right-0 | .end-0</li>
            <li>.right-50 | .end-50</li>
            <li>.right-100 | .end-100</li>
        </ul>
        <p>
            Y-axis
        </p>
        <ul>
            <li>.top-0</li>
            <li>.top-50</li>
            <li>.top-100</li>
            <li>.bottom-0</li>
            <li>.bottom-50</li>
            <li>.bottom-100</li>
        </ul>
    </div>
    <div id="position-translate" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Translate</div>
        <p>
            For change self position use <b>.translate-middle-x</b> or|and <b>.translate-middle-y</b> classes.
        </p>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="position-relative bg-background" style="height: 24rem;">
                    <div class="position-absolute bg-positive p-2 left-0 top-0">.left-0<br>.top-0</div>
                    <div class="position-absolute bg-positive p-2 left-0 top-0">.left-0<br>.top-0</div>
                    <div class="position-absolute bg-positive p-2 right-0 top-0">.right-0<br>.top-0</div>
                    <div class="position-absolute bg-positive p-2 left-50 top-50 translate-middle">.left-50<br>.top-50<br>.translate-middle</div>
                    <div class="position-absolute bg-positive p-2 left-0 bottom-0">.left-0<br>.bottom-0</div>
                    <div class="position-absolute bg-positive p-2 right-0 bottom-0">.right-0<br>.bottom-0</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="position-absolute left-0 top-0">.left-0<br>.top-0</div>
    <div class="position-absolute left-0 top-0">.left-0<br>.top-0</div>
    <div class="position-absolute right-0 top-0">.right-0<br>.top-0</div>
    <div class="position-absolute left-50 top-50 translate-middle">.left-50<br>.top-50<br>.translate-middle</div>
    <div class="position-absolute left-0 bottom-0">.left-0<br>.bottom-0</div>
    <div class="position-absolute right-0 bottom-0">.right-0<br>.bottom-0</div>
                '
            />
        </div>
    </div>
</div>

