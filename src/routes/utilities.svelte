<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="d-grid g-3">

    <div>
        <div class="h1" role="heading" aria-level="1">Utilities</div>
    </div> 

    <div>
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
        <p>Please note that .align-baseline, .align-text-top and .align-text-bottom do not affect the behavior of the container.</p>
        <table class="bg-secondary" style="height: 120px;">
            <tr>
                <td class="bg-error p-2 align-baseline">.align-baseline</td>
                <td class="bg-positive p-2 align-top">.align-top</td>
                <td class="bg-positive p-2 align-middle">.align-middle</td>
                <td class="bg-positive p-2 align-bottom">.align-bottom</td>
                <td class="bg-error p-2 align-text-top">.align-text-top</td>
                <td class="bg-error p-2 align-text-bottom">.align-text-bottom</td>
            </tr>
        </table>
<Highlight language="{xml}" code='
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
'/>
    </div>

    <div>
        <div id="align" class="h2" role="heading" aria-level="2">Background colors</div>
        <div>
            <div class="p-3 mb-2 bg-primary text-positive">.bg-primary</div>
            <div class="p-3 mb-2 bg-secondary text-positive">.bg-secondary</div>
            <div class="p-3 mb-2 bg-success text-positive">.bg-success</div>
            <div class="p-3 mb-2 bg-danger text-positive">.bg-danger</div>
            <div class="p-3 mb-2 bg-warning text-positive">.bg-warning</div>
            <div class="p-3 mb-2 bg-info text-positive">.bg-info</div>
            <div class="p-3 mb-2 bg-positive text-negative">.bg-positive</div>
            <div class="p-3 mb-2 bg-negative text-positive">.bg-negative</div>
            <div class="p-3 mb-2 bg-background text-negative">.bg-background</div>
            <div class="p-3 mb-2 bg-transparent text-negative">.bg-transparent</div>
        </div>
<Highlight language="{xml}" code='
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
'/>
    </div>
</div>


