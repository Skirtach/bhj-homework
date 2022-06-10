let timer = 59;

let  downloadTimer = setInterval( function () {
    timer--;
    document.getElementById("timer").textContent =  timer;
    if (timer <=0) {
        clearInterval(downloadTimer);
        alert(`Вы победили в конкурсе`)
    }
},1000)