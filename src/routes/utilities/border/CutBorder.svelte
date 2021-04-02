<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="cut-border" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Cut border</div>
    <p>If an element have a border, it can be destroy by cutting classes: <b>.border</b>, <b>.border-top</b>, <b>.border-right</b>, <b>.border-bottom</b> и <b>.border-left</b>.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3">
            <div class="d-flex flex-wrap g-3">
                <div class="bg-background p-5 border border-0"></div>
                <div class="bg-background p-5 border border-top-0"></div>
                <div class="bg-background p-5 border border-right-0"></div>
                <div class="bg-background p-5 border border-bottom-0"></div>
                <div class="bg-background p-5 border border-left-0"></div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="border-0"></div>
    <div class="border-top-0"></div>
    <div class="border-right-0"></div>
    <div class="border-bottom-0"></div>
    <div class="border-left-0"></div>
            '
        />
    </div>
</div>
