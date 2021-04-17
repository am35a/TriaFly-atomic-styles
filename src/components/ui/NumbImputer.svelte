<script>
    export let disabled = false;

    export let value;
    export let title;

    export let minValue = undefined
    export let maxValue = undefined

    let isMinus = true
    let isPlus = true

    $: value, valueToogler()

    function valueToogler() {
        if(minValue != undefined) {
            if(value <= minValue) {
                if(value < minValue) value = minValue
                if(value == minValue) isMinus = false
            }
            if(value > minValue && !isMinus) isMinus = true
        }
        if(maxValue != undefined) {
            if(value >= maxValue) {
                if(value > maxValue) value = maxValue
                if(value == maxValue) isPlus = false
            }
            if(value < maxValue && !isPlus) isPlus = true
        }
    }
</script>

<div {...$$restProps}>
    <label for="numb-inputer-{title}" class="tf_form-label text-secondary" style="{disabled ? 'opacity: 50%' : ''}">{title}</label>
    <div class="d-flex g-1 border border-secondary p-1 rounded-2" style="{disabled ? 'opacity: 50%' : ''}">
        <button
            on:click="{() => value--}"
            class="tf_btn tf_btn-sm tf_btn-transparent tf_btn-icon"
            disabled={!isMinus || disabled}
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
            disabled={!isPlus || disabled}
        >
            <i class="fas fa-plus"></i>
        </button>
    </div>
</div>