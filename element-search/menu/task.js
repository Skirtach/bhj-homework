const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
    
     link.onclick = function () {
        const parent = link.closest(".menu__item");
        console.log(parent);
        if (parent.querySelector(".menu_sub")) {
            parent.querySelector(".menu_sub").classList.toggle("menu_active")
            return false
        }
                
     }

}) 

