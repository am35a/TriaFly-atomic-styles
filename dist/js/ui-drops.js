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





(function(){
    'use strict';

    /* focus */

    var root = this,
        _ = root._,
        $ = root.jQuery;

    let targetDropDown;
    let dropHoverButtons, dropHoverContents;

    function closeOpenDropdowns() {
        _.forEach($('.tf_btn-drop.open'), (item, i) => {
            item.classList.remove('open');
        });
        targetDropDown = undefined;
    }

    window.onclick = function(event) {
        if (!event.target.matches('.tf_drop-hover > .tf_btn-drop')) {
            if (dropHoverContents) {
                dropHoverContents.forEach(el => {
                    el.style.visibility="hidden";
                });
            }
        }
        if (event.target.matches('.tf_drop-focus > .tf_btn-drop')) {
            // if(targetDropDown) {
            //     if(targetDropDown !== event.target && !event.target.matches('.tf_drop-content .tf_drop-focus > .tf_btn-drop')) {
            //         closeOpenDropdowns();
            //     }
            // }
            // if (event.target.classList.contains('open')) {
            //     event.target.classList.remove('open');
            // } else {
            //     event.target.classList.add('open');
            //     if (!targetDropDown) {
            //         targetDropDown = event.target;
            //     }
            // }
        } else {
            if (event.target.matches('.tf_drop-content button:not(.tf_btn-drop)') || targetDropDown && !event.target.matches('.tf_drop-focus *')) {
                closeOpenDropdowns();
            }
        }
    };
    window.onmousemove = function (event) {
        if (event.target.matches('.tf_drop-hover > .tf_btn-drop')) {
            event.stopPropagation();
            dropHoverButtons = document.querySelectorAll(".tf_drop-hover");
            dropHoverContents = document.querySelectorAll(".tf_drop-hover > .tf_drop-content");
            dropHoverContents.forEach(el => {
                if (event.target.nextElementSibling === el) {
                    event.target.nextElementSibling.style.visibility="visible";
                } else {
                    el.style.visibility="hidden";
                }
            });
        }
    };

}).call(this);



/*

http://code.mu/ru/javascript/book/prime/dom/object-Event/bubbling-target-element/
https://pretagteam.com/question/search-result-in-dropdown-menu-on-pure-js
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname_loop
https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

*/