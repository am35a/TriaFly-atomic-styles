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
</script>

<PageLayout id="utilities">
    <!-- <details>
        <summary>Epcot Center</summary>
        <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </details> -->
    <slot slot="aside">
        <a href="utilities#alignment">Alignment</a>
            <a href="utilities#vertical-alignment">- Vertical alignment</a>
                <a href="utilities#align-inline">-- Inline block wrap</a>
                <a href="utilities#align-table">-- Table sell wrap</a>
            <a href="utilities#multi-alignment">- Multi-layout alignment</a>
                <a href="utilities#align-content">-- Align content</a>
                <a href="utilities#align-items">-- Align items</a>
                <a href="utilities#align-self">-- Align self</a>
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
</PageLayout>