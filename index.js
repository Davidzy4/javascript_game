const prompt = require("prompt-sync")();

// game elemetns
const GRASS = "░";
const HOLE = "0";
const HAT = "^";
const PLAYER = "*";

const rows = 20;
const cols = 20;

const field =  [];                               // create array for the game field

// populate game field as 2d array - using Math.random()
// via nested loops


for(let i=0; i<rows; i++){
    field[i] = [];                               // same as field = new Array();
    for(let j=0; j<cols; j++){                  // populate columns in each field
        field[i][j] = Math.random() > 0.2 ? GRASS : HOLE;
    }
}

// TODO - Populate player at start of game
field[0][0] = PLAYER;
// console.log(field);

for (let row of field) {
    console.log(row.join(""));
}

// working withe a do-while loop
let i = 1;

do{
    console.log(i);
    i++;
}while(i<=10);

// use a do while loop to cre8 count-down from 10 to 1

let j = 10;

while(j>=0){
    console.log(j);
    j--;
}