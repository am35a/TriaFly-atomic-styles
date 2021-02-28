<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="h1" role="heading" aria-level="1">Blocks</div>

<div id="default" class="h2" role="heading" aria-level="2">Default</div>
<div class="tf_block">
    <div class="tf_block-header">
        Default block title
    </div>
    <div class="tf_block-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, ex excepturi enim quis explicabo, tempora natus mollitia at eos odit consequatur rerum deserunt officia voluptatibus earum dignissimos voluptatum in maiores!
    </div>
    <div class="tf_block-footer">
        Footer
    </div>
</div>
<Highlight language="{xml}" code='
    <div class="tf_block">
        <div class="tf_block-header">
            ...
        </div>
        <div class="tf_block-body">
            ...
        </div>
        <div class="tf_block-footer">
            ...
        </div>
    </div>
'/>

<div>
    The following classes defining blocks colors:
    <ul>
        <li class="text-primary">
            .tf_block-primary
        </li>
        <li class="text-secondary">
            .tf_block-secondary
        </li>
        <li class="text-info">
            .tf_block-info
        </li>
        <li class="text-success">
            .tf_block-success
        </li>
        <li class="text-warning">
            .tf_block-warning
        </li>
        <li class="text-error">
            .tf_block-error
        </li>
    </ul>
</div>

<div id="inverse" class="h2" role="heading" aria-level="2">Secondary</div>
<div class="tf_block tf_block-secondary">
    <div class="tf_block-header">
        Secondary block title
    </div>
    <div class="tf_block-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, ex excepturi enim quis explicabo, tempora natus mollitia at eos odit consequatur rerum deserunt officia voluptatibus earum dignissimos voluptatum in maiores!
    </div>
    <div class="tf_block-footer">
        Footer
    </div>
</div>
