<script>
    import DisplayFlex     from './flex/DisplayFlex.svelte'
    import RowDirection    from './flex/RowDirection.svelte'
    import ColumnDirection from './flex/ColumnDirection.svelte'
    import FlexWrap        from './flex/FlexWrap.svelte'
    import FlexNowrap      from './flex/FlexNowrap.svelte'
    import FlexFill        from "./flex/FlexFill.svelte"
    import FlexEqual       from "./flex/FlexEqual.svelte"
    import FlexGrow        from "./flex/FlexGrow.svelte"
    import FlexShrink      from "./flex/FlexShrink.svelte"
</script>

<div id="flex" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Flex</div>
    <DisplayFlex/>
    <div id="flex-direction" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Direction</div>
        <RowDirection/>
        <ColumnDirection/>
    </div>
    <div id="wraping" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Wraping</div>
        <FlexWrap/>
        <FlexNowrap/>
    </div>
    <div id="filling" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Filling</div>
        <FlexFill/>
        <FlexEqual/>
        <FlexGrow/>
        <FlexShrink/>
    </div>
</div>
