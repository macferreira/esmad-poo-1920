class Car {
    constructor(brand, plate, color, deposit, fuelType) {
        this.brand = brand;
        this.plate = plate;
        this.color = color;
        this.deposit = deposit;
        this.fuelType = fuelType;
    }

    /**
     * Updates the car with a given color
     * @param {string} newColor the new color
     */
    updateColor(newColor) {
        this.color = newColor;
    }

    /**
     * Refuels the car with a given number of liters
     * @param {number} liters the number of liters to refuel
     */
    refuel(liters) {
        this.deposit += liters;
    }

    /**
     * Updates the deposit with the number of liters consumed based on given kms
     * @param {number} nkms the number of kilometers to drive 
     */
    drive(nkms) {
        const tempLiters = nkms * 5 / 100;
        if (tempLiters > this.deposit) {
            console.log('You cannot drive for that destination!');
        } else {
            this.deposit -= tempLiters;
            console.log('Good trip!');
        }
    }
}


// Creates 3 instances of the class Car
const car1 = new Car('Ford', '91-GH-15', 'verde', 40, 'Gasóleo');
const car2 = new Car('Opel', '23-AB-23', 'branco', 50, 'Gasolina');
const car3 = new Car('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo');

// Adds the 3 objects to an array
const cars = [];
cars.push(car1, car2, car3);


/**
 * Function that counts the number of cars of a given brand
 * @param {string} brand the name of the brand
 * @returns {number} the number of cars of a given brand 
 */
function getCarsNumberByBrand(brand) {
    let cont = 0
    for (const car of cars) {
        if (car.brand === brand) {
            cont++
        }
    }
    return cont
}
// Example call of getCarsNumberByBrand
console.log(getCarsNumberByBrand('Opel'));


/**
 * Function that sums all the liters available in the depositis of cars of with a given fuel type
 * @param {string} fuelType the name of the fuel type
 * @returns {number} the sum of the deposits of all the cars that have a given fuel type 
 */
function calcSumDepositByFuelType(fuelType) {
    let sum = 0;
    for (const car of cars) {
        if (car.fuelType === fuelType) {
            sum += car.deposit;
        }
    }
    return sum
}
// Example call of calcSumDepositByFuelType
console.log(calcSumDepositByFuelType('Gasolina'));
