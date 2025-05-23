const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 },
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    // Bug: <= should be <
    total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}
//Validation Added
function applyDiscount(total, discountRate) {
  if (
    typeof discountRate !== "number" ||
    discountRate < 0 ||
    discountRate > 1
  ) {
    throw new Error("Invalid discount rate. Must be number between 0 and 1");
  }
  return total - total * discountRate;
}

//If and else  statement added for validtion

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach((item) => {
    receipt += `${item.name}: $${item.price}\n`;
  });

  if (typeof total !== "number" || isNaN(total))
   else{ receipt += `Total: $${total.toFixed(2)}`};
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); 
const receipt = generateReceipt(cart, discountedTotal);
const totalElem.document.getElementById("total");
if(totalElem){
  recieptElem.textContent=reciept;
};

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
