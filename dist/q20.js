"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Japan",
    "Australia",
    "India",
    "Brazil",
    "South Africa",
];
console.log("List of Countries:");
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
});
const languages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#"
];
console.log("List of Programming Languages:");
languages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});
