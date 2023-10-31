function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please select some items.");
    } else {
      console.log("Your sandwich includes:");
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
      console.log("Enjoy your sandwich!");
    }
  }
  
  // Call the function with different numbers of arguments
  orderSandwich("Bread", "Turkey", "Lettuce", "Tomato", "Mayonnaise");
  orderSandwich("Bread", "Peanut Butter", "Jelly");
  orderSandwich(); // Empty sandwich
  