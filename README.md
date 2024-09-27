## Car Inventory Management System

This project is a simple **Car Inventory Management System** built using **HTML**, **CSS**, and **JavaScript**. It allows users to add cars to an inventory, view the cars in the inventory, and calculate the total price of all cars after accounting for depreciation. The interface is designed with a sleek night-mode theme for a modern and minimalistic look.

### Features:
- **Add Cars**: Users can input car details, including the name, model, year, and price, which are then added to the inventory.
- **View Inventory**: A dynamically updated list of cars displays the inventory with each car’s details.
- **Calculate Depreciation**: A button allows users to calculate the total price of all cars in the inventory after depreciation, assuming $500 depreciation per year with a cap of 30 years.
- **Responsive Design**: The layout is responsive and adjusts for various screen sizes, maintaining the integrity of the night-mode design.

---

### Project Structure:
- **index.html**: The main HTML file that contains the structure of the form, inventory list, and total price display.
- **style.css**: The CSS file that defines the night-mode theme and styles for the form, inventory, and total price sections【75†source】【76†source】.
- **script.js**: The JavaScript file that contains the logic for adding cars to the inventory and calculating the total price after depreciation.

---

### Instructions to Run the Project:

1. **Clone the repository** or download the files.
   
2. **Open `index.html`** in any modern web browser.

3. **Interacting with the system**:
   - **Add a Car**: Enter the car's name, model, year, and price into the form, and click the "Add Car" button.
   - **View Inventory**: The car will automatically appear in the inventory section.
   - **Calculate Depreciation**: Click the "Calculate Total Price After Depreciation" button to view the total price of all cars in the inventory after depreciation.

4. **Dependencies**: 
   - The system uses **Google Fonts** for styling the font ("Racing Sans One")【75†source】【76†source】.
   - No additional setup or dependencies are required; everything runs natively in the browser.

---

### System Layout Overview:
- **First Section (Car Form)**: Form to add new cars. 
- **Second Section (Car Inventory)**: Displays the list of cars added by the user. 
- **Third Section (Total Price After Depreciation:)**: Section to calculate and display the total price of all cars after depreciation.

---

### Example of a Car Entry:
- **Name**: Porsche
- **Model**: Macan T
- **Year**: 2022
- **Price**: $62,000

After adding, this car will appear in the inventory, and the depreciation will be calculated based on the current year (2024, for example).

---

### Notes:
- The depreciation is calculated at $500 per year.
- The system is entirely front-end and does not require any backend services or databases.

