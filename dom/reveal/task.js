const reveal = document.querySelectorAll('.reveal');

window.onscroll = function () {
    for (rev of reveal) {
        const { top,bottom } = rev.getBoundingClientRect();
    if (top > window.innerHeight || bottom < 0) {
        rev.classList.remove("reveal_active");
    }
    else {
        rev.classList.add("reveal_active");
    }
    }   
}