"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        language: "English",
    },
    {
        name: "France",
        capital: "Paris",
        language: "French",
    },
    {
        name: "Japan",
        capital: "Tokyo",
        language: "Japanese",
    },
];
console.log("List of Countries:");
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country.name}`);
    console.log(`   Capital: ${country.capital}`);
    console.log(`   Official Language: ${country.language}\n`);
});
