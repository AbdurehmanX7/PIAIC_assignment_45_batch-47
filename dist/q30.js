"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user_names = ["Eric", "James", "Stephen", "Admin", "John"];
for (let i = 0; i <= 4; i++) {
    if (user_names[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`"Hello" ,${user_names[i]}, thank you for logging in again."`);
    }
    ;
}
;
