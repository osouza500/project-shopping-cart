const cherry = {
  name: 'Carton of cherries',
  price: 4,
  quantity: 0,
  productId: 100,
  image: 'images/cherry.jpg'
}

const strawberry = {
  name: 'Carton of strawberries',
  price: 5, 
  quantity: 0,
  productId: 101,
  image: 'images/strawberry.jpg'
}

const orange = {
  name: 'Bag of oranges',
  price: 10,
  quantity: 0,
  productId: 102,
  image: 'images/orange.jpg'
}

const products = [cherry, strawberry, orange];

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const addProduct = products.find((product) => product.productId === productId);
  if (cart.includes(addProduct) === true) {
    addProduct.quantity += 1;
  } else {
    cart.push(addProduct);
    addProduct.quantity += 1;
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const increaseProduct = products.find((product) => product.productId === productId);
  increaseProduct.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity() {
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart() {
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay() {
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
