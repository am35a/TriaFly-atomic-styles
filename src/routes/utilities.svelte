<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="d-grid g-3">

    <div id="utilities">
        <div class="h1" role="heading" aria-level="1">Utilities</div>
        <div class="d-flex g-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Fast to goal:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="utilities#align">Vertical alignment</a>
                <a href="utilities#bg-color">Background colors</a>
                <a href="utilities#border">Border</a>
                <a href="utilities#radius">Radius</a>
                <a href="utilities#clearfix">Clearfix</a>
                <a href="utilities#display">Display</a>
            </div>
        </div>
    </div>


    <div id="align" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Vertical alignment</div>
        <p>Use one from .align-baseline, .align-top, .align-middle, .align-bottom, .align-text-bottom, or .align-text-top as needed.</p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> Pay attention: the styles accept only to <b>inline</b> and <b>table-sell</b> display property.
        </p>

        <div class="h3" role="heading" aria-level="3">Inline block wrap</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="lh-lg">
                    <span class="mx-3 align-baseline">baseline</span>
                    <span class="mx-3 align-top">top</span>
                    <span class="mx-3 align-middle">middle</span>
                    <span class="mx-3 align-bottom">bottom</span>
                    <span class="mx-3 align-text-top">text-top</span>
                    <span class="mx-3 align-text-bottom">text-bottom</span>    
                </div>
            </div>
            <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    <span class="align-baseline">.align-baseline</span>
    <span class="align-top">.align-top</span>
    <span class="align-middle">.align-middle</span>
    <span class="align-bottom">.align-bottom</span>
    <span class="align-text-top">.align-text-top</span>
    <span class="align-text-bottom">.align-text-bottom</span>    
                '
            />
        </div>

        <div class="h3" role="heading" aria-level="3">Table sell wrap</div>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> Please note that <b>.align-baseline</b>, <b>.align-text-top</b> and <b>.align-text-bottom</b> do not affect the behavior of the container.
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <table class="mx-auto" style="height: 120px;">
                    <tr>
                        <td class="bg-error p-3 align-baseline">baseline</td>
                        <td class="p-3 align-top">top</td>
                        <td class="p-3 align-middle">middle</td>
                        <td class="p-3 align-bottom">bottom</td>
                        <td class="bg-error p-3 align-text-top">text-top</td>
                        <td class="bg-error p-3 align-text-bottom">text-bottom</td>
                    </tr>
                </table>
            </div>
        </div>
        <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    <table>
        <tr>
            <td class="align-baseline">.align-baseline</td>
            <td class="align-top">.align-top</td>
            <td class="align-middle">.align-middle</td>
            <td class="align-bottom">.align-bottom</td>
            <td class="align-text-top">.align-text-top</td>
            <td class="align-text-bottom">.align-text-bottom</td>
        </tr>
    </table>
            '
        />
    </div>

    <div id="bg-color" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Background colors</div>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-grid g-3 cols-2">
                    <div class="py-3 bg-primary text-positive">.bg-primary</div>
                    <div class="py-3 bg-secondary text-positive">.bg-secondary</div>
                    <div class="py-3 bg-success text-positive">.bg-success</div>
                    <div class="py-3 bg-warning text-positive">.bg-warning</div>
                    <div class="py-3 bg-error text-positive">.bg-error</div>
                    <div class="py-3 bg-info text-positive">.bg-info</div>
                    <div class="py-3 bg-positive text-negative">.bg-positive</div>
                    <div class="py-3 bg-negative text-positive">.bg-negative</div>
                    <div class="py-3 bg-background text-negative">.bg-background</div>
                    <div class="py-3 bg-transparent text-negative">.bg-transparent</div>
                </div>
            </div>
        </div>
        <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    <div class="bg-primary">.bg-primary</div>
    <div class="bg-secondary">.bg-secondary</div>
    <div class="bg-success">.bg-success</div>
    <div class="bg-danger">.bg-danger</div>
    <div class="bg-warning">.bg-warning</div>
    <div class="bg-info">.bg-info</div>
    <div class="bg-positive">.bg-positive</div>
    <div class="bg-negative">.bg-negative</div>
    <div class="bg-background">.bg-background</div>
    <div class="bg-transparent">.bg-transparent</div>
                '
            />
    </div>

    <div id="border" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Border</div>
        <div class="h3" role="heading" aria-level="3">By adding</div>
        <p>If an element does not have a border, it can be created by adding classes: <b>.border</b>, <b>.border-top</b>, <b>.border-right</b>, <b>.border-bottom</b> и <b>.border-left</b>.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-flex flex-wrap g-3">
                    <div class="bg-positive p-5 border"></div>
                    <div class="bg-positive p-5 border-top"></div>
                    <div class="bg-positive p-5 border-right"></div>
                    <div class="bg-positive p-5 border-bottom"></div>
                    <div class="bg-positive p-5 border-left"></div>
                </div>
            </div>
        </div>
        <Highlight
            class="rounded-2 rounded-top-0 mt-0"
            language='{xml}'
            code='
    <div class="border"></div>
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
                '
        />

        <div class="h3" role="heading" aria-level="3">By cuting</div>
        <p>If an element have a border, it can be destroy by adding classes: <b>.border</b>, <b>.border-top</b>, <b>.border-right</b>, <b>.border-bottom</b> и <b>.border-left</b>.</p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-flex flex-wrap g-3">
                    <div class="bg-positive p-5 border border-0"></div>
                    <div class="bg-positive p-5 border border-top-0"></div>
                    <div class="bg-positive p-5 border border-right-0"></div>
                    <div class="bg-positive p-5 border border-bottom-0"></div>
                    <div class="bg-positive p-5 border border-left-0"></div>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="border-0"></div>
    <div class="border-top-0"></div>
    <div class="border-right-0"></div>
    <div class="border-bottom-0"></div>
    <div class="border-left-0"></div>
                '
            />
        </div>
    </div>

    <div id="radius" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Radius</div>
        <p></p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <div class="d-grid g-3">
                    <div class="d-flex flex-wrap g-3">
                        <div class="bg-positive border p-5 rounded-0"></div>
                        <div class="bg-positive border p-5 rounded-sm"></div>
                        <div class="bg-positive border p-5 rounded"></div>
                        <div class="bg-positive border p-5 rounded-lg"></div>
                    </div>
                    <div class="d-flex flex-wrap g-3">
                        <div class="bg-positive border p-5 rounded-circle"></div>
                        <div class="bg-positive border p-5 rounded-pill" style="width: 16rem;"></div>
                    </div>
                    <div class="d-flex flex-wrap g-3">
                        <div class="bg-positive border p-5 rounded-circle rounded-left-0"></div>
                        <div class="bg-positive border p-5 rounded-circle rounded-top-0"></div>
                        <div class="bg-positive border p-5 rounded-circle rounded-right-0"></div>
                        <div class="bg-positive border p-5 rounded-circle rounded-bottom-0"></div>
                    </div>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="rounded-0"></div>
    <div class="rounded-sm"></div> /* or rounded-1 */
    <div class="rounded"></div>
    <div class="rounded-lg"></div> /* or rounded-3 */

    <div class="rounded-circle"></div>
    <div class="rounded-pill"></div>

    <div class="rounded-circle rounded-left-0"></div>
    <div class="rounded-circle rounded-top-0"></div>
    <div class="rounded-circle rounded-right-0"></div>
    <div class="rounded-circle rounded-bottom-0"></div>
                '
            />
        </div>

    </div>

    <div id="clearfix" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Clearfix</div>
        <p>
            To expand and cover floated content by a container just add <b>.clearfix</b> class to container.
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3">
                <div class="d-grid g-3">
                    <div class="clearfix">
                        <div class="bg-negative">
                            <div class="bg-positive p-3 float-left">Floated left block</div>
                            <div class="bg-positive p-3 float-right">Floated left block</div>
                        </div>
                    </div>
    
                    <div class="bg-negative clearfix">
                        <div class="bg-positive p-3 float-left">Floated left block</div>
                        <div class="bg-positive p-3 float-right">Floated left block</div>
                    </div>
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="clearfix">
        <div class="float-left">Floated left block</div>
        <div class="float-right">Floated left block</div>
    </div>
            '
            />
        </div>
    </div>

    <div id="display" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Display</div>
        <p>
            For change the display value of tags use follow display classes:
        </p>
        <ul>
            <li>.d-inline</li>
            <li>.d-block</li>
            <li>.d-inline-block</li>
            <li>.d-grid</li>
            <li>.d-inline-grid</li>
            <li>.d-flex</li>
            <li>.d-inline-flex</li>
            <li class="text-warning">.d-table</li>
            <li class="text-warning">.d-table-row</li>
            <li class="text-warning">.d-table-cell</li>
            <li>.d-none</li>
            <li>.d-unset</li>
        </ul>
        <p>For hiding an element use <b>.d-none</b> class.</p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> Pay attention: <b>.d-inline</b> can ignore upsizing and margin for focus on baseline.
        </p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> <b>.table</b>, <b>.table-row</b> and <b>.table-cell</b> values it's not better idea to use. Choose another way to goal.
        </p>
    </div>

</div>


