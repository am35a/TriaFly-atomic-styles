<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="h1" role="heading" aria-level="1">Buttons</div>
<p>
    To create a default button, use the tf_btn class, but default state is not recommended to use without color classes for any buttons.
</p>

<div id="default" class="h2" role="heading" aria-level="2">Default</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn">default button</button>
    <button class="tf_btn"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn" disabled>disabled button</button>
</div>
<Highlight language="{xml}" code='
    // inverse color button
    <button class="tf_btn">default button</button>

    // inverse color button with icon
    <button class="tf_btn">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // inverse color disabled button
    <button class="tf_btn" disabled>disabled button</button>
'/>

<div id="inverse" class="h2" role="heading" aria-level="2">Inverse</div>
<p>Inverted color buttons are transparent like buttons by default.</p>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-inverse">inverse button</button>
    <button class="tf_btn tf_btn-inverse"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
</div>
<Highlight language="{xml}" code='
    // inverse color button
    <button class="tf_btn tf_btn-inverse">inverse button</button>

    // inverse color button with icon
    <button class="tf_btn tf_btn-inverse">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // inverse color disabled button
    <button class="tf_btn tf_btn-inverse" disabled>disabled button</button>
'/>

<div id="transparent" class="h2" role="heading" aria-level="2">Transparent</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-transparent">transparent button</button>
    <button class="tf_btn tf_btn-transparent"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
</div>
<Highlight language="{xml}" code='
    // transparent button
    <button class="tf_btn tf_btn-transparent">transparent button</button>

    // transparent button with icon
    <button class="tf_btn tf_btn-transparent">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // transparent disabled button
    <button class="tf_btn tf_btn-transparent" disabled>disabled button</button>
'/>

<div>
    The following classes defining button colors:
    <ul>
        <li class="text-primary">
            .tf_btn-primary
        </li>
        <li class="text-secondary">
            .tf_btn-secondary
        </li>
        <li class="text-info">
            .tf_btn-info
        </li>
        <li class="text-success">
            .tf_btn-success
        </li>
        <li class="text-warning">
            .tf_btn-warning
        </li>
        <li class="text-error">
            .tf_btn-error
        </li>
    </ul>
</div>

<div id="primary" class="h2" role="heading" aria-level="2">Primary</div>
<p>One of the main colors button is primary.</p>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-primary">primary button</button>
    <button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
</div>
<Highlight language="{xml}" code='
    // primary color button
    <button class="tf_btn tf_btn-primary">primary button</button>

    // primary color button with icon
    <button class="tf_btn tf_btn-primary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
'/>

<div id="secondary" class="h2" role="heading" aria-level="2">Secondary</div>
<p>Next of the main colors button is secondary.</p>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-secondary">secondary button</button>
    <button class="tf_btn tf_btn-secondary"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
</div>

<div class="h2" role="heading" aria-level="2">Addition color buttons</div>
<p>The following classes defining action button colors:</p>

<div id="info" class="h3" role="heading" aria-level="3">Info</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-info">info button</button>
    <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
</div>

<div id="success" class="h3" role="heading" aria-level="3">Success</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-success">success button</button>
    <button class="tf_btn tf_btn-success"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-success" disabled>disabled button</button>
</div>

<div id="warning" class="h3" role="heading" aria-level="3">Warning</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-warning">warning button</button>
    <button class="tf_btn tf_btn-warning"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
</div>

<div id="error" class="h3" role="heading" aria-level="3">Error</div>
<div class="d-flex g-1 flex-wrap mb-3">
    <button class="tf_btn tf_btn-error">error button</button>
    <button class="tf_btn tf_btn-error"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-error" disabled>disabled button</button>
</div>

<div id="sizes" class="h2" role="heading" aria-level="2">Sizes</div>
<p>For change size of buttons use tf_btn-sm and tf_btn-lg classes:</p>
<div class="d-flex g-1 flex-wrap align-items-center mb-3">
    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>
    <button class="tf_btn tf_btn-primary">default button</button>
    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
</div>
<Highlight language="{xml}" code='
    // small size button
    <button class="tf_btn tf_btn-primary tf_btn-sm">small button</button>

    // normal size button
    <button class="tf_btn tf_btn-primary">default button</button>

    // large size button
    <button class="tf_btn tf_btn-primary tf_btn-lg">large button</button>
'/>

<div id="icon" class="h2" role="heading" aria-level="2">Icon</div>
<div class="d-flex g-1 flex-wrap align-items-center mb-3">
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm"><i class="fas fa-info"></i></button>
    <button class="tf_btn tf_btn-primary tf_btn-icon"><i class="fas fa-infinity"></i></button>
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg"><i class="fas fa-brain"></i></button>
</div>
<Highlight language="{xml}" code='
    // icon small size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-sm">
        <i class="fas fa-info"></i>
    </button>

    // icon normal size button
    <button class="tf_btn tf_btn-primary tf_btn-icon">
        <i class="fas fa-infinity"></i>
    </button>

    // icon large size button
    <button class="tf_btn tf_btn-primary tf_btn-icon tf_btn-lg">
        <i class="fas fa-brain"></i>
    </button>
'/>
