<script>
    import AlignContent from './alignment/AlignContent.svelte';
    import AlignItems from './alignment/AlignItems.svelte';
    import AlignSelf from './alignment/AlignSelf.svelte';
    import AlignInline from './alignment/AlignInline.svelte';
    import AlignTable from './alignment/AlignTable.svelte';
    import JustifyItems from './alignment/JustifyItems.svelte';
    import JustifyContent from './alignment/JustifyContent.svelte';
    import JustifySelf from './alignment/JustifySelf.svelte';
</script>

<div id="alignment" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Alignment</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Alignment fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>
    <div id="vertical-alignment" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Vertical alignment</div>
        <p>
            Use one from <b>.align-baseline</b>, <b>.align-top</b>, <b>.align-middle</b>, <b>.align-bottom</b>, <b>.align-text-bottom</b>, or <b>.align-text-top</b> as needed.
        </p>
        <div class="d-inline-block rounded-2 bg-warning mb-4 p-4">
            <i class="fas fa-exclamation-circle"></i> Pay attention: the styles accept only to <b>inline</b> and <b>table-sell</b> display property.
        </div>
        <AlignInline/>
        <AlignTable/>
    </div>
    <div id="multi-alignment" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Flex and grid alignment</div>
        <AlignContent/>
        <AlignItems/>
        <AlignSelf/>
        <div class="h3" role="heading" aria-level="3">Flex and grid justify</div>
        <JustifyContent/>
        <JustifyItems/>
        <JustifySelf/>
    </div>
</div>
