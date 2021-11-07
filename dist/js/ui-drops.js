let isDropBtnActive = false
window.onmousedown = function(event) {
    if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus tf_btn-drop *'))
        event.target == document.activeElement ? isDropBtnActive = true : isDropBtnActive = false
}
window.onmouseup = function(event) {
    if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus tf_btn-drop *'))
        if (isDropBtnActive) {
            event.target.blur()
            isDropBtnActive = false
        } else
            event.target.focus()
}
