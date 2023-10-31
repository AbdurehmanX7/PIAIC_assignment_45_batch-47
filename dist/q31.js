"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Ali", "Ahmad", "Qasim", "Taha"];
function checkUserList(userList) {
    if (userList.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log("The user list is not empty.");
    }
}
;
console.log(checkUserList(usernames));
let username1 = [];
function checkUserList1(userList) {
    if (userList.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log("The user list is not empty.");
    }
}
;
console.log(checkUserList(username1));
