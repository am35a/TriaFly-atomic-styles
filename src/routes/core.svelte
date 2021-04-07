<script>
    import PageLayout from "../components/PageLayout.svelte"
</script>

<PageLayout id="core">
    <slot slot="aside">
        <a href="core#devices">Devices checking</a>
        <a href="core#breakpoints">Brakepoints</a>
            <a href="core#guard-breakpoints">- Guard breakpoints</a>
            <a href="core#available-breakpoints">- Available breakpoints</a>
        
    </slot>
    <div class="h1" role="heading" aria-level="1">Core</div>
    <div id="devices" class="mb-3">
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
    <div id="breakpoints" class="mb-3">
        <div class="h2" role="heading" aria-level="2">Breakpoints</div>
        <div id="guard-breakpoints" class="mb-3">
            <div class="h3" role="heading" aria-level="3">Guard breakpoints</div>
            <div class="d-grid cols-3 g-2">
                <div class="fw-600">Breakpoint</div>
                <div class="fw-600">Class prefix</div>
                <div class="fw-600">Pattern</div>
                <hr class="col-span-full w-100 my-0">
                <div>Landscape</div>
                <div>none</div>
                <div>.class-name</div>
                <div>Desktop</div>
                <div>none</div>
                <div>.class-name</div>
            </div>
        </div>
        <div id="available-breakpoints" class="mb-3">
            <div class="h3" role="heading" aria-level="3">Available breakpoints</div>
            <div class="d-grid cols-3 g-2">
                <div class="fw-600">Breakpoint</div>
                <div class="fw-600">Class prefix</div>
                <div class="fw-600">Pattern</div>
                <hr class="col-span-full w-100 my-0">
                <div>Landscape</div>
                <div>l</div>
                <div>.l:class-name</div>
                <div>Portrait</div>
                <div>p</div>
                <div>.p:class-name</div>
                <div class="col-span-full"></div>
                <div>Desktop</div>
                <div>d</div>
                <div>.d:class-name</div>
                <div>Tablet</div>
                <div>t</div>
                <div>.t:class-name</div>
                <div>Mobile</div>
                <div>m</div>
                <div>.m:class-name</div>
                <div class="col-span-full"></div>
                <div>Landscape/Desktop</div>
                <div>l/d</div>
                <div>.l:d:class-name</div>
                <div>Portrait/Desktop</div>
                <div>p/d</div>
                <div>.p:d:class-name</div>
                <div>Landscape/Tablet</div>
                <div>l/t</div>
                <div>.l:t:class-name</div>
                <div>Portrait/Tablet</div>
                <div>p/t</div>
                <div>.p:t:class-name</div>
                <div>Landscape/Mobile</div>
                <div>l/m</div>
                <div>.l:m:class-name</div>
                <div>Portrait/Mobile</div>
                <div>p/m</div>
                <div>.p:m:class-name</div>
            </div>
        </div>
    </div>
</PageLayout>