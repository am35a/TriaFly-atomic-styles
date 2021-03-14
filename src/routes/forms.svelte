<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div class="d-grid g-3">

    <div id="forms">
        <div class="h1" role="heading" aria-level="1">Forms</div>
        <div class="d-flex g-3">
            <div class="text-info"><i class="fas fa-anchor"></i> Fast to goal:</div>
            <div class="d-flex g-3 flex-wrap">
                <a href="forms#default">Default</a>
                <a href="forms#primary">Primary</a>
                <a href="forms#secondary">Secondary</a>
                <a href="forms#info">Info</a>
                <a href="forms#success">Success</a>
                <a href="forms#warning">Warning</a>
                <a href="forms#error">Error</a>
                <a href="forms#sizes">Sizes</a>
                <a href="forms#disabled">Disabled</a>
            </div>
        </div>
    </div>

    <div id="default" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Default</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3 d-grid g-3">
                <div>
                    <label for="inputTextDefault" class="tf_form-label">Label default</label>
                    <input id="inputTextDefault" class="tf_form-control" type="text" placeholder="Placeholder">
                    <div class="tf_form-text">
                        This line can contains additional information to the input field above.
                    </div>
                </div>
                <div>
                    <input list="datalist" class="tf_form-control" type="text" placeholder="Placeholder">
                    <datalist id="datalist">
                        <option value="buttons">
                        <option value="forms">
                        <option value="layout">
                        <option value="grid">
                        <option value="utilities">
                    </datalist>
                </div>
                <div>
                    <select class="tf_form-control">
                        <option selected>Open and select one</option>
                        <option value="1">First</option>
                        <option value="2">Secons</option>
                        <option value="3">Third</option>
                    </select>
                </div>
                <div>
                    <textarea class="tf_form-control resize-vertical" rows="3" placeholder="Placeholder"></textarea>
                </div>
                <div>
                    <label for="formFile" class="tf_form-label">Default file input example</label>
                    <input class="tf_form-control" type="file" id="formFile">
                </div>                
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <div class="d-grid g-3">
        <div>
            <label for="inputTextDefault" class="tf_form-label">Label default</label>
            <input id="inputTextDefault" class="tf_form-control" type="text" placeholder="Placeholder">
            <div class="tf_form-text">
                This line can contains additional information to the input field above.
            </div>
        </div>
        <div>
            <input list="datalist" class="tf_form-control" type="text" placeholder="Placeholder">
            <datalist id="datalist">
                <option value="buttons">
                <option value="forms">
                <option value="layout">
                <option value="grid">
                <option value="utilities">
            </datalist>
        </div>
        <div>
            <textarea class="tf_form-control resize-vertical" rows="3" placeholder="Placeholder"></textarea>
        </div>
    </div>
                '
            />
        </div>
    </div>

    <div>
        The following classes defining forms colors:
        <ul>
            <li class="text-primary">
                .tf_form-control-primary
            </li>
            <li class="text-secondary">
                .tf_form-control-secondary
            </li>
            <li class="text-info">
                .tf_form-control-info
            </li>
            <li class="text-success">
                .tf_form-control-success
            </li>
            <li class="text-warning">
                .tf_form-control-warning
            </li>
            <li class="text-error">
                .tf_form-control-error
            </li>
        </ul>
    </div>

    <div>
        <div class="h2" role="heading" aria-level="2">Main color forms</div>
    </div>
    
    <div id="primary" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Primary</div>
        <!-- <p>To create a default button, use the <b>.tf_btn</b> class, but default state is not recommended to use without color classes for any buttons.</p> -->
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextPrimary" class="tf_form-label text-primary">Label primary</label>
                <input id="inputTextPrimary" class="tf_form-control tf_form-control-primary" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-primary">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-primary">Label primary</label>
    <input id="inputText" class="tf_form-control tf_form-control-primary" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-primary">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="secondary" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Secondary</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextSecondary" class="tf_form-label text-secondary">Label secondary</label>
                <input id="inputTextSecondary" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-secondary">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-secondary">Label secondary</label>
    <input id="inputText" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-secondary">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="info" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Info</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextInfo" class="tf_form-label text-info">Label info</label>
                <input id="inputTextInfo" class="tf_form-control tf_form-control-info" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-info">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-info">Label info</label>
    <input id="inputText" class="tf_form-control tf_form-control-info" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-info">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="success" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Success</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextSuccess" class="tf_form-label text-success">Label success</label>
                <input id="inputTextSuccess" class="tf_form-control tf_form-control-success" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-success">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-success">Label success</label>
    <input id="inputText" class="tf_form-control tf_form-control-success" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-success">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="warning" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Warning</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextWarning" class="tf_form-label text-warning">Label warning</label>
                <input id="inputTextWarning" class="tf_form-control tf_form-control-warning" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-warning">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-warning">Label warning</label>
    <input id="inputText" class="tf_form-control tf_form-control-warning" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-warning">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="error" class="overflow-auto">
        <div class="h3" role="heading" aria-level="3">Error</div>
        <div>
            <form class="bg-background rounded-2 rounded-bottom-0 p-3">
                <label for="inputTextError" class="tf_form-label text-error">Label error</label>
                <input id="inputTextError" class="tf_form-control tf_form-control-error" type="text" placeholder="Placeholder">
                <div class="tf_form-text text-error">
                    This line can contains additional information to the input field above.
                </div>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <label for="inputText" class="tf_form-label text-error">Label error</label>
    <input id="inputText" class="tf_form-control tf_form-control-error" type="text" placeholder="Placeholder">
    <div class="tf_form-text text-error">
        This line can contains additional information to the input field above.
    </div>
                '
            />
        </div>
    </div>

    <div id="sizes" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Sizes</div>
        <p>For change size of forms use <b>.tf_form-control-sm</b> and <b>.tf_form-control-lg</b> classes.</p>
        <div>
            <form class="d-grid g-3 bg-background rounded-2 rounded-bottom-0 p-3">
                <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
                <input class="tf_form-control" type="text" placeholder="Placeholder">
                <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <input class="tf_form-control tf_form-control-sm" type="text" placeholder="Placeholder">
    <input class="tf_form-control" type="text" placeholder="Placeholder">
    <input class="tf_form-control tf_form-control-lg" type="text" placeholder="Placeholder">    
                '
            />
        </div>
    </div>

    <div id="disabled" class="overflow-auto">
        <div class="h2" role="heading" aria-level="2">Disabled</div>
        <p>For change state of forms use <b>disabled</b> attribute.</p>
        <div>
            <form class="d-grid g-3 bg-background rounded-2 rounded-bottom-0 p-3">
                <input class="tf_form-control tf_form-control-primary" type="text" placeholder="placeholder" disabled>
                <input class="tf_form-control tf_form-control-secondary" type="text" placeholder="placeholder" disabled>
                <input class="tf_form-control tf_form-control-info" type="text" placeholder="placeholder" disabled>
                <input class="tf_form-control tf_form-control-success" type="text" placeholder="placeholder" disabled>
                <input class="tf_form-control tf_form-control-warning" type="text" placeholder="placeholder" disabled>
                <input class="tf_form-control tf_form-control-error" type="text" placeholder="placeholder" disabled>
            </form>
            <Highlight
                class="rounded-2 rounded-top-0 mt-0"
                language='{xml}'
                code='
    <input class="tf_form-control tf_form-control-primary" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-secondary" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-info" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-success" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-warning" type="text" placeholder="placeholder" disabled>
    <input class="tf_form-control tf_form-control-error" type="text" placeholder="placeholder" disabled>
                '
            />
        </div>
    </div>

</div>
