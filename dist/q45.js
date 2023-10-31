"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
const carInfo = createCar("Toyota", "Camry", "color", "white", "year", 2023);
console.log(carInfo);
