<script>
    import AlignContent from './alignment/AlignContent.svelte';
    import AlignItems from './alignment/AlignItems.svelte';
    import AlignSelf from './alignment/AlignSelf.svelte';
    import AlignInline from './alignment/AlignInline.svelte';
    import AlignTable from './alignment/AlignTable.svelte';
</script>

<div id="alignment" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Alignment</div>
    <div id="vertical-alignment" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Vertical alignment</div>
        <p>
            Use one from <b>.align-baseline</b>, <b>.align-top</b>, <b>.align-middle</b>, <b>.align-bottom</b>, <b>.align-text-bottom</b>, or <b>.align-text-top</b> as needed.
        </p>
        <div class="d-inline-block rounded-2 bg-warning mb-3 p-3">
            <i class="fas fa-exclamation-circle"></i> Pay attention: the styles accept only to <b>inline</b> and <b>table-sell</b> display property.
        </div>
        <AlignInline/>
        <AlignTable/>
    </div>
    <div id="multi-alignment" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Flex and grid alignment</div>
        <AlignContent/>
        <AlignItems/>
        <AlignSelf/>
    </div>
</div>
