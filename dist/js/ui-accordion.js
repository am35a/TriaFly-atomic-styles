// document.querySelector('.tf_accordion').onclick = function(event) {
    const accordions = document.querySelectorAll('.tf_accordion');
    accordions.forEach((accordion) => {
        const sections = accordion.querySelectorAll('details:not(.tf_independent)');
        sections.forEach((section) => {
            section.addEventListener('click', () => {
                // Close all sections except the one clicked
                sections.forEach((s) => {
                    if (s !== section && s.hasAttribute('open')) {
                        s.removeAttribute('open');
                    }
                });
            });
        });
    });
// };
