const tab = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");

for (let i=0; i<tab.length; i++) {
    tab[i].addEventListener('click', function () {
        const tab_activ = document.querySelector(".tab_active");
        const cont_activ = document.querySelector(".tab__content_active");
        if(tab_activ) {
            tab_activ.classList.toggle("tab_active");
            cont_activ.classList.toggle("tab__content_active");
        }
        tab[i].classList.toggle("tab_active");
        content[i].classList.toggle("tab__content_active");
    })
}