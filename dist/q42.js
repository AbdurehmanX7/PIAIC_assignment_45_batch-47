"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magicians_name = ['magician_1', 'magician_2', 'magician_3'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `${magician[i]} is a very great magician`;
        console.log(`${magician[i]}`);
    }
}
show_magicians(magicians_name);
make_great(magicians_name);
show_magicians(magicians_name);
