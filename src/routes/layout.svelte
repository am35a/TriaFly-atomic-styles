<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    import { state } from '../store/store'
</script>

<div class="d-grid g-3">

    <div id="layout">
        <div class="h1" role="heading" aria-level="1">Layout</div>
        <div class="d-flex g-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Fast to goal:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="layout#main">Main</a>
                <a href="layout#header">Header</a>
                <a href="layout#fullscreen">Full screen mode</a>
                <a href="layout#loader">Global loader</a>
            </div>
        </div>
    </div>

    <div id="main" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Main</div>
        <p>
            The main layout use grid system with the <b>body</b> tag dependence and sets by <b>.tf_layout</b> class. 
        </p>
        <p class="rounded-2 bg-warning p-3">
            <i class="fas fa-exclamation-circle"></i> Inside the body tag we can put any bloks but only containing the <b>.tf_</b> prefix in classes will showing and working.
        </p>
        <div>
            <div class="tf_layout rounded-2 rounded-bottom-0" style="height: 256px;">
                <div class="tf_layout-main d-flex justify-content-center align-items-center">Main container</div>
                <div class="tf_layout-header d-flex justify-content-center align-items-center bg-background">Header</div>
                <div class="tf_layout-aside bg-primary text-positive d-flex justify-content-center align-items-center">Menu</div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <body class="tf_layout">
        <main class="tf_layout-main">Main container</main>
        <header class="tf_layout-header">Header</header>
        <aside class="tf_layout-aside">Menu</aside>
    </body>
                '
            />
        </div>
    </div>

    <div id="header" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Header</div>
        <p>
            
        </p>
        <div>
            <div class="tf_layout rounded-2 rounded-bottom-0 h-auto">
                <div class="tf_layout-header bg-background">
                    <button class="tf_layout-aside-expander" tabindex="-1"><i class="fas fa-bars"></i></button>
                    <div class="text-uppercase">
                        Title
                    </div>            
                </div>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <header class="tf_layout-header">
        Header
    </header>
                '
            />
        </div>
    </div>

    <div>
        <div class="h2" role="heading" aria-level="2">Layout extras</div>
    </div>

    <div id="fullscreen" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Full screen mode</div>
        <p>
            To put <b>.tf_layout-main</b> into full-screen mode, you need to add a class <b>.tf_layout-main--fullscreen</b>.
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <button
                    on:click="{() => $state.fullscreen = !$state.fullscreen}"
                    class="tf_btn tf_btn-secondary m-1"
                >
                    <i class="fas {$state.fullscreen ? 'fa-compress' : 'fa-expand'} mr-2"></i>Toogle fullscreen
                </button>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <main class="tf_layout-main tf_layout-main--fullscreen">Main container</main>
                '
            />
        </div>
    </div>

    <div id="loader" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Global loader</div>
        <p>
            <!-- To put <b>.tf_layout-main</b> into full-screen mode, you need to add a class <b>.tf_layout-main--fullscreen</b>. -->
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <button
                    on:click="{() => $state.loader = !$state.loader}"
                    class="tf_btn tf_btn-secondary m-1"
                >
                    <i class="fas {$state.loader ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i>Toogle loader
                </button>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="tf_layout-loader">Loading data...</div>
                '
            />
        </div>
    </div>

</div>
