<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"

    let disabled = false
</script>

<div id="default" class="mb-4 d-grid g-4">
    <div class="h2" role="heading" aria-level="2">Default</div>
    <div class="rounded-2 overflow-hidden">
        <div class="bg-positive rounded-2 rounded-bottom-0 p-4">
            <div>
                <button
                    on:click="{() => disabled = !disabled}"
                    class="tf_btn tf_btn-sm tf_btn-secondary"
                ><i class="fas {disabled ? 'fa-toggle-on' : 'fa-toggle-off'} mr-2"></i> Disabled forms</button>
            </div>
            <hr>
            <form class="d-grid g-4" {disabled}>
                <div>
                    <label for="inputTextDefault" class="tf_form-label">Label default</label>
                    <input id="inputTextDefault" class="tf_form-control" type="text" placeholder="Placeholder" {disabled}>
                    <div class="tf_form-text">
                        This line can contains additional information to the input field above.
                    </div>
                </div>
                <div>
                    <input list="datalist" class="tf_form-control" type="text" placeholder="Placeholder" {disabled}>
                    <datalist id="datalist">
                        <option value="buttons">
                        <option value="forms">
                        <option value="layout">
                        <option value="grid">
                        <option value="utilities">
                    </datalist>
                    <div class="tf_form-text">
                        For datalist activate start typing or click twice to the input field above.
                    </div>
                </div>
                <div>
                    <select class="tf_form-control" {disabled}>
                        <option selected>Open and select one</option>
                        <option value="1">First</option>
                        <option value="2">Secons</option>
                        <option value="3">Third</option>
                    </select>
                </div>
                <div>
                    <textarea class="tf_form-control resize-vertical" rows="3" placeholder="Placeholder"  {disabled}></textarea>
                </div>
                <div>
                    <label for="inputFile" class="tf_form-label">Default file input</label>
                    <input id="inputFile" class="tf_form-control" type="file" {disabled}>
                </div>
                <input class="tf_form-control" type="date" id="party" name="party" min="2017-04-01" max="2017-04-30" {disabled}>
    
                <!--input class="tf_form-control tf_form-control-xs" type="color" id="body" name="body" value="#f6b73c">
                <input class="tf_form-control tf_form-control-sm" type="color" id="body" name="body" value="#f6b73c">
    
                <div class="tf_input-group">
                    <input id="inputTextDefault" class="tf_form-control" type="text" placeholder="Placeholder">
                    <input class="tf_form-control" type="color" id="body" name="body" value="#f6b73c">
                </div>
                <input class="tf_form-control tf_form-control-lg" type="color" id="body" name="body" value="#f6b73c"-->
            </form>
        </div>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    <form class="d-grid g-4" {disabled ? 'disabled' : ''}>
        <div>
            <label for="inputTextDefault" class="tf_form-label">Label default</label>
            <input id="inputTextDefault" class="tf_form-control" type="text" placeholder="Placeholder" {disabled ? 'disabled' : ''}>
            <div class="tf_form-text">
                This line can contains additional information to the input field above.
            </div>
        </div>
        <div>
            <input list="datalist" class="tf_form-control" type="text" placeholder="Placeholder" {disabled ? 'disabled' : ''}>
            <datalist id="datalist">
                <option value="buttons">
                <option value="forms">
                <option value="layout">
                <option value="grid">
                <option value="utilities">
            </datalist>
            <div class="tf_form-text">
                For datalist activate start typing or click twice to the input field above.
            </div>
        </div>
        <div>
            <select class="tf_form-control" {disabled ? 'disabled' : ''}>
                <option selected>Open and select one</option>
                <option value="1">First</option>
                <option value="2">Secons</option>
                <option value="3">Third</option>
            </select>
        </div>
        <div>
            <textarea class="tf_form-control resize-vertical" rows="3" placeholder="Placeholder" {disabled ? 'disabled' : ''}></textarea>
        </div>
        <div>
            <label for="inputFile" class="tf_form-label">Default file input</label>
            <input id="inputFile" class="tf_form-control" type="file" {disabled ? 'disabled' : ''}>
        </div>
        <input class="tf_form-control" type="date" id="party" name="party" min="2017-04-01" max="2017-04-30" {disabled ? 'disabled' : ''}>
    </form>
            '
        />
    </div>

    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive p-4 d-grid g-4">
            <div class="d-grid cols-2">
                <div>
                    <div class="mb-2 fst-italic">Signature as free test <span class="text-warning">NOT RECOMMENDED</span></div>
                    <label class="tf_form-check" disabled>
                        <input class="tf_form-check-input" type="checkbox">
                        Checkbox input
                    </label>
                    <label class="tf_form-check">
                        <input class="tf_form-check-input" type="checkbox" checked>
                        Checkbox input checked
                    </label>
                    <label class="tf_form-check">
                        <input class="tf_form-check-input" type="checkbox" checked disabled>
                        Checkbox input checked
                    </label>
                </div>
                <div>
                    <div class="mb-2 fst-italic">Signature wrap in label</div>
                    <div class="tf_form-check">
                        <input class="tf_form-check-input" id="сheck1" type="checkbox">
                        <label class="tf_form-check-label" for="сheck1">Checkbox input</label>
                    </div>
                    <div class="tf_form-check">
                        <input class="tf_form-check-input" id="сheckChecked1" type="checkbox" checked>
                        <label class="tf_form-check-label" for="сheckChecked1">Checkbox input checked</label>
                    </div>
                    <div class="tf_form-check">
                        <input class="tf_form-check-input" id="сheckDisabled1" type="checkbox" checked disabled>
                        <label class="tf_form-check-label" for="сheckDdisabled1">Checkbox input checked</label>
                    </div>
                </div>
            </div>
            
            <div class="d-grid cols-2">
                <div>
                    <div class="mb-2 fst-italic">Signature as free test <span class="text-warning">NOT RECOMMENDED</span></div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" name="radioNameGroup" type="radio">
                        Radio input
                    </div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" name="radioNameGroup" type="radio" checked>
                        Radio input checked
                    </div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" name="radioNameGroup-" type="radio" checked disabled>
                        Radio input checked
                    </div>
                </div>
                <div>
                    <div class="mb-2 fst-italic">Signature wrap in label</div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" id="radio" name="radioNameGroup2" type="radio">
                        <label class="tf_form-radio-label" for="radio">Radio input</label>
                    </div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" id="radioChecked" name="radioNameGroup2" type="radio" checked>
                        <label class="tf_form-radio-label" for="radioChecked">Radio input checked</label>
                    </div>
                    <div class="tf_form-radio">
                        <input class="tf_form-radio-input" id="radioDisabled" name="radioNameGroup2-" type="radio" checked disabled>
                        <label class="tf_form-radio-label" for="radioDisabled">Radio input checked</label>
                    </div>
                </div>
            </div>
        </form>
        <Highlight
            class="my-0"
            language='{xml}'
            code='
    // checkbox
    <div class="tf_form-check">
        <input class="tf_form-check-input" id="сheck" type="checkbox">
        <label class="tf_form-check-label" for="сheck">Checkbox input</label>
    </div>

    // radio
    <div class="tf_form-radio">
        <input class="tf_form-radio-input" id="radio" name="radioNameGroup" type="radio">
        <label class="tf_form-radio-label" for="radio">Radio input</label>
    </div>
            '
        />
    </div>    
</div>