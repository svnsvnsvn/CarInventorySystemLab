// Class representing a Car object
class Car {
    // Constructor to initialize car properties
    constructor(name, model, year, price) {
        this.name = name;    // Car's name
        this.model = model;  // Car's model
        this.year = year;    // Car's manufacturing year
        this.price = price;  // Car's price
    }

    // Method to calculate the depreciated price of the car based on its age
    calculatePrice(currentYear) {
        const age = currentYear - this.year; // Calculate the car's age
        const depreciationAmount = age * 500; // Depreciation of $500 per year
        const depreciatedPrice = this.price - depreciationAmount; // Calculate the depreciated price
        // Return the depreciated price, ensuring it doesn't go below 0
        return depreciatedPrice > 0 ? depreciatedPrice.toFixed(2) : 0;
    }

    // Method to return a string representing the car's details
    toString() {
        return `Car: ${this.name}, Model: ${this.model}, Year: ${this.year}, Price: $${this.price}`;
    }
}

// Class to manage a collection of cars
class CarManager {
    // Constructor to initialize an empty array of cars
    constructor() {
        this.cars = [];  // Array to store car objects
    }

    // Method to add a new car to the inventory
    addCar(car) {
        this.cars.push(car); // Add the car to the array
    }

    // Method to display all cars in the inventory
    displayCars() {
        const inventoryDiv = document.getElementById('carInventory'); // Get the display element
        inventoryDiv.innerHTML = ""; // Clear the current display

        // Check if there are any cars in the inventory
        if (this.cars.length === 0) {
            inventoryDiv.innerHTML = "<p>No cars in the inventory.</p>"; // Display message if empty
        } else {
            // Loop through each car and create a display element for it
            this.cars.forEach(car => {
                const carElement = document.createElement('div'); // Create a new div for the car
                carElement.innerHTML = `<p>Name: ${car.name}<br> Model: ${car.model} <br>Year: ${car.year}<br> Price: $${car.price}</p>`;
                inventoryDiv.appendChild(carElement); // Add the car's details to the page
            });
        }
    }

    // Method to calculate the total price of all cars after depreciation
    calculateTotalPrice(currentYear) {
        let totalPrice = 0;  // Initialize total price
        // Loop through each car and add its depreciated price to the total
        this.cars.forEach(car => {
            totalPrice += parseFloat(car.calculatePrice(currentYear)); // Convert string price to number and add
        });
        return totalPrice.toFixed(2); // Return the total price rounded to two decimal places
    }
}

// Instantiate the CarManager class to manage the inventory
const carManager = new CarManager();

// Function to handle the form submission when adding a new car
function handleFormSubmit() {
    const carName = document.getElementById('carName').value; // Get the car name input value
    const carModel = document.getElementById('carModel').value; // Get the car model input value
    const carYear = document.getElementById('carYear').value; // Get the car year input value
    const carPrice = document.getElementById('carPrice').value; // Get the car price input value

    // Validate the form data to ensure all fields are filled
    if (!carName || !carModel || !carYear || !carPrice) {
        alert("Please fill in all the fields."); // Alert user if any field is missing
        return; // Exit the function
    }

    // Create a new Car object with the form data
    const car = new Car(carName, carModel, parseInt(carYear), parseFloat(carPrice));

    // Add the new car to the car inventory
    carManager.addCar(car);

    // Update the display with the new car
    carManager.displayCars();

    // Clear the form after submission
    document.getElementById('carForm').reset();
}

// Function to calculate and display the total price of all cars after depreciation
function calculateTotalPrice() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const totalPrice = carManager.calculateTotalPrice(currentYear); // Calculate the total depreciated price
    const totalPriceElement = document.getElementById('totalPrice'); // Get the element to display total price

    // Update the display with the calculated total price
    totalPriceElement.innerHTML = `Total price of all cars after depreciation (as of ${currentYear}): <span class = 'dep_cost'>$${totalPrice}</span>`;
}
