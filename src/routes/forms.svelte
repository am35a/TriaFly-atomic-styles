<svelte:head>
	<title>Forms</title>
</svelte:head>

<h1>forms</h1>
<h2>default</h2>
<form>
    <label for="inputText1" class="tf_form-label">Label default</label>
    <input id="inputText1" class="tf_form-control" type="text" placeholder="Type here text">
    <div class="tf_form-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h2>colored</h2>
<h3>primary</h3>
<form>
    <label for="inputText1" class="tf_form-label text-primary">Label primary</label>
    <input id="inputText1" class="tf_form-control tf_form-control-primary" type="text" placeholder="Type here text">
    <div class="tf_form-text text-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h3>secondary</h3>
<form>
    <label for="inputText1" class="tf_form-label text-secondary">Label secondary</label>
    <input id="inputText1" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Type here text">
    <div class="tf_form-text text-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h3>info</h3>
<form>
    <label for="inputText1" class="tf_form-label text-info">Label info</label>
    <input id="inputText1" class="tf_form-control tf_form-control-info" type="text" placeholder="Type here text">
    <div class="tf_form-text text-info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h3>success</h3>
<form>
    <label for="inputText1" class="tf_form-label text-success">Label success</label>
    <input id="inputText1" class="tf_form-control tf_form-control-success" type="text" placeholder="Type here text">
    <div class="tf_form-text text-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h3>warning</h3>
<form>
    <label for="inputText1" class="tf_form-label text-warning">Label warning</label>
    <input id="inputText1" class="tf_form-control tf_form-control-warning" type="text" placeholder="Type here text">
    <div class="tf_form-text text-warning">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h3>error</h3>
<form>
    <label for="inputText1" class="tf_form-label text-error">Label error</label>
    <input id="inputText1" class="tf_form-control tf_form-control-error" type="text" placeholder="Type here text">
    <div class="tf_form-text text-error">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eaque, nostrum aut reiciendis quibusdam!
    </div>
</form>
<h2>sizes</h2>
<form class="d-grid g-3">
    <input id="inputText1" class="tf_form-control tf_form-control-sm" type="text" placeholder="Type here text">
    <input id="inputText1" class="tf_form-control" type="text" placeholder="Type here text">
    <input id="inputText1" class="tf_form-control tf_form-control-lg" type="text" placeholder="Type here text">
</form>
<h2>disabled</h2>
<form class="d-grid g-3">
    <input id="inputText1" class="tf_form-control tf_form-control-primary" type="text" placeholder="Type here text" disabled>
    <input id="inputText1" class="tf_form-control tf_form-control-secondary" type="text" placeholder="Type here text" disabled>
    <input id="inputText1" class="tf_form-control tf_form-control-info" type="text" placeholder="Type here text" disabled>
    <input id="inputText1" class="tf_form-control tf_form-control-success" type="text" placeholder="Type here text" disabled>
    <input id="inputText1" class="tf_form-control tf_form-control-warning" type="text" placeholder="Type here text" disabled>
    <input id="inputText1" class="tf_form-control tf_form-control-error" type="text" placeholder="Type here text" disabled>
</form>
