const book_controls = document.querySelector(".book__control");

const book = document.querySelector(".book")

function fontchange (event) {
    event.preventDefault();

    if (event.target.dataset.size === "big") {
        book.classList.add('book_fs-big');
        
    }
    else if (event.target.dataset.size === "small") {
        book.classList.add('book_fs-small');
    }
    else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    } 
    for (let link of document.querySelectorAll('.font-size')) {
        link.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active')
}

for (let control of book_controls.children) {
    control.addEventListener('click', fontchange)
}