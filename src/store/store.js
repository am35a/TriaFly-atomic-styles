import { writable } from 'svelte/store'

export let state = writable(
    {
        isAsideExpand: false,
        fullscreen: false
    }
)
