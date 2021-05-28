<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="text" class="mb-4">
    <div class="h2" role="heading" aria-level="2">Text</div>
    <!-- <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
        <i class="fas fa-check-circle"></i> Text utilities fully support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
    </div> -->
    <div id="text-alignment" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Alignment</div>
        <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
            <i class="fas fa-check-circle"></i> Text alignment support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
        </div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <p class="text-start">Start aligned text.</p>
                <p class="text-center">Center aligned text.</p>
                <p class="text-end">End aligned text.</p>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <p class="text-start">Start aligned text.</p>
    <p class="text-center">Center aligned text.</p>
    <p class="text-end">End aligned text.</p>
                '
            />
        </div>
    </div>
    <div id="word-break" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Word break</div>
        <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
            <i class="fas fa-check-circle"></i> Text words break support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
        </div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <div class="text-break">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="text-break">x...x</div>
                '
            />
        </div>
    </div>
    <div id="text-wrapping" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Text wrapping</div>
        <div class="d-inline-block rounded-2 bg-success text-positive mb-4 p-4">
            <i class="fas fa-check-circle"></i> Text words break support <a href="core#breakpoints" class="text-currentcolor">breakpoints</a>.
        </div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <div class="d-flex flex-column g-4" style="width: 6rem;">
                    <div class="bg-background p-2 rounded-1 text-wrap">This text should wrap.</div>
                    <div class="bg-background p-2 rounded-1 text-nowrap">This text should overflow the parent.</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="text-wrap">This text should wrap.</div>
    <div class="text-nowrap">This text should overflow the parent.</div>
                '
            />
        </div>
    </div>
    <div id="text-transform" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Transform</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4 d-grid g-4">
                <span class="text-lowercase">Lowercased</span>
                <span class="text-uppercase">Uppercased</span>
                <span class="text-capitalize">CapiTaliZed</span>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <span class="text-lowercase">Lowercased</span>
    <span class="text-uppercase">Uppercased</span>
    <span class="text-capitalize">CapiTaliZed</span>
                '
            />
        </div>
    </div>
    <div id="text-decoration" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Decoration</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4 d-grid g-4">
                <div class="text-decoration-underline">This text has underline.</div>
                <div class="text-decoration-line-through">This text has lined through.</div>
                <a href="/" class="text-decoration-none">This link has no decoration.</a>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="text-decoration-underline">This text has underline.</div>
    <div class="text-decoration-line-through">This text has lined through.</div>
    <a href="#" class="text-decoration-none">This link has no decoration.</a>
                '
            />
        </div>
    </div>
    <div id="text-color" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Colors</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <div class="d-inline-grid g-4">
                    <div class="bg-negative text-positive">.text-positive</div>
                    <div class="bg-positive text-negative">.text-negative</div>
                    <div class="text-background">.text-background</div>
                    <div class="text-primary">.text-primary</div>
                    <div class="text-secondary">.text-secondary</div>
                    <div class="text-info">.text-info</div>
                    <div class="text-success">.text-success</div>
                    <div class="text-warning">.text-warning</div>
                    <div class="text-error">.text-error</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <div class="text-positive">.text-positive</div>
    <div class="text-negative">.text-negative</div>
    <div class="text-background">.text-background</div>
    <div class="text-primary">.text-primary</div>
    <div class="text-secondary">.text-secondary</div>
    <div class="text-info">.text-info</div>
    <div class="text-success">.text-success</div>
    <div class="text-warning">.text-warning</div>
    <div class="text-error">.text-error</div>
                '
            />
        </div>
    </div>
    <div id="weight-style" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Weight & style</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <div class="d-grid g-4">
                    <div class="fw-lighter">.fw-lighter</div>
                    <div class="fw-normal">.fw-normal</div>
                    <div class="fw-bold">.fw-bold</div>
                    <div class="fw-bolder">.fw-bolder</div>
                    <div class="fw-100">.fw-100</div>
                    <div class="fw-200">.fw-200</div>
                    <div class="fw-300">.fw-300</div>
                    <div class="fw-400">.fw-400</div>
                    <div class="fw-500">.fw-500</div>
                    <div class="fw-600">.fw-600</div>
                    <div class="fw-700">.fw-700</div>
                    <div class="fw-800">.fw-800</div>
                    <div class="fw-900">.fw-900</div>
                    <div></div>
                    <div class="fst-italic">.fst-italic</div>
                    <div class="fst-normal">.fst-normal</div>
                </div>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    // Weight
    <div class="fw-lighter">.fw-lighter</div>
    <div class="fw-normal">.fw-normal</div>
    <div class="fw-bold">.fw-bold</div>
    <div class="fw-bolder">.fw-bolder</div>
    <div class="fw-100">.fw-100</div>
    <div class="fw-200">.fw-200</div>
    <div class="fw-300">.fw-300</div>
    <div class="fw-400">.fw-400</div>
    <div class="fw-500">.fw-500</div>
    <div class="fw-600">.fw-600</div>
    <div class="fw-700">.fw-700</div>
    <div class="fw-800">.fw-800</div>
    <div class="fw-900">.fw-900</div>
    
    // Styles
    <div class="fst-italic">.fst-italic</div>
    <div class="fst-normal">.fst-normal</div>
                '
            />
        </div>
    </div>
    <div id="line-height" class="mb-4">
        <div class="h3" role="heading" aria-level="3">Line height</div>
        <div class="rounded-2 overflow-hidden">
            <div class="bg-positive p-4">
                <p class="lh-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui at veritatis aliquid ipsum voluptatem sapiente cumque hic, eligendi sequi! Eum officia sint sed dolore explicabo iste est ipsam incidunt?</p>
                <p class="lh-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui at veritatis aliquid ipsum voluptatem sapiente cumque hic, eligendi sequi! Eum officia sint sed dolore explicabo iste est ipsam incidunt?</p>
                <p class="lh-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui at veritatis aliquid ipsum voluptatem sapiente cumque hic, eligendi sequi! Eum officia sint sed dolore explicabo iste est ipsam incidunt?</p>
                <p class="lh-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui at veritatis aliquid ipsum voluptatem sapiente cumque hic, eligendi sequi! Eum officia sint sed dolore explicabo iste est ipsam incidunt?</p>
            </div>
            <Highlight
                class="my-0"
                language='{xml}'
                code='
    <p class="lh-1">Lorem ipsum dolor sit amet consectetur... incidunt?</p>
    <p class="lh-sm">Lorem ipsum dolor sit amet consectetur... incidunt?</p>
    <p class="lh-base">Lorem ipsum dolor sit amet consectetur... incidunt?</p>
    <p class="lh-lg">Lorem ipsum dolor sit amet consectetur... incidunt?</p>
                '
            />
        </div>
    </div>
</div>