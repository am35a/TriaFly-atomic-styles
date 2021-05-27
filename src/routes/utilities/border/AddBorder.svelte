<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="add-border" class="mb-4">
    <div class="h3" role="heading" aria-level="3">Add border</div>
    <p>If an element does not have a border, it can be created by adding classes: <b>.border</b>, <b>.border-top</b>, <b>.border-right</b>, <b>.border-bottom</b> и <b>.border-left</b>.</p>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-4">
            <div class="d-flex flex-wrap g-4">
                <div class="bg-background p-5 border"></div>
                <div class="bg-background p-5 border-top"></div>
                <div class="bg-background p-5 border-right"></div>
                <div class="bg-background p-5 border-bottom"></div>
                <div class="bg-background p-5 border-left"></div>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <div class="border"></div>
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
                '
        />
    </div>
</div>
