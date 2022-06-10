let win = 0;
let loss = 0;

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 9; i++) {
    const index = document.getElementById(`hole${i}`);

    index.onclick = function() {
        if (index.classList.contains( 'hole_has-mole')) {
            win += 1;
            if (win > 9) {
                alert ("Вы победили!")
                Endgame();
            };
        }
        else {
            loss += 1;
            if (loss > 4) {
                alert ("Вы проиграли!")
                Endgame();
            };
        };
        dead.textContent = win;
        lost.textContent = loss;
       
    }
    
}

function Endgame () {
    win = 0;
    loss = 0;
    dead.textContent = win;
    lost.textContent = loss;
}
