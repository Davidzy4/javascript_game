const prompt = require("prompt-sync")({sigint:true});

let input = null;

while(input !=="q"){
    console.log("(w)up, (s)down, (a)left, (d)right, (q)quit.");
    input = prompt("where do you like to move to?");
    console.log(input);

    switch(input.toLowerCase()){
        case "w":
            console.log("You moved up.\n");               // user moved up
            break;
        case "s":
            console.log("You moved down.\n");             // user moved down
            break;
        case "a":
            console.log("You moved left.\n");             // user moved left
            break;
        case "d":
            console.log("You moved right.\n");            // user moved right
            break;
        case "q":
            console.log("Kthxbai, thanks for playing");
            process.exit();
            break;
        default:
            console.log("Unrecognised Input! Bzzzt\n");
            break;
    }
}