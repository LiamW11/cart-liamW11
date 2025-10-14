const cartItem = {
  id: 1,
  name: "Product name",
  price: 100,
  quantity: 1,
};

let cart = [
  { id: 1, name: "Mouse", price: 100, quantity: 1 },
  { id: 2, name: "Keyboard", price: 200, quantity: 1 },
];

function addToCart(product, quantity = 1) {
  //finns produkten redan i min cart?
  //om den finns, då ska vi öka antalet med +1

  const existingItem = cart.find((x) => x.id == product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }
}

function removeFromCart(productId) {
  const itemToRemove = cart.find((x) => x.id == productId);

  if (!itemToRemove) {
    console.log("Product ID missing");
    return;
  }

  cart = cart.filter((x) => x.id !== productId);
}

function removeFromCart2(productId) {
  const index = cart.findIndex((x) => x.id == productId);
  //om ingen träff blir index -1

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function calculateTotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
