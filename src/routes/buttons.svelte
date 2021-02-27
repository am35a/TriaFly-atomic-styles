<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="h1" role="heading" aria-level="1">Buttons</div>
<p>
    To create a default button, use the tf_btn class, but default state is not recommended to use without color classes for any buttons.
</p>

<div class="h2" role="heading" aria-level="2">Default</div>
<p>
    <button class="tf_btn">text button</button>
    <button class="tf_btn"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn" disabled>disabled button</button>
</p>
The following classes defining button colors:
<ul>
    <li>
        .tf_btn-primary
    </li>
    <li>
        .tf_btn-secondary
    </li>
    <li>
        .tf_btn-info
    </li>
    <li>
        .tf_btn-success
    </li>
    <li>
        .tf_btn-warning
    </li>
    <li>
        .tf_btn-error
    </li>
</ul>

<div class="h2" role="heading" aria-level="2">Primary</div>
<p>One of the main colors button is primary.</p>
<button class="tf_btn tf_btn-primary">text button</button>
<button class="tf_btn tf_btn-primary"><i class="fas fa-home"></i> icon button</button>
<button class="tf_btn tf_btn-primary" disabled>disabled button</button>
<Highlight class="d-inline" language="{xml}" code='
    // primary color button
    <button class="tf_btn tf_btn-primary tf_btn-lg">text button</button>

    // primary color button with icon
    <button class="tf_btn tf_btn-primary">
        <i class="fas fa-home"></i>
        icon button
    </button>

    // primary color disabled button
    <button class="tf_btn tf_btn-primary" disabled>disabled button</button>
'/>

<div class="h2" role="heading" aria-level="2">Secondary</div>
<p>Next of the main colors button is secondary.</p>
<p>
    <button class="tf_btn tf_btn-secondary">text button</button>
    <button class="tf_btn tf_btn-secondary"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-secondary" disabled>disabled button</button>
</p>

<div class="h2" role="heading" aria-level="2">Addition color buttons</div>
<p>
    The following classes defining action button colors:
</p>
<div class="h3" role="heading" aria-level="3">Info</div>
<p>
    <button class="tf_btn tf_btn-info">text button</button>
    <button class="tf_btn tf_btn-info"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-info" disabled>disabled button</button>
</p>

<div class="h3" role="heading" aria-level="3">Success</div>
<p>
    <button class="tf_btn tf_btn-success">text button</button>
    <button class="tf_btn tf_btn-success"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-success" disabled>disabled button</button>
</p>

<div class="h3" role="heading" aria-level="3">Warning</div>
<p>
    <button class="tf_btn tf_btn-warning">text button</button>
    <button class="tf_btn tf_btn-warning"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-warning" disabled>disabled button</button>
</p>
<div class="h3" role="heading" aria-level="3">Error</div>
<p>
    <button class="tf_btn tf_btn-error">text button</button>
    <button class="tf_btn tf_btn-error"><i class="fas fa-home"></i> icon button</button>
    <button class="tf_btn tf_btn-error" disabled>disabled button</button>
</p>

<div class="h2" role="heading" aria-level="2">Sizes</div>
<p>
    For change size of buttons use tf_btn-sm and tf_btn-lg classes:
</p>
<button class="tf_btn tf_btn-primary tf_btn-sm">text button</button>
<button class="tf_btn tf_btn-primary">text button</button>
<button class="tf_btn tf_btn-primary tf_btn-lg">text button</button>
<Highlight class="d-inline" language="{xml}" code='
    // small size
    <button class="tf_btn tf_btn-primary tf_btn-sm">text button</button>

    // normal
    <button class="tf_btn tf_btn-primary">text button</button>

    // large size
    <button class="tf_btn tf_btn-primary tf_btn-lg">text button</button>
'/>
