"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = 0;
if (person < 2) {
    console.log("The person is a baby.");
}
else if (person >= 2 && person < 4) {
    console.log("The person is a toddler.");
}
else if (person >= 4 && person < 13) {
    console.log("the person is a kid.");
}
else if (person >= 13 && person < 20) {
    console.log("The person is a teenager.");
}
else if (person >= 20 && person < 65) {
    console.log("The person is an adult.");
}
else if (person >= 65) {
    console.log("The person is an elder.");
}
;
