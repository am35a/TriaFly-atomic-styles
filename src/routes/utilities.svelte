<script>
    import PageLayout from "../components/PageLayout.svelte"
    import Alignment  from "../routes/utilities/Alignment.svelte"
    import BgColor    from "../routes/utilities/BgColor.svelte"
    import Border     from "../routes/utilities/Border.svelte"
    import Radius     from "../routes/utilities/Radius.svelte"
    import Clearfix   from "../routes/utilities/Clearfix.svelte"
    import Display    from "../routes/utilities/Display.svelte"
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
        <a href="utilities#clearfix">Clearfix</a>
        <a href="utilities#display">Display</a>
    </slot>
    <div id="utilities" class="h1" role="heading" aria-level="1">Utilities</div>
    <Alignment/>
    <BgColor/>
    <Border/>
    <Radius/>
    <Clearfix/>
    <Display/>
</PageLayout>