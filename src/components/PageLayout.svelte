<div class="d-grid g-3 mb-0
    l:d:cols-4
    l:t:cols-4"
    {...$$restProps} >
    <div class="
        l:d:col-start-4
        l:t:col-start-4">
        <div class="d-grid g-3 position-sticky top-0 overflow-auto lh-normal" style="max-height: calc(100vh - var(--key-size)* 5);">
            <div class="text-info">
                <i class="fas fa-anchor"></i> Fast to goal:
            </div>
            <div class="d-flex flex-wrap g-3
                l:d:d-grid
                l:t:d-grid">
                <slot name="aside"></slot>
            </div>
        </div>
    </div>
    <div class="overflow-auto
        l:d:col-start-1 l:d:col-span-3 l:d:row-start-1
        l:t:col-start-1 l:t:col-span-3 l:t:row-start-1">
        <slot></slot>
    </div>
</div>
