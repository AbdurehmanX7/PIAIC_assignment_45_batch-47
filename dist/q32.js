"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = ['Shahid', 'Ali', 'Umar', 'Qasim', 'Yahya'];
const new_users = ['shahid', 'ahmad', 'ali', 'asad', 'Yahya'];
for (let i = 0; i < new_users.length; i++) {
    let isUsernameTaken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isUsernameTaken = true;
            break;
        }
    }
    if (isUsernameTaken) {
        console.log(`Username '${new_users[i]}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Username '${new_users[i]}' is available.`);
    }
}
;
