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
