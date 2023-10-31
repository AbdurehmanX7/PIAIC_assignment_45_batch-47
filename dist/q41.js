"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magicians_names = ['magician_1', 'magician_2', 'magician_3'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magicians_names);
