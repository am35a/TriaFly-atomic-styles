<script>
    import PageLayout from "../components/PageLayout.svelte"
    import Alignment  from "../routes/utilities/Alignment.svelte"
    import BgColor    from "../routes/utilities/BgColor.svelte"
    import Border     from "../routes/utilities/Border.svelte"
    import Radius     from "../routes/utilities/Radius.svelte"
    import Clearfix   from "../routes/utilities/Clearfix.svelte"
    import Display    from "../routes/utilities/Display.svelte"
    import Flex       from "../routes/utilities/Flex.svelte"
    import Float      from "../routes/utilities/Float.svelte"
    import Position   from "./utilities/Position.svelte"
    import Sizing     from "./utilities/Sizing.svelte"
    import Spacing    from "./utilities/Spacing.svelte"
    import Text       from "./utilities/Text.svelte"
</script>

<PageLayout id="utilities">
    <slot slot="aside">
        <a href="utilities#alignment">Alignment</a>
            <a href="utilities#vertical-alignment">- Vertical alignment</a>
                <a href="utilities#align-inline">-- Inline block wrap</a>
                <a href="utilities#align-table">-- Table sell wrap</a>
            <a href="utilities#multi-alignment">- Multi-layout alignment</a>
                <a href="utilities#align-content">-- Align content</a>
                <a href="utilities#align-items">-- Align items</a>
                <a href="utilities#align-self">-- Align self</a>
                <a href="utilities#justify-content">-- Justify content</a>
                <a href="utilities#justify-items">-- Justify items</a>
                <a href="utilities#justify-self">-- Justify self</a>
        <a href="utilities#bg-color">Background colors</a>
        <a href="utilities#border">Border</a>
            <a href="utilities#add-border">- Add Border</a>
            <a href="utilities#cut-border">- Cut Border</a>
            <a href="utilities#radius">- Radius</a>
        <a href="utilities#clearfix">Clearfix</a>
        <a href="utilities#display">Display</a>
        <a href="utilities#flex">Flex</a>
            <a href="utilities#d-flex">- Display flex</a>
            <a href="utilities#flex-direction">- Direction</a>
                <a href="utilities#row-direction">-- Horizontal (row)</a>
                <a href="utilities#column-direction">-- Vertical (column)</a>
            <a href="utilities#wraping">- Wraping</a>
                <a href="utilities#flex-wrap">-- Wrap</a>
                <a href="utilities#flex-wrap-reverse">-- Wrap reverse</a>
                <a href="utilities#flex-nowrap">-- No wrap</a>
            <a href="utilities#filling">- Filling</a>
                <a href="utilities#flex-fill">-- Fill</a>
                <a href="utilities#flex-equal">-- Equal</a>
                <a href="utilities#flex-grow">-- Grow</a>
                <a href="utilities#flex-shrink">-- Shrink</a>
        <a href="utilities#float">Float</a>
        <a href="utilities#position">Position</a>
        <a href="utilities#sizing">Sizing</a>
        <a href="utilities#spacing">Spacing</a>
        <a href="utilities#text">Text</a>
            <a href="utilities#text-alignment">- Alignment</a>
            <a href="utilities#word-break">- Word break</a>
            <a href="utilities#text-wrapping">- Text wrapping</a>
            <a href="utilities#text-transform">- Transform</a>
            <a href="utilities#text-decoration">- Decoration</a>
            <a href="utilities#text-colors">- Colors</a>
            <a href="utilities#weight-style">- Size, weight & style</a>
            <a href="utilities#line-height">- Line height</a>
    </slot>
    <div class="h1" role="heading" aria-level="1">Utilities</div>
    <Alignment/>
    <BgColor/>
    <Border/>
    <Radius/>
    <Clearfix/>
    <Display/>
    <Flex/>
    <Float/>
    <Position/>
    <Sizing/>
    <Spacing/>
    <Text/>
</PageLayout>