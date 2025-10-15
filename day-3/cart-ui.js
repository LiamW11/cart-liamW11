// Day 3: Interactive Cart UI Functions
// TODO: Complete the functions below to create interactive cart interface

const element = document.getElementById("cart-totals");

function displayCart() {
  const cartContainer = document.getElementById("cart-section");
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty</p>
    `;
    updateCartTotals();
    return;
  }

  cart.forEach((item) => {
    const itemHTML = `
    <div class="cart-item">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p class="price">$${item.price.toFixed(2)} each</p>
        <p class="tax">Tax: 8% $${(item.price * 0.08).toFixed(2)} each</p>
      </div>
      <div class="quantity-controls">
        <button class="quantity-button" onclick="decreaseQuantity(${
          item.id
        })">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-button" onclick="increaseQuantity(${
          item.id
        })">+</button>
      </div>
      <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="remove-btn" onclick="confirmRemove(${
        item.id
      })">Remove</button>
    </div>
  `;
    cartContainer.innerHTML += itemHTML;
  });
  updateCartTotals();
}

/**
 * Increase quantity of specific cart item
 * @param {number} productId - ID of product to increase
 */
function increaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);

  if (product) {
    product.quantity++;
    displayCart();
    console.log(`Increased quantity of ${item.name} by 1`);
  }
}

/**
 * Decrease quantity of specific cart item
 * @param {number} productId - ID of product to decrease
 */
function decreaseQuantity(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    if (product.quantity > 1) {
      product.quantity--;
      displayCart();
      console.log(`Increased quantity of ${item.name} by 1`);
    } else if (product.quantity === 1) {
      confirmRemove(productId);
    }
  }
}

/**
 * Remove item from cart with confirmation
 * @param {number} productId - ID of product to remove
 */
function confirmRemove(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    if (window.confirm(`Remove ${product.name} from cart?`)) {
      removeFromCart(productId);
      console.log(`Removed ${product.name} from cart`);
    }
  }
}

function clearCart() {
  if (cart.length === 0) {
    alert("Cart is already empty!");
    return;
  }
  if (window.confirm(`Remove all items from cart?`)) {
    cart = [];
    displayCart();
    console.log("Cleared Cart");
  }
}

function updateCartTotals() {
  let subtotal = calculateSubtotal();
  let tax = subtotal * 0.08;
  let total = tax + subtotal;
  const totalsHTML = `
  <div class="totals-section">
    <div class="subtotal-row">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="tax-row">
      <span>Tax (8%):</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="total-row">
      <span>Total:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  </div>
`;
  element.innerHTML += totalsHTML;
}

function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let subtotal = calculateSubtotal();
  let tax = subtotal * 0.08;
  let total = tax + subtotal;
  let totalItems = getTotalItems();
  if (
    window.confirm(
      `Checkout? 
      Amount of items: ${totalItems} 
      Price of items: ${subtotal.toFixed(2)}$ 
      Tax: ${tax.toFixed(2)}$ 
      Amount to pay: ${total.toFixed(2)}$
      `
    )
  )
    cart = [];
  displayCart();
  {
    alert("Purchase successful!");
    console.log(
      `Amount of items: ${totalItems}, Price of items: ${subtotal.toFixed(
        2
      )}$, Tax: ${tax.toFixed(2)}$, Amount to pay: ${total.toFixed(2)}$`
    );
  }
}

window.addEventListener("load", () => {
  displayCart();
});
