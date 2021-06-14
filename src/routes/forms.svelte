<script>
    import PageLayout    from "../components/PageLayout.svelte"

    import FormDefault   from "../routes/forms/Default.svelte"
    import FormPrimary   from "../routes/forms/Primary.svelte"
    import FormSecondary from "../routes/forms/Secondary.svelte"
    import FormInfo      from "../routes/forms/Info.svelte"
    import FormSuccess   from "../routes/forms/Success.svelte"
    import FormWarning   from "../routes/forms/Warning.svelte"
    import FormError     from "../routes/forms/Error.svelte"
    import FormSizes     from "../routes/forms/Sizes.svelte"
    import FormDisabled  from "../routes/forms/Disabled.svelte"
</script>

<PageLayout id="forms">
    <slot slot="aside">
        <a href="forms#default">Default</a>
        <a href="forms#primary">Primary</a>
        <a href="forms#secondary">Secondary</a>
        <a href="forms#info">Info</a>
        <a href="forms#success">Success</a>
        <a href="forms#warning">Warning</a>
        <a href="forms#error">Error</a>
        <a href="forms#sizes">Sizes</a>
        <a href="forms#disabled">Disabled</a>
    </slot>
    <div class="h1" role="heading" aria-level="1">Forms</div>

    <div class="p-3">
        <div class="tf_input-group">
            <div class="tf_input-group-text">
                <div class="tf_form-check tf_form-check">
                    <input type="checkbox" value="" id="flexCheckChecked">
                </div>
            </div>
            <input id="finder-search" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Поиск по названию...">
            <button class="tf_btn tf_btn-secondary tf_btn-icon"><i class="fa fa-ban"></i></button>
        </div>
        <div><br></div>
        <div class="tf_input-group">
            <div class="tf_input-group-text"><i class="fa fa-search"></i></div>
            <input id="finder-search" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Поиск по названию...">
            <button class="tf_btn tf_btn-secondary tf_btn-icon"><i class="fa fa-ban"></i></button>
        </div>
        <div><br></div>
        <div class="tf_input-group">
            <div class="tf_input-group-text tf_input-group-text-sm">Привет мир</div>
            <input id="finder-search" class="tf_form-control tf_form-control-sm tf_form-control-secondary" type="text" placeholder="Поиск по названию...">
            <button class="tf_btn tf_btn-sm tf_btn-secondary tf_btn-icon"><i class="fa fa-ban"></i></button>
        </div>
        <!-- <div class="tf_input-group">
            <i class="fa fa-search"></i>
            <input id="finder-search" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Поиск по названию...">
            <button class="tf_btn tf_btn-secondary tf_btn-icon"><i class="fa fa-ban"></i></button>
            <input id="finder-search" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Поиск по названию...">
        </div> -->
    </div>

    <FormDefault/>
    <div id="main-forms">
        <div class="h2" role="heading" aria-level="2">Main color forms</div>
        <div>
            The following classes defining forms colors:
            <ul>
                <li class="text-primary">.tf_form-control-primary</li>
                <li class="text-secondary">.tf_form-control-secondary</li>
                <li class="text-info">.tf_form-control-info</li>
                <li class="text-success">.tf_form-control-success</li>
                <li class="text-warning">.tf_form-control-warning</li>
                <li class="text-error">.tf_form-control-error</li>
            </ul>
        </div>
        <FormPrimary/>
        <FormSecondary/>
    </div>
    <div id="extra-forms">
        <div class="h2" role="heading" aria-level="2">Addition color forms</div>
        <p>The following classes defining action form colors:</p>
        <FormInfo/>
        <FormSuccess/>
        <FormWarning/>
        <FormError/>
    </div>
    <FormSizes/>
    <FormDisabled/>
</PageLayout>