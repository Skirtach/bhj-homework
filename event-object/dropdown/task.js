const drop = document.querySelector(".dropdown__list");
const btn = document.querySelector(".dropdown__value")
const a = document.querySelectorAll("a")

function show () {
    drop.classList.toggle("dropdown__list_active");
}

btn.addEventListener("click", show)

function remove (event) {
    event.preventDefault();
    btn.textContent = event.target.textContent;
    drop.classList.toggle("dropdown__list_active");
}

Array.from(a).forEach((a) => {
    a.addEventListener('click', remove) 
})