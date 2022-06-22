const rotat = document.querySelectorAll('.rotator__case');

let speed = 1000;
let IntervalId;
let ind = 0;
function rot() {
    clearInterval(IntervalId)
        rotat[ind].classList.toggle("rotator__case_active");
        ind++;
        if (ind === rotat.length) {
           ind = 0;    
        }
        rotat[ind].classList.toggle("rotator__case_active");
        rotat[ind].style.color = rotat[ind].dataset.color;
        speed = rotat[ind].dataset.speed; 
        IntervalId = setInterval(rot, speed)
}
IntervalId = setInterval(rot, speed)

