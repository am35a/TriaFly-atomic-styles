<script>
    import PageLayout from "../components/PageLayout.svelte"
    import Alignment  from "../routes/utilities/Alignment.svelte"
    import BgColor    from "../routes/utilities/BgColor.svelte"
    import Border     from "../routes/utilities/Border.svelte"
    import Radius     from "../routes/utilities/Radius.svelte"
    import Clearfix     from "../routes/utilities/Clearfix.svelte"
</script>

<PageLayout>
    <slot slot="aside">
        <a href="utilities#alignment">Alignment</a>
            <a href="utilities#vertical-alignment">- Vertical alignment</a>
                <a href="utilities#vertical-alignment-inline">-- Inline block wrap</a>
                <a href="utilities#vertical-alignment-table">-- Table sell wrap</a>
            <a href="utilities#multi-alignment">- Multi-layout alignment</a>
                <a href="utilities#align-content">-- Align content</a>
                <a href="utilities#align-items">-- Align items</a>
                <a href="utilities#align-self">-- Align self</a>
        <a href="utilities#bg-color">Background colors</a>
        <a href="utilities#border">Border</a>
            <a href="utilities#add-border">- Add Border</a>
            <a href="utilities#cut-border">- Cut Border</a>
        <a href="utilities#radius">Radius</a>
        <!-- <a href="utilities#clearfix">Clearfix</a>
        <a href="utilities#display">Display</a> -->
    </slot>
    <div id="utilities" class="h1" role="heading" aria-level="1">Utilities</div>
    <Alignment/>
    <BgColor/>
    <Border/>
    <Radius/>
    <Clearfix/>
</PageLayout>


<div class="d-grid g-3 d-none">

    <div id="display" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Display</div>
        <p>
            For change the display value of tags use follow display classes:
        </p>
        <ul>
            <li>.d-inline</li>
            <li>.d-block</li>
            <li>.d-inline-block</li>
            <li>.d-grid</li>
            <li>.d-inline-grid</li>
            <li>.d-flex</li>
            <li>.d-inline-flex</li>
            <li class="text-warning">.d-table</li>
            <li class="text-warning">.d-table-row</li>
            <li class="text-warning">.d-table-cell</li>
            <li>.d-none</li>
            <li>.d-unset</li>
        </ul>
        <p>For hiding an element use <b>.d-none</b> class.</p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> Pay attention: <b>.d-inline</b> can ignore upsizing and margin for focus on baseline.
        </p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> <b>.table</b>, <b>.table-row</b> and <b>.table-cell</b> values it's not better idea to use. Choose another way to goal.
        </p>
    </div>

</div>


