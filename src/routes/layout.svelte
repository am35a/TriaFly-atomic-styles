<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    import { state } from '../store/store'
</script>

<div class="d-grid g-3">

    <div class="d-grid" style="width: 24rem;">
        <div class="text-end mb-1">
            <button class="tf_btn tf_btn-secondary tf_btn-xs tf_btn-icon"><i class="fas fa-cog"></i></button>
        </div>
        <div class="border border-secondary rounded-1 p-2 d-inline-grid g-2 bg-positive overflow-y-auto" style="height: 20rem; box-shadow: 0 2px 3px rgba(0,0,0,.125); font-size: 87.5% !important;">
            <div class="d-grid g-2 cols-2 justify-items-center">
                <div>
                    <input id="rows" name="dataDirectionview3163" value="rows" type="radio" checked>
                    <label for="rows" class="text-secondary">По строкам</label>
                </div>
                <div>
                    <input id="cols" name="dataDirectionview3163" value="cols" type="radio">
                    <label for="cols" class="text-secondary">По столбцам</label>
                </div>
            </div>
            <div class="d-grid cols-3 g-2">
                <label for="legendLength" class="tf_form-label text-secondary flex-shrink-0 pt-1 text-end" lang="ru">Длина подписей в легенде</label>
                <div class="col-span-2">
                    <input id="legendLength" maxlength="4" class="tf_form-control tf_form-control-xs tf_form-control-secondary" type="number" min="0" placeholder="∞">
                    <div class="tf_form-text text-secondary" lang="ru">По умолчанию длина не ограничена.</div>                
                </div>
            </div>
            <div class="d-grid cols-3 g-2">
                <div class="col-span-3">
                    <input id="showLegend" value="rows" type="checkbox" checked>
                    <label for="showLegend" class="text-secondary">Показывать легенду</label>
                </div>
                <label for="legendPlase" class="tf_form-label text-secondary flex-shrink-0 pt-1 text-end">Расположение легенды</label>
                <div class="col-span-2">
                    <select id="legendPlase" class="tf_form-control tf_form-control-xs tf_form-control-secondary">
                        <option selected value="top">Cверху</option>
                        <option value="bottom">Cнизу</option>
                        <option value="left">Cлева</option>
                        <option value="right">Cправа</option>
                    </select>
                    <div class="tf_form-text text-secondary" lang="ru">По умолчанию легенда сверху.</div>                
                </div>
            </div>
            <div class="d-grid cols-3 g-2">
                <div class="col-span-3">
                    <input id="showXAxis" value="rows" type="checkbox">
                    <label for="showXAxis" class="text-secondary">Показывать подписи оси признаков</label>
                </div>
                <div class="text-end">
                    <button class="tf_btn tf_btn-transparent text-secondary tf_btn-icon tf_btn-xs"><i class="fas fa-question-circle fa-lg"></i></button>
                </div>
                <div class="col-span-2">
                    <input id="legendLength" class="tf_form-control tf_form-control-xs tf_form-control-secondary" type="text" placeholder="форма значения">
                </div>
            </div>
            <div class="d-grid cols-3 g-2">
                <div class="col-span-3">
                    <input id="showYAxis" value="rows" type="checkbox">
                    <label for="showYAxis" class="text-secondary">Показывать подписи оси значений</label>
                </div>
                <div class="text-end">
                    <button class="tf_btn tf_btn-transparent text-secondary tf_btn-icon tf_btn-xs"><i class="fas fa-question-circle fa-lg"></i></button>
                </div>
                <div class="col-span-2">
                    <input id="legendLength" class="tf_form-control tf_form-control-xs tf_form-control-secondary" type="text" placeholder="форма значения">
                </div>
            </div>
            <div class="d-grid cols-3 g-2">
                <label for="rotateLabels" class="tf_form-label text-secondary flex-shrink-0 pt-1 text-end" lang="ru">Угол поворота подписей</label>
                <div class="col-span-2">
                    <input id="rotateLabels" maxlength="4" class="tf_form-control tf_form-control-xs tf_form-control-secondary" type="number" min="0" max="360" placeholder="0">
                    <div class="tf_form-text text-secondary" lang="ru">Угол поворота подписей оси признаков.</div>
                </div>
            </div>
            <div>
                <input id="multilineLabels" value="rows" type="checkbox" checked>
                <label for="multilineLabels" class="text-secondary">Перенос строк в подписях оси признаков</label>
            </div>
            <div class="pb-2">
                <input id="showControls" value="rows" type="checkbox" checked>
                <label for="showControls" class="text-secondary mb-3">Показывать настройки</label>
            </div>
        </div>
    </div>

    <div id="layout">
        <div class="h1" role="heading" aria-level="1">Layout</div>
        <div class="d-flex g-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Fast to goal:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="layout#main">Main</a>
                <a href="layout#header">Header</a>
                <a href="layout#fullscreen">Full screen mode</a>
                <a href="layout#popup">Pop-up</a>
                <a href="layout#modal">Modal</a>
            </div>
        </div>
        <div class="d-flex g-3 mt-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Examples:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="layout/2x2">2x2</a>
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

    <div id="popup" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Pop-up</div>
        <p>
            <!-- To put <b>.tf_layout-main</b> into full-screen mode, you need to add a class <b>.tf_layout-main--fullscreen</b>. -->
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <button
                    on:click="{() => $state.popupLoader = !$state.popupLoader}"
                    class="tf_btn tf_btn-secondary m-1"
                >
                    <i class="fas {$state.popupLoader ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i>Toogle loader
                </button>
                <button
                    on:click="{() => $state.popupToaster = !$state.popupToaster}"
                    class="tf_btn tf_btn-secondary m-1"
                >
                    <i class="fas {$state.popupToaster ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i>Toogle toaster
                </button>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    // Loader
    <div class="tf_layout-popup-loader">
        Loading data...
    </div>

    // Toaster
    <div class="tf_layout-popup-toster">
        <div>First toast message</div>
        <div>Second toast message</div>
        <div>Third toast message</div>
    </div>
                '
            />
        </div>
    </div>

    <div id="modal" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Modal</div>
        <p>
            <!-- To put <b>.tf_layout-main</b> into full-screen mode, you need to add a class <b>.tf_layout-main--fullscreen</b>. -->
        </p>
        <div>
            <div class="bg-background rounded-2 rounded-bottom-0 p-3 text-center">
                <button
                    on:click="{() => $state.modalLoader = !$state.modalLoader}"
                    class="tf_btn tf_btn-secondary m-1"
                >
                    <i class="fas {$state.modalLoader ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i>Toogle loader
                </button>
            </div>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="tf_layout-modal-loader">
        <div class="m-auto bg-positive px-5 py-3 rounded d-flex">
            <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".25" cx="18" cy="18" r="18"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
            <div class="my-auto ml-3">
                Loading data...
            </div>
        </div>
    </div>
                '
            />
        </div>
    </div>

</div>
