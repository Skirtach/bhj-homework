let form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e)=>{
    

    let xhr = new XMLHttpRequest();
    console.log(xhr)
    let formdata = new FormData(form);

    xhr.upload.onprogress = function (event) {
        if (event.total/event.loaded == 1) {
            progress.value = 1;
        }
        else if (event.total/event.loaded > 0/5) {
            progress.value = 0.7;
        }
        else {
            progress.value = 0.2;
        }
        console.log(`${event.loaded} из ${event.total}`);
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
























