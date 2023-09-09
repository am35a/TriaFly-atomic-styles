<script>
    import PageLayout from "../components/PageLayout.svelte"
</script>

<PageLayout id="core">
    <slot slot="aside">
        <a href="core#devices">Devices checking</a>
        <a href="core#breakpoints">Brakepoints</a>
            <a href="core#guard-breakpoints">- Guard breakpoints</a>
            <a href="core#available-breakpoints">- Available breakpoints</a>
            <a href="core#components">- Components</a>
    </slot>
    <div class="h1" role="heading" aria-level="1">Core</div>
    <div id="devices" class="mb-4">
        <div class="h2" role="heading" aria-level="2">Devices checking</div>
        <p>
            The <a href="https://github.com/matthewhudson/current-device">current-device (v0.10.2)</a> library is use to define devices and get other data from device, which install the breakpoints dependencies.
        </p>
        <div class="d-inline-grid cols-2 g-2">
            <div class="text-right fw-600">Device type:</div>
            <div>'mobile', 'tablet', 'desktop', or 'unknown'</div>
            <div class="text-right fw-600">Device orientation:</div>
            <div>'landscape', 'portrait', or 'unknown'</div>
            <div class="text-right fw-600">Device OS:</div>
            <div>'ios', 'iphone', 'ipad', 'ipod', 'android', 'blackberry', 'windows', 'macos', 'fxos', 'meego', 'television', or 'unknown'</div>
        </div>
    </div>
    <div id="breakpoints" class="mb-4">
        <div class="h2" role="heading" aria-level="2">Breakpoints</div>
        <p>Currently the UI Kit have not dependently from screen width. It will be soon.</p>
        <div id="guard-breakpoints" class="mb-4">
            <div class="h3" role="heading" aria-level="3">Guard breakpoints</div>
            <div class="d-grid cols-3 g-2">
                <div class="fw-600">Breakpoint</div>
                <div class="fw-600">Class prefix</div>
                <div class="fw-600">Pattern</div>
                <hr class="col-span-full w-100 my-0">
                <div>Landscape</div>
                <div>none</div>
                <div>.<span class="text-secondary">class-name</span></div>
                <div>Desktop</div>
                <div>none</div>
                <div>.<span class="text-secondary">class-name</span></div>
            </div>
        </div>
        <div id="available-breakpoints" class="mb-4">
            <div class="h3" role="heading" aria-level="3">Available breakpoints</div>
            <div class="d-grid cols-3 g-2">
                <div class="fw-600">Breakpoint</div>
                <div class="fw-600">Class prefix</div>
                <div class="fw-600">Pattern</div>
                <hr class="col-span-full w-100 my-0">
                <div>Landscape</div>
                <div>l</div>
                <div>.l:<span class="text-secondary">class-name</span></div>
                <div>Portrait</div>
                <div>p</div>
                <div>.p:<span class="text-secondary">class-name</span></div>
                <div class="col-span-full"></div>
                <div>Desktop</div>
                <div>d</div>
                <div>.d:<span class="text-secondary">class-name</span></div>
                <div>Tablet</div>
                <div>t</div>
                <div>.t:<span class="text-secondary">class-name</span></div>
                <div>Mobile</div>
                <div>m</div>
                <div>.m:<span class="text-secondary">class-name</span></div>
                <div class="col-span-full"></div>
                <div>Landscape/Desktop</div>
                <div>l/d</div>
                <div>.l:d:<span class="text-secondary">class-name</span></div>
                <div>Portrait/Desktop</div>
                <div>p/d</div>
                <div>.p:d:<span class="text-secondary">class-name</span></div>
                <div>Landscape/Tablet</div>
                <div>l/t</div>
                <div>.l:t:<span class="text-secondary">class-name</span></div>
                <div>Portrait/Tablet</div>
                <div>p/t</div>
                <div>.p:t:<span class="text-secondary">class-name</span></div>
                <div>Landscape/Mobile</div>
                <div>l/m</div>
                <div>.l:m:<span class="text-secondary">class-name</span></div>
                <div>Portrait/Mobile</div>
                <div>p/m</div>
                <div>.p:m:<span class="text-secondary">class-name</span></div>
            </div>
        </div>
        <div id="components" class="mb-4">
            <div class="h3" role="heading" aria-level="3">Components</div>
            <div class="d-grid cols-3 g-2">
                <div class="fw-600">Monolit</div>
                <div class="fw-600">Utilities</div>
                <div class="fw-600">UI</div>
                <hr class="col-span-full w-100 my-0">
                <div>Monolithic styles for creating the grid of the application. This component is independently and can be used separately from others.</div>
                <div>Custom styles for standard HTML elements. Use to make prettie UI.</div>
                <div>Utilities allow you to make the layout really flexible. Pay attention to the Breakpoints and it will understanding to you how powerful tools you get.</div>
                <hr class="col-span-full w-100 my-0">
                <div>Layout into <a href="css/global.css">global.css</a></div>
                <div>Utilities into <a href="css/global.css">global.css</a></div>
                <div>UI into <a href="css/global.css">global.css</a></div>
            </div>
        </div>

    </div>
</PageLayout>