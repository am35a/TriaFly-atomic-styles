<script>
    import PageLayout        from "../components/PageLayout.svelte"

    import ButtonDefault     from "../routes/buttons/Default.svelte"
    import ButtonInverse     from "../routes/buttons/Inverse.svelte"
    import ButtonTransparent from "../routes/buttons/Transparent.svelte"
    import ButtonPrimary     from "../routes/buttons/Primary.svelte"
    import ButtonSecondary   from "../routes/buttons/Secondary.svelte"
    import ButtonInfo        from "../routes/buttons/Info.svelte"
    import ButtonSuccess     from "../routes/buttons/Success.svelte"
    import ButtonWarning     from "../routes/buttons/Warning.svelte"
    import ButtonError       from "../routes/buttons/Error.svelte"
    import ButtonGroup       from "../routes/buttons/Group.svelte"
    import ButtonIcon        from "../routes/buttons/Icon.svelte"
    import ButtonSize        from "../routes/buttons/Size.svelte"
    import ButtonDropdown    from "../routes/buttons/Dropdown.svelte"
</script>


<PageLayout id="buttons">
    <slot slot="aside">
        <a href="buttons#buttons">Ordinary buttons</a>
            <a href="buttons#default">- Default</a>
            <a href="buttons#inverse">- Inverse</a>
            <a href="buttons#transparent">- Transparent</a>
        <a href="buttons#main-buttons">Color buttons</a>
            <a href="buttons#primary">- Primary</a>
            <a href="buttons#secondary">- Secondary</a>
            <a href="buttons#info">- Info</a>
            <a href="buttons#success">- Success</a>
            <a href="buttons#warning">- Warning</a>
            <a href="buttons#error">- Error</a>
        <a href="buttons#group">Group</a>
        <a href="buttons#size">Size</a>
        <a href="buttons#icon">Icon</a>
        <a href="buttons#dropdown">Dropdown</a>
    </slot>
    <div class="h1" role="heading" aria-level="1">Buttons</div>
    <ButtonDefault/>
    <ButtonInverse/>
    <ButtonTransparent/>
    <div id="main-buttons" class="mb-4">
        <div class="h2" role="heading" aria-level="2">Main color buttons</div>
        <div>
            The following classes defining button colors:
            <ul>
                <li class="text-primary">.tf_btn-primary</li>
                <li class="text-secondary">.tf_btn-secondary</li>
                <li class="text-info">.tf_btn-info</li>
                <li class="text-success">.tf_btn-success</li>
                <li class="text-warning">.tf_btn-warning</li>
                <li class="text-error">.tf_btn-error</li>
            </ul>
        </div>
        <ButtonPrimary/>
        <ButtonSecondary/>
    </div>
    <div id="extra-buttons" class="mb-4">
        <div class="h2" role="heading" aria-level="2">Extra color buttons</div>
        <p>The following classes defining action button colors:</p>
        <ButtonInfo/>
        <ButtonSuccess/>
        <ButtonWarning/>
        <ButtonError/>
    </div>
    <ButtonGroup/>
    <ButtonSize/>
    <ButtonIcon/>
    <ButtonDropdown/>
</PageLayout>