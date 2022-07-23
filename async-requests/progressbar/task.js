let form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e)=>{
    

    let xhr = new XMLHttpRequest();
    console.log(xhr)
    let formdata = new FormData(form);

    xhr.onprogress = function (event) {
        progress.value = event.loaded / 1000000;
    }
    xhr.onloadend = function() {
        if (xhr.status == 200) {
          console.log("Успех");
        } else {
          console.log(this.status);
        }
    };
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formdata);
    e.preventDefault();
})

