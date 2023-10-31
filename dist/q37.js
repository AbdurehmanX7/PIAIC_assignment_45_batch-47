"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt2(size = 'large', message = 'I love TypeScript') {
    console.log(`The size of my shirt is ${size} and "${message}" should be printed on it.`);
}
make_shirt2();
make_shirt2('medium');
make_shirt2('small', 'TypeScript is awesome!');
