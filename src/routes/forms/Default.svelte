<script>
    import { Highlight } from "svelte-highlight"
    import { xml } from "svelte-highlight/languages"
</script>

<div id="default" class="mb-3">
    <div class="h2" role="heading" aria-level="2">Default</div>
    <div class="rounded-2 overflow-hidden">
        <form class="bg-positive p-3 d-grid g-3">
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
                <label for="inputFile" class="tf_form-label">Default file input</label>
                <input id="inputFile" class="tf_form-control" type="file">
            </div>                
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