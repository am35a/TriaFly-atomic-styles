<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="default" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Default</div>
    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive p-3 d-grid g-3">
            <div>
                <div class="tf_form-check">
                    <input type="checkbox" value="" id="flexCheckChecked">
                    <label for="flexCheckChecked">Checked checkbox</label>
                </div>
                <div class="tf_form-check">
                    <input type="checkbox" value="" id="flexCheckChecked2" checked>
                    <label for="flexCheckChecked2">Checked checkbox</label>
                </div>
            </div>
            <div>
                <div class="tf_form-radio">
                    <input id="radioDefault1" name="radioDefault" type="radio">
                    <label for="radioDefault1">Checked checkbox</label>
                </div>
                <div class="tf_form-radio">
                    <input id="radioDefault2" name="radioDefault" type="radio" checked>
                    <label for="radioDefault2">Checked checkbox</label>
                </div>
            </div>
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
                <div class="tf_form-text">
                    For datalist activate start typing or click twice to the input field above.
                </div>
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
                <label for="inputFile" class="tf_form-label">Default file input</label>
                <input id="inputFile" class="tf_form-control" type="file">
            </div>
            <input class="tf_form-control" type="date" id="party" name="party" min="2017-04-01" max="2017-04-30">
        </form>
        <Highlight
            class="my-0"
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