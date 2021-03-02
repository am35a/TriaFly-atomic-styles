<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="h1" role="heading" aria-level="1">Utilities</div>

<div id="align" class="h2" role="heading" aria-level="2">Vertical alignment</div>
<p>Use one from .align-baseline, .align-top, .align-middle, .align-bottom, .align-text-bottom, or .align-text-top as needed.</p>
<p>Pay attention: the styles accept only to inline and table-sell display property</p>
<div class="h3">Inline block wrap</div>
<div class="p-3 lh-lg bg-secondary">
    <span class="bg-positive mx-1 align-baseline">.align-baseline</span>
    <span class="bg-positive mx-1 align-top">.align-top</span>
    <span class="bg-positive mx-1 align-middle">.align-middle</span>
    <span class="bg-positive mx-1 align-bottom">.align-bottom</span>
    <span class="bg-positive mx-1 align-text-top">.align-text-top</span>
    <span class="bg-positive mx-1 align-text-bottom">.align-text-bottom</span>    
</div>
<Highlight language="{xml}" code='
    <span class="align-baseline">.align-baseline</span>
    <span class="align-top">.align-top</span>
    <span class="align-middle">.align-middle</span>
    <span class="align-bottom">.align-bottom</span>
    <span class="align-text-top">.align-text-top</span>
    <span class="align-text-bottom">.align-text-bottom</span>    
'/>
<div class="h3">Table sell wrap</div>
<table class="bg-secondary" style="height: 120px;">
    <tr>
        <td class="bg-positive p-2 align-baseline">.align-baseline</td>
        <td class="bg-positive p-2 align-top">.align-top</td>
        <td class="bg-positive p-2 align-middle">.align-middle</td>
        <td class="bg-positive p-2 align-bottom">.align-bottom</td>
        <td class="bg-positive p-2 align-text-top">.align-text-top</td>
        <td class="bg-positive p-2 align-text-bottom">.align-text-bottom</td>
    </tr>
</table>