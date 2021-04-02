<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="vertical-alignment" class="mb-3">
    <div class="h3" role="heading" aria-level="3">Vertical alignment</div>
    <p>
        Use one from <b>.align-baseline</b>, <b>.align-top</b>, <b>.align-middle</b>, <b>.align-bottom</b>, <b>.align-text-bottom</b>, or <b>.align-text-top</b> as needed.
    </p>
    <div class="d-inline-block rounded-2 bg-warning mb-3 p-3">
        <i class="fas fa-exclamation-circle"></i> Pay attention: the styles accept only to <b>inline</b> and <b>table-sell</b> display property.
    </div>
    <div id="vertical-alignment-inline" class="mb-3">
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

    <div id="vertical-alignment-table" class="mb-3">
        <div class="h4" role="heading" aria-level="4">Table sell wrap</div>
        <div class="d-inline-block rounded-2 bg-error mb-3 p-3">
            <i class="fas fa-exclamation-circle"></i> Please note that <b>.align-baseline</b>, <b>.align-text-top</b> and <b>.align-text-bottom</b> do not affect the behavior of the container.
        </div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive rounded-2 rounded-bottom-0 p-3 text-center">
                <table class="mx-auto" style="height: 120px;">
                    <tr>
                        <td class="bg-error p-3 align-baseline">baseline</td>
                        <td class="p-3 align-top">top</td>
                        <td class="p-3 align-middle">middle</td>
                        <td class="p-3 align-bottom">bottom</td>
                        <td class="bg-error p-3 align-text-top">text-top</td>
                        <td class="bg-error p-3 align-text-bottom">text-bottom</td>
                    </tr>
                </table>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <table>
        <tr>
            <td class="align-baseline">.align-baseline</td>
            <td class="align-top">.align-top</td>
            <td class="align-middle">.align-middle</td>
            <td class="align-bottom">.align-bottom</td>
            <td class="align-text-top">.align-text-top</td>
            <td class="align-text-bottom">.align-text-bottom</td>
        </tr>
    </table>
                '
            />
        </div>
    </div>
</div>

