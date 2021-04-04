import { writable } from 'svelte/store'

export let state = writable(
    {
        isAsideExpand: false,
        fullscreen: false,
        popupLoader: false,
        popupToaster: false,
        popupSettings: false,
        modalLoader: false,
    }
)
