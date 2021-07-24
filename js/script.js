"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }

const number = 50;

// if (number <= 49) {
//     console.log('false');
// } else if (number > 100){
//     console.log('false');
// } else {
//     console.log('true');
// }

// (number == 50) ? console.log('true') : console.log('false');

switch (number) {
    case 49:
        console.log('false'); 
        break;
    case 100:
        console.log('false'); 
        break;
    case 50:
        console.log('true'); 
        break;    
    default:
        console.log('Не в этот раз!');
}