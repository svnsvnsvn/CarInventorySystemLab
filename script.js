class Car {
    constructor(name, model, year, price) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    calculatePrice(currentYear) {
        const age = currentYear - this.year;
        const depreciationAmount = age * 500; // $500 per year depreciation
        const depreciatedPrice = this.price - depreciationAmount;
        return depreciatedPrice > 0 ? depreciatedPrice.toFixed(2) : 0;
    }

    toString() {
        return `Car: ${this.name}, Model: ${this.model}, Year: ${this.year}, Price: $${this.price}`;
    }
}

class CarManager {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    displayCars() {
        const inventoryDiv = document.getElementById('carInventory');
        inventoryDiv.innerHTML = ""; // Clear current display

        if (this.cars.length === 0) {
            inventoryDiv.innerHTML = "<p>No cars in the inventory.</p>";
        }
        else {
            this.cars.forEach(car => {
                const carElement = document.createElement('div');
                carElement.innerHTML = `<p>Name: ${car.name}, Model: ${car.model}, Year: ${car.year}, Price: $${car.price}</p>`;
                inventoryDiv.appendChild(carElement);
            });
        }
    }

    calculateTotalPrice(currentYear) {
        let totalPrice = 0;
        this.cars.forEach(car => {
            totalPrice += parseFloat(car.calculatePrice(currentYear));
        });
        return totalPrice.toFixed(2);
    }
}

const carManager = new CarManager();

function handleFormSubmit() {
    const carName = document.getElementById('carName').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const carPrice = document.getElementById('carPrice').value;

    // Validate the form data
    if (!carName || !carModel || !carYear || !carPrice) {
        alert("Please fill in all the fields.");
        return;
    }

    const car = new Car(carName, carModel, parseInt(carYear), parseFloat(carPrice));
    carManager.addCar(car);

    carManager.displayCars();

    // Clear the form after submission
    document.getElementById('carForm').reset();
}

function calculateTotalPrice() {
    const currentYear = new Date().getFullYear();
    const totalPrice = carManager.calculateTotalPrice(currentYear);

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerHTML = `Total price of all cars after depreciation (as of ${currentYear}): $${totalPrice}`;
}
