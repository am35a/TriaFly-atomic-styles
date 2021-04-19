<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
    
    import PageLayout from "../components/PageLayout.svelte"
    import NumbImputer from "../components/ui/NumbImputer.svelte"

    let grid = {
        display: 'grid',
        columns: 4,
        rows: 4,
        items: 1,
        autoColumns: false,
        autoRows: false,
        flow: 'row',
        // isItemsAuto: true
        // items: 'normal',
        // self: 'auto'
    }

    $: grid.columns || grid.rows, itemsToogler()
    function itemsToogler() {
        // if(grid.isItemsAuto) {
            grid.items = grid.columns * grid.rows
        // }
    }


    function classColumns() {
        if(grid.autoColumns)
            return ''
        else
            return `cols-${grid.columns}`
    }
    function classRows() {
        if(grid.autoRows)
            return ''
        else
            return `rows-${grid.rows}`
    }

    function classAutoColumns() {
        return grid.autoColumns ? 'cols-auto' : ''
    }

    function classAutoRows() {
        return grid.autoRows ? 'rows-auto' : ''
    }
</script>

<PageLayout id="grid">
    <slot slot="aside">
        <a href="forms#item">Item</a>{grid.items}
    </slot>
    <div class="h1" role="heading" aria-level="1">Grid by grid</div>
    <div class="d-inline-block rounded-2 bg-success text-positive mb-3 p-3">
        <i class="fas fa-check-circle"></i> Grid fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div>

    <div class="d-grid g-3 d-none">
        <div class="bg-info p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        <div class="bg-info p-2">Eligendi at amet iste nostrum porro possimus similique quasi, molestiae, blanditiis dolores nihil.</div>
        <div class="bg-info p-2">Ipsam, tempore delectus quo non possimus placeat.</div>
        <div class="bg-info p-2">Libero corrupti, doloremque.</div>
        <div class="bg-info p-2">Quasi, cumque aperiam voluptatum voluptas voluptatem maxime distinctio!</div>
        <div class="bg-info p-2">Minus consequuntur, natus architecto aspernatur animi ex sequi? Incidunt magni unde.</div>
        <div class="bg-info p-2">Dolor necessitatibus excepturi!</div>
        <div class="bg-info p-2">Dolores, doloribus minima autem atque ad sed, natus dolor?</div>
        <div class="bg-info p-2">Quaerat consequuntur obcaecati, aliquid consectetur labore animi beatae nulla consequatur!</div>
        <div class="bg-info p-2">Earum esse recusandae sapiente, et aliquid error molestias doloribus hic beatae ea, nostrum autem!</div>
        <div class="bg-info p-2">Adipisci dignissimos sint quae alias, repellat atque nobis dolor et, perferendis accusantium.</div>
        <div class="bg-info p-2">Dignissimos reiciendis molestias consequuntur suscipit harum fuga!</div>
    </div>
    
    <div id="cols" class="mb-3">
        <div class="h2" role="heading" aria-level="2">Grid columns</div>
        <p>
            The maximum number of columns and rows is limited to 12 items.
        </p>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => grid.display = 'grid'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.display === 'grid'}
                    ><i class="fas {grid.display === 'grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Grid</button>
                    <button
                        on:click="{() => grid.display = 'inline-grid'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.display === 'inline-grid'}
                    ><i class="fas {grid.display === 'inline-grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline-grid</button>
                </div>
                <hr>
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => grid.flow = 'row'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.flow === 'row'}
                    ><i class="fas {grid.flow === 'row' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i>  Row direction</button>
                    <button
                        on:click="{() => grid.flow = 'col'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.flow === 'col'}
                    ><i class="fas {grid.flow === 'col' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Column direction</button>
                </div>
                <hr>
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => grid.autoColumns = !grid.autoColumns}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {grid.autoColumns ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Auto columns</button>
                    <button
                        on:click="{() => grid.autoRows = !grid.autoRows}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                    ><i class="fas {grid.autoRows ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Auto rows</button>
                </div>
                <hr>
                <div class="d-flex flex-wrap g-3">
                    <NumbImputer title={'Columns'} bind:value={grid.columns} minValue=1 maxValue=12/>
                    <NumbImputer title={'Rows'} bind:value={grid.rows} minValue=1 maxValue=12/>
                    <NumbImputer title={'Items'} bind:value={grid.items} minValue=1/>
                </div>
                <hr>
                <div class="d-{grid.display} g-3 {classColumns()} {classRows()} grid-flow-{grid.flow} {classAutoColumns()} {classAutoRows()}">
                    {#each Array(grid.items) as item, i}
                        <div class="p-2 rounded-2 bg-background text-center">{i + 1}</div>
                    {/each}
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="d-{grid.display} {classColumns()} {classRows()} grid-flow-{grid.flow} {classAutoColumns()} {classAutoRows()}">
        <div>1</div>
        <!-- ... -->
        <div>{grid.items}</div>
    </div>
                '
            />
        </div>
    </div>

    <div id="rows" class="mb-3 d-none">
        <div class="h2" role="heading" aria-level="2">Grid rows</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="d-flex flex-wrap g-3">
                    <button
                        on:click="{() => grid.display = 'grid'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.display === 'grid'}
                    ><i class="fas {grid.display === 'grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Grid</button>
                    <button
                        on:click="{() => grid.display = 'inline-grid'}"
                        class="tf_btn tf_btn-sm tf_btn-secondary"
                        disabled={grid.display === 'inline-grid'}
                    ><i class="fas {grid.display === 'inline-grid' ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Inline-grid</button>
                </div>
                <hr>
                <div class="d-{grid.display} g-3 rows-4 grid-flow-col">
                    <div class="py-2 rounded-2 bg-background text-center">1</div>
                    <div class="py-2 rounded-2 bg-background text-center">2</div>
                    <div class="py-2 rounded-2 bg-background text-center">3</div>
                    <div class="py-2 rounded-2 bg-background text-center">4</div>
                    <div class="py-2 rounded-2 bg-background text-center">5</div>
                    <div class="py-2 rounded-2 bg-background text-center">6</div>
                    <div class="py-2 rounded-2 bg-background text-center">7</div>
                    <div class="py-2 rounded-2 bg-background text-center">8</div>
                    <div class="py-2 rounded-2 bg-background text-center">9</div>
                    <div class="py-2 rounded-2 bg-background text-center">10</div>
                    <div class="py-2 rounded-2 bg-background text-center">11</div>
                    <div class="py-2 rounded-2 bg-background text-center">12</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="d-{grid.display} rows-4 grid-flow-col">
        <div>1</div>
        <!-- ... -->
        <div>12</div>
    </div>
                '
            />
        </div>
    </div>

    <div id="flow" class="mb-3 d-none">
        <div class="h2" role="heading" aria-level="2">Grid Auto Flow</div>
        <div class="rounded-2 overflow-hidden">
            <div class="d-grid g-3 bg-positive p-3 rounded-2 rounded-bottom-0">
                <div class="d-grid g-3 cols-3">
                    <div class="py-2 rounded-2 bg-background text-center">1</div>
                    <div class="py-2 rounded-2 bg-background text-center">2</div>
                    <div class="py-2 rounded-2 bg-background text-center">3</div>
                    <div class="py-2 rounded-2 bg-background text-center">4</div>
                    <div class="py-2 rounded-2 bg-background text-center">5</div>
                    <div class="py-2 rounded-2 bg-background text-center">6</div>
                    <div class="py-2 rounded-2 bg-background text-center">7</div>
                    <div class="py-2 rounded-2 bg-background text-center">8</div>
                    <div class="py-2 rounded-2 bg-background text-center">9</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="d-grid cols-3">
        <div>1</div>
        <!-- ... -->
        <div>12</div>
    </div>
                '
            />
        </div>
    </div>


    

</PageLayout>

<div id="grid" class="d-grid g-3 d-none">
    <div>
        <div class="d-grid g-3 cols-12">
            <div class="py-2 bg-secondary text-center">1</div>
            <div class="py-2 bg-secondary text-center">2</div>
            <div class="py-2 bg-secondary text-center">3</div>
            <div class="py-2 bg-secondary text-center">4</div>
            <div class="py-2 bg-secondary text-center">5</div>
            <div class="py-2 bg-secondary text-center">6</div>
            <div class="py-2 bg-secondary text-center">7</div>
            <div class="py-2 bg-secondary text-center">8</div>
            <div class="py-2 bg-secondary text-center">9</div>
            <div class="py-2 bg-secondary text-center">10</div>
            <div class="py-2 bg-secondary text-center">11</div>
            <div class="py-2 bg-secondary text-center">12</div>
        </div>
    </div>

    <div>
        <div class="d-grid g-3 cols-6 rows-2">
            <div class="py-2 bg-secondary text-center">1</div>
            <div class="py-2 bg-secondary text-center">2</div>
            <div class="py-2 bg-secondary text-center">3</div>
            <div class="py-2 bg-secondary text-center">4</div>
            <div class="py-2 bg-secondary text-center">5</div>
            <div class="py-2 bg-secondary text-center">6</div>
            <div class="py-2 bg-secondary text-center">7</div>
            <div class="py-2 bg-secondary text-center">8</div>
            <div class="py-2 bg-secondary text-center">9</div>
            <div class="py-2 bg-secondary text-center">10</div>
            <div class="py-2 bg-secondary text-center">11</div>
            <div class="py-2 bg-secondary text-center">12</div>
        </div>
    </div>

    <div>
        <div class="d-grid g-3 cols-1 rows-1">
            <div class="py-2 bg-secondary text-center">1</div>
            <div class="py-2 bg-secondary text-center">2</div>
            <div class="py-2 bg-secondary text-center">3</div>
        </div>
    </div>

</div>