<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="align-inline" class="mb-3">
    <div class="h4" role="heading" aria-level="4">Inline block wrap</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive p-3 text-center">
            <div class="lh-lg">
                <span class="mx-3 align-baseline">baseline</span>
                <span class="mx-3 align-top">top</span>
                <span class="mx-3 align-middle">middle</span>
                <span class="mx-3 align-bottom">bottom</span>
                <span class="mx-3 align-text-top">text-top</span>
                <span class="mx-3 align-text-bottom">text-bottom</span>
            </div>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <span class="align-baseline">.align-baseline</span>
    <span class="align-top">.align-top</span>
    <span class="align-middle">.align-middle</span>
    <span class="align-bottom">.align-bottom</span>
    <span class="align-text-top">.align-text-top</span>
    <span class="align-text-bottom">.align-text-bottom</span>    
            '
        />
    </div>
</div>