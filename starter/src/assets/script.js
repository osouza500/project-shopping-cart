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

let totalPaid = 0;

let cart = [];


function addProductToCart(productId) {
  let addProduct = products.find((product) => product.productId === productId);
  if (cart.includes(addProduct) === true) {
    addProduct.quantity += 1;
  } else {
    cart.push(addProduct);
    addProduct.quantity += 1;
  }
}


function increaseQuantity(productId) {
  let increaseProduct = products.find((product) => product.productId === productId);
  increaseProduct.quantity += 1;
}


function decreaseQuantity(productId) {
  let decreaseProduct = products.find((product) => product.productId === productId);
  if (decreaseProduct.quantity === 1) {
      removeProductFromCart(decreaseProduct.productId)
  } else {
    decreaseProduct.quantity -= 1;
  }
} 


function removeProductFromCart(productId) {
  let removeProduct = products.find((product) => product.productId === productId);
  let index = cart.indexOf(removeProduct)
  removeProduct.quantity = 0;
  cart.splice(index, 1);
}


function cartTotal() {
  sum = 0
  for (i = 0; i < cart.length; i++) {
    sum += cart[i].quantity * cart[i].price;
  }
  return sum
}


function emptyCart() {
  for (i = 0; i < cart.length; i++) {
    cart[i].quantity = 0
    cart.splice(i, 1)
  }
}


function pay(amount) {
  totalPaid += amount;
  return totalPaid - cartTotal();
}


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
