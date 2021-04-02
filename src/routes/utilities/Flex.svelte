<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    // import VerticalAlignment from './alignment/VerticalAlignment.svelte'
    // import MultiAlignment from './alignment/MultiAlignment.svelte'
</script>

<div id="flex" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Flex</div>
    <div id="enable-flex" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Enable flex</div>
        <p>For enable the layout as flex just add one of <b>.d-flex</b> или <b>.d-inline-flex</b> and use alignment, sizing, navigation of flex components.</p>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-3">
                <div class="d-grid g-3">
                    <div>
                        <div class="d-flex bg-background p-3 rounded-2">Flex</div>
                    </div>
                    <div>
                        <div class="d-inline-flex bg-background p-3 rounded-2">Inline flex</div>
                    </div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="d-flex">Flex</div>
    <div class="d-inline-flex">Inline flex</div>
                '
            />
        </div>
    </div>

    <div id="flex-direction" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Direction</div>

        <div id="row-direction" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Horizontal (row) reverse</div>
            <p>
                Use <b>.flex-row</b> to set a horizontal direction and <b>.flex-row-reverse</b> to start the horizontal direction from the opposite side.
            </p>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-grid g-3">
                        <div>
                            <div class="d-flex flex-row bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item 1</div>
                                <div class="bg-positive p-3 rounded-2">Item 2</div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex flex-row-reverse bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item 1</div>
                                <div class="bg-positive p-3 rounded-2">Item 2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex flex-row">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
    <div class="d-flex flex-row-reverse">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="column-direction" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Vertical (column) reverse</div>
            <p>
                Use <b>.flex-column</b> to set a horizontal direction and <b>.flex-column-reverse</b> to start the horizontal direction from the opposite side.
            </p>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-grid g-3">
                        <div>
                            <div class="d-flex flex-column bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item 1</div>
                                <div class="bg-positive p-3 rounded-2">Item 2</div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex flex-column-reverse bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item 1</div>
                                <div class="bg-positive p-3 rounded-2">Item 2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex flex-column">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
    <div class="d-flex flex-column-reverse">
        <div>Item 1</div>
        <div>Item 2</div>
    </div>
                    '
                />
            </div>
        </div>
        

    </div>

    <div id="wraping" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Wraping</div>

        <div id="flex-wrap" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Wrap</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex flex-wrap bg-background p-3 rounded-2 g-3 w-50">
                        <div class="bg-secondary p-3 rounded-2">Item 1</div>
                        <div class="bg-secondary p-3 rounded-2">Item 2</div>
                        <div class="bg-secondary p-3 rounded-2">Item 3</div>
                        <div class="bg-secondary p-3 rounded-2">Item 4</div>
                        <div class="bg-secondary p-3 rounded-2">Item 5</div>
                        <div class="bg-secondary p-3 rounded-2">Item 6</div>
                        <div class="bg-secondary p-3 rounded-2">Item 7</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex flex-wrap">
        <div>Item 1</div>
        <div>Item n</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="flex-wrap" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Wrap reverse</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex flex-wrap-reverse bg-background p-3 rounded-2 g-3 w-50">
                        <div class="bg-secondary p-3 rounded-2">Item 1</div>
                        <div class="bg-secondary p-3 rounded-2">Item 2</div>
                        <div class="bg-secondary p-3 rounded-2">Item 3</div>
                        <div class="bg-secondary p-3 rounded-2">Item 4</div>
                        <div class="bg-secondary p-3 rounded-2">Item 5</div>
                        <div class="bg-secondary p-3 rounded-2">Item 6</div>
                        <div class="bg-secondary p-3 rounded-2">Item 7</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex flex-wrap-reverse">
        <div>Item 1</div>
        <div>Item n</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="flex-nowrap" class="mb-3">
            <div class="h4" role="heading" aria-level="4">No wrap</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex flex-nowrap bg-background p-3 rounded-2 g-3 w-25">
                        <div class="bg-secondary p-3 rounded-2">Item 1</div>
                        <div class="bg-secondary p-3 rounded-2">Item 2</div>
                        <div class="bg-secondary p-3 rounded-2">Item 3</div>
                        <div class="bg-secondary p-3 rounded-2">Item 4</div>
                        <div class="bg-secondary p-3 rounded-2">Item 5</div>
                        <div class="bg-secondary p-3 rounded-2">Item 6</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex flex-wrap">
        <div>Item 1</div>
        <div>Item n</div>
    </div>
                    '
                />
            </div>
        </div>
    </div>

    <div id="filling" class="mb-3">
        <div class="h3" role="heading" aria-level="3">Filling</div>

        <div id="flex-wrap" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Fill</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex bg-background p-3 rounded-2 g-3">
                        <div class="flex-fill bg-positive p-3 rounded-2">Item</div>
                        <div class="flex-fill bg-positive p-3 rounded-2">Item</div>
                        <div class="flex-fill bg-positive p-3 rounded-2">A lot of content in item</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex">
        <div class="flex-fill">Item</div>
        <div class="flex-fill">Item</div>
        <div class="flex-fill">A lot of content in item</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="flex-equal" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Equal</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex bg-background p-3 rounded-2 g-3">
                        <div class="flex-equal bg-positive p-3 rounded-2">Item</div>
                        <div class="flex-equal bg-positive p-3 rounded-2">Item</div>
                        <div class="flex-equal bg-positive p-3 rounded-2">A lot of content in item</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex">
        <div class="flex-equal">Item</div>
        <div class="flex-equal">Item</div>
        <div class="flex-equal">A lot of content in item</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="flex-grow" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Grow</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-flex bg-background p-3 rounded-2 g-3">
                        <div class="flex-grow-1 bg-positive p-3 rounded-2">Item</div>
                        <div class="bg-positive p-3 rounded-2">Item</div>
                        <div class="bg-positive p-3 rounded-2">A lot of content in item</div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex">
        <div class="flex-grow-1">Item</div>
        <div>Item</div>
        <div>A lot of content in item</div>
    </div>
                    '
                />
            </div>
        </div>

        <div id="flex-shrink" class="mb-3">
            <div class="h4" role="heading" aria-level="4">Shrink</div>
            <div class="rounded-2 overflow-hidden">
                <div class="bg-positive p-3">
                    <div class="d-grid g-3">
                        <div>
                            <div class="d-flex bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item</div>
                                <div class="w-100 bg-positive p-3 rounded-2">Item</div>
                                <div class="flex-shrink-0 bg-positive p-3 rounded-2">A lot of content in item</div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex bg-background p-3 rounded-2 g-3">
                                <div class="bg-positive p-3 rounded-2">Item</div>
                                <div class="w-100 bg-positive p-3 rounded-2">Item</div>
                                <div class="flex-shrink-1 bg-positive p-3 rounded-2">A lot of content in item</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Highlight
                    class="my-0"
                    language='{xml}'
                    code='
    <div class="d-flex">
        <div>Item</div>
        <div class="w-100">Item</div>
        <div class="flex-shrink-0">A lot of content in item</div>
    </div>
    <div class="d-flex">
        <div>Item</div>
        <div class="w-100">Item</div>
        <div class="flex-shrink-1">A lot of content in item</div>
    </div>
                    '
                />
            </div>
        </div>

    </div>

</div>
