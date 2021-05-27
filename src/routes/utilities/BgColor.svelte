<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="bg-color" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Background colors</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Background colors fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4 text-center">
            <div class="d-grid g-4 cols-2">
                <div class="py-4 rounded-2 bg-primary text-positive">.bg-primary</div>
                <div class="py-4 rounded-2 bg-secondary text-positive">.bg-secondary</div>
                <div class="py-4 rounded-2 bg-success text-positive">.bg-success</div>
                <div class="py-4 rounded-2 bg-warning text-positive">.bg-warning</div>
                <div class="py-4 rounded-2 bg-error text-positive">.bg-error</div>
                <div class="py-4 rounded-2 bg-info text-positive">.bg-info</div>
                <div class="py-4 rounded-2 bg-positive text-negative">.bg-positive</div>
                <div class="py-4 rounded-2 bg-negative text-positive">.bg-negative</div>
                <div class="py-4 rounded-2 bg-background text-negative">.bg-background</div>
                <div class="py-4 rounded-2 bg-transparent text-negative">.bg-transparent</div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="bg-primary">.bg-primary</div>
    <div class="bg-secondary">.bg-secondary</div>
    <div class="bg-success">.bg-success</div>
    <div class="bg-danger">.bg-danger</div>
    <div class="bg-warning">.bg-warning</div>
    <div class="bg-info">.bg-info</div>
    <div class="bg-positive">.bg-positive</div>
    <div class="bg-negative">.bg-negative</div>
    <div class="bg-background">.bg-background</div>
    <div class="bg-transparent">.bg-transparent</div>
                '
            />
    </div>
</div>
