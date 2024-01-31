'use strict'

const TOTAL_GAMES = 10000000;

let won  = 0;
let lost = 0;

for (let i = 1; i <= TOTAL_GAMES; i++) {
    let safe = Math.floor(Math.random() * 3) + 1;
    let host = safe;

    let player = Math.floor(Math.random() * 3) + 1;    

    while (host == player || host == player) host = Math.floor(Math.random() * 3) + 1;
    
    if (safe == player) won++;
    else lost++;
}

console.log("Probability of winning without switching: ", won / TOTAL_GAMES)

//=======================================================================================================================================
//=======================================================================================================================================
//=======================================================================================================================================

won  = 0;
lost = 0;

for (let i = 1; i <= TOTAL_GAMES; i++) {
    
    let safe = Math.floor(Math.random() * 3) + 1;
    let host = safe;
    
    let player = Math.floor(Math.random() * 3) + 1;
    let player_old = player;
    
    while (host == player || host == safe) host = Math.floor(Math.random() * 3) + 1;
    while (player == host || player == player_old) player = Math.floor(Math.random() * 3) + 1;

    if (safe == player) won++;
    else lost++;
}

console.log("Probability of winning after switching: ", won / TOTAL_GAMES)
