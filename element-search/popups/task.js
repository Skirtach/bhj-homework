const main = document.getElementById("modal_main").className = "modal  modal_active"
const modal = document.getElementsByClassName("modal__close");
const cross = document.getElementsByClassName("show-success");

function closeWindow () {
    document.getElementById("modal_main").className = "modal"
    document.getElementById("modal_success").className = "modal"
}
function showWindow () {
    document.getElementById("modal_success").className = "modal  modal_active"
}
Array.from(modal).forEach(function(modal) {
    modal.addEventListener('click',closeWindow);
  });
Array.from(cross).forEach(function(cross) {
    cross.addEventListener('click',showWindow);
  });

  