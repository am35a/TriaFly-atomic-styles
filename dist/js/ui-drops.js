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




/* current - start /

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

/* current - end */


// .classList.contains(testClass)

let targetDropDown = undefined;

function closeOpenDropdowns() {
    var i, x = document.getElementsByClassName('tf_btn-drop');
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('open');
    }
    targetDropDown = undefined;
};

window.onmousedown = function(event) {
    if (event.target.matches('.tf_drop-focus > .tf_btn-drop')) {
        if(targetDropDown) {
            if(targetDropDown !== event.target && !event.target.matches('.tf_drop-content .tf_drop-focus > .tf_btn-drop')) {
                closeOpenDropdowns();
            }
        }
        if (event.target.classList.contains('open')) {
            event.target.classList.remove('open');
        } else {
            event.target.classList.add('open');
            if (!targetDropDown) {
                targetDropDown = event.target;
            }
        }
    } else {
        if (event.target.matches('.tf_drop-content button:not(.tf_btn-drop)') || targetDropDown && !event.target.matches('.tf_drop-focus *')) {
            closeOpenDropdowns();
        }
    }
};


/*
let isDropBtnActive = undefined
let targetDropDown = undefined
// let isIntoDropDown = false

function closeOpenDropdowns() {
    var i, x = document.getElementsByClassName('tf_btn-drop open')
    for (i = 0; i < x.length; i++)
        x[i].classList.remove('open')
    // isDropBtnActive = false
}



/*
window.onmousedown = function(event) {
    console.log(1, isDropBtnActive, targetDropDown)

    if (isDropBtnActive === undefined) {
        if (event.target.matches('.tf_drop-focus button.tf_btn-drop')) {
            targetDropDown = event.target;
            isDropBtnActive = event.target;
            targetDropDown.classList.add('open');

            console.log(32, isDropBtnActive, targetDropDown)
        }

        console.log(22, isDropBtnActive, targetDropDown)
    } else {
        if (!(event.target === isDropBtnActive)) {
            if (!event.target.matches('.tf_drop-content *:not(button)')) {
                closeOpenDropdowns();
                if (event.target.matches('.tf_drop-focus button.tf_btn-drop')) {
                    targetDropDown = event.target;
                    isDropBtnActive = event.target;
                    targetDropDown.classList.add('open');
        
                    console.log(62, isDropBtnActive, targetDropDown)
                } else {
                    targetDropDown = undefined;
                    isDropBtnActive = undefined;

                    console.log(72, isDropBtnActive, targetDropDown)
                }
            } else {

            }

            console.log(52, isDropBtnActive, targetDropDown)
        } else {
            closeOpenDropdowns();
            targetDropDown = undefined;
            isDropBtnActive = undefined;

            console.log(82, isDropBtnActive, targetDropDown)
        }
    }
};
*/

/*
window.onmousedown = function(event) {
    if (event.target.matches('.tf_drop-focus > button, .tf_drop-content > button *')) {
        if (event.target !== targetDropDown) {
            if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
                closeOpenDropdowns();
                targetDropDown = undefined;
            }
            targetDropDown = event.target;
            targetDropDown.classList.add('open');
        } else {
            targetDropDown.classList.remove('open');
            targetDropDown = undefined;
        }
    } else {
        if(event.target.matches('.tf_drop-focus, .tf_drop-focus *')) {
            if (!event.target.matches('.tf_drop-content *.tf_btn-drop')) {
                closeOpenDropdowns();
                targetDropDown = undefined;
            }
        }
    }
    // console.log(event.target)
    if (event.target.matches('.tf_drop-content *')) {
        // closeOpenDropdowns();
        // targetDropDown = undefined;
        console.log(event.target)
    }

};

window.onmouseup = function(event) {
    if (event.target.matches('.tf_drop-content > button, .tf_drop-content > button *')) {
        if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
            closeOpenDropdowns();
        }
        targetDropDown = undefined;
    }
};



// window.onmousedown = function(event) {
//     if (event.target.matches('.tf_drop-focus > button, .tf_drop-content > button *')) {
//         if (event.target !== targetDropDown) {
//             if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
//                 closeOpenDropdowns();
//                 targetDropDown = undefined;
//             }
//             targetDropDown = event.target;
//             targetDropDown.classList.add('open');
//         } else {
//             targetDropDown.classList.remove('open');
//             targetDropDown = undefined;
//         }
//     } else {
//         if(event.target.matches('.tf_drop-focus, .tf_drop-focus *')) {
//             if (!event.target.matches('.tf_drop-content *.tf_btn-drop')) {
//                 closeOpenDropdowns();
//                 targetDropDown = undefined;
//             }
//         }
//     }
// };

// window.onmouseup = function(event) {
//     if (event.target.matches('.tf_drop-content > button, .tf_drop-content > button *')) {
//         if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
//             closeOpenDropdowns();
//         }
//         targetDropDown = undefined;
//     }
// };





window.onmouseup = function(event) {
    // console.log(2, isDropBtnActive, targetDropDown)
    
    // if(event.target.matches('.tf_drop-focus button.tf_btn-drop') && !isDropBtnActive){
    //     targetDropDown = event.target;
    //     isDropBtnActive = event.target;
    //     targetDropDown.classList.add('open');
    // }
};

/*
window.onmousedown = function(event) {
    console.log(1, targetDropDown)
    if (event.target.matches('.tf_drop-focus > button, .tf_drop-content > button *')) {
        console.log(11, targetDropDown)
        if (event.target != targetDropDown) {
            console.log(12, targetDropDown)
            if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
                console.log(13, targetDropDown)
                closeOpenDropdowns()
                targetDropDown = undefined
                isDropBtnActive = false
            }
            targetDropDown = event.target
            targetDropDown.classList.add('open')
        } else {
            console.log(14, targetDropDown)
            targetDropDown.classList.remove('open')
            targetDropDown = undefined
        }
    } else {
        console.log(15, targetDropDown)
        if(targetDropDown !== undefined) {
            closeOpenDropdowns()
            targetDropDown = undefined            
        }
        if(event.target.matches('.tf_drop-focus, .tf_drop-focus *')) {
            console.log(16, targetDropDown)
            if (!event.target.matches('.tf_drop-content *.tf_btn-drop')) {
                console.log(17, targetDropDown)
                closeOpenDropdowns()
                targetDropDown = undefined
            }
        }
    }
}
window.onmouseup = function(event) {
    console.log(2, targetDropDown)
    if (event.target.matches('.tf_drop-content > button, .tf_drop-content > button *')) {
        console.log(21, targetDropDown)
        // if(!event.target.matches('.tf_drop-content .tf_drop-focus > button')) {
        //     console.log(22, targetDropDown)
            closeOpenDropdowns()
        // }
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