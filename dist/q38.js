"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(name, country = 'Unknown') {
    console.log(`${name} is in ${country}`);
}
describe_city('Lahore', 'Pakistan');
describe_city('Paris', 'France');
describe_city('London');
