import { writable } from 'svelte/store'

export let state = writable(
    {
        fullscreen: false
    }
)
