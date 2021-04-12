<script>
    export let value;
    export let title;

    export let minValue = undefined
    export let maxValue = undefined

    let isMinus = true
    let isPlus = true

    $: value, valueToogler()

    function valueToogler() {
        if(minValue != undefined) {
            if(value < minValue + 1) {
                if(value < minValue) value = minValue
                if(value === minValue) isMinus = false
            }
            if(value > minValue && !isMinus) isMinus = true
        }
        if(maxValue != undefined) {
            if(value > maxValue - 1) {
                if(value > maxValue) value = maxValue
                if(value === maxValue) isPlus = false
            }
            if(value < maxValue && !isPlus) isPlus = true
        }
    }
</script>

<label for="numb-inputer-{title}" class="tf_form-label text-secondary">{title}</label>
<div class="d-flex g-1 border p-1 rounded-2">
    <button
        on:click="{() => value--}"
        class="tf_btn tf_btn-sm tf_btn-transparent tf_btn-icon"
        disabled={!isMinus}
    >
        <i class="fas fa-minus"></i>
    </button>
    <input
        bind:value={value}
        id="numb-inputer-{title}"
        class="tf_form-control tf_form-control-sm tf_form-control-secondary text-center border-0"
        size="2"
        readonly="readonly"
        type="text" placeholder="Click to type or select"
        tabindex="-1"
    >
    <button
        on:click="{() => value++}"
        class="tf_btn tf_btn-sm tf_btn-transparent tf_btn-icon"
        disabled={!isPlus}
    >
        <i class="fas fa-plus"></i>
    </button>
</div>