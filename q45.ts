interface myCarObject {
    manufacturer: string;
    model: string;
    [key: string]: any;  
}

function createCar(manufacturer: string, model: string, ...args: any[]): myCarObject {
    const car: myCarObject = {
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