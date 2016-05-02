var user = prompt("What's your age").toUpperCase();
var color = true;
var computer = true;

switch (user) {
    case '1':
        if (computer && color) {
        console.log("A");
        } else {
            console.log("a");
        }
    case '2':
        if (computer || color) {
            console.log("B");
        } else {
            console.log("b");
        }
        break;
    case '3':
        console.log("C");
        break;
    default :
    console.log("HAHA");
}
