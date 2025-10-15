const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 100,
    category: "it",
  },
  {
    id: 2,
    name: "Mouse",
    price: 50,
    category: "it",
  },
  {
    id: 3,
    name: "Chair",
    price: 500,
    category: "furniture",
  },
];

let cart = [];

function addToCart(product, quantity = 1) {
  const existingProduct = cart.find((p) => p.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }
}

function displayProducts(productArray = products) {
  const element = document.getElementById("cart-section");
  element.innerHTML = "";

  productArray.forEach((p) => {
    const productListHTML = `
            <h3>${p.name}</h3>
            <p>${p.price.toFixed(2)} kr</p>
        `;
    element.innerHTML += productListHTML;
  });
}

function displayCart() {
  const cartContainer = document.getElementById("cart-section");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    return;
  }

  cart.forEach((p) => {
    const productHTML = `
        <h4>${p.name} x ${p.quantity}</h4>
        <div>
            <button onclick="">-</button>
            <span>${p.quantity}</span>
            <button onclick="increaseQuantity(${p.id})">+</button>
        </div>
        `;
    cartContainer.innerHTML += productHTML;
  });
}

function increaseQuantity(productId) {
  const product = cart.find((p) => p.id === productId);

  if (product) {
    product.quantity++;
    displayCart();
  }
}
