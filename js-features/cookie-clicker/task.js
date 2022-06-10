let count = 0;
let image = document.getElementById("cookie");
function countCookier () { 
    document.getElementById("clicker__counter").textContent = count;
        count++; 
        if (count % 2===0) {
            image.width = 400;
        }
        else {
            image.width = 200;
        }
        
        }

image.onclick = countCookier;
