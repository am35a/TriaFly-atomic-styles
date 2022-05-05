// let isDropBtnActive = false
// window.onmousedown = function(event) {
//     if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus .tf_btn-drop *'))
//         event.target == document.activeElement ? isDropBtnActive = true : isDropBtnActive = false
// }
// window.onmouseup = function(event) {
//     if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus .tf_btn-drop *'))
//         if (isDropBtnActive) {
//             event.target.blur()
//             isDropBtnActive = false
//         } else
//             event.target.focus()
// }

// from server
// let isDropBtnActive = false
// window.onmousedown = function(event) {
//     if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus tf_btn-drop *'))
//         event.target == document.activeElement ? isDropBtnActive = true : isDropBtnActive = false
// }
// window.onmouseup = function(event) {
//     if (event.target.matches('.tf_drop-focus .tf_btn-drop, .tf_drop-focus tf_btn-drop *'))
//         if (isDropBtnActive) {
//             event.target.blur()
//             console.log('event.target.blur()')
//             isDropBtnActive = false
//         } else {
//             event.target.focus()
//             console.log('event.target.focus()')
//         }
// }



let isDropBtnActive = false
let targetDropDown = undefined

function closeOpenDropdowns() {
    var i, x = document.getElementsByClassName('tf_btn-drop open')
    for (i = 0; i < x.length; i++)
        x[i].classList.remove('open')
    isDropBtnActive = false
}

window.onmousedown = function(event) {
    
    if (event.target.matches('.tf_drop-focus .tf_btn-drop')) {
        if (event.target != targetDropDown) {
            closeOpenDropdowns()
            targetDropDown = event.target
            targetDropDown.classList.add('open')
        } else {
            targetDropDown.classList.remove('open')
            targetDropDown = undefined
        }
    } else {
        if(targetDropDown) {
            if (!event.target.matches('.tf_drop-content *')) {
                closeOpenDropdowns()
                targetDropDown = undefined
            }
        }
    }    
}
window.onmouseup = function(event) {
    if (event.target.matches('.tf_drop-content button')) {
        closeOpenDropdowns()
        targetDropDown = undefined
    }
}


/*

http://code.mu/ru/javascript/book/prime/dom/object-Event/bubbling-target-element/
https://pretagteam.com/question/search-result-in-dropdown-menu-on-pure-js
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname_loop
https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

*/