// Day 3: Interactive Cart UI Functions
// TODO: Complete the functions below to create interactive cart interface

const element = document.getElementById("cart-totals");
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  let totalItems = 0;

  function displayCart(){
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

  if (product.quantity < getProductStock(productId)) {
    product.quantity++;
    displayCart();
    console.log(`Increased quantity of ${product.name} by 1`);
  } else {
    alert("Stock limit reached!");
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

function getProductStock(productId) {
  const product = products.find((p) => p.id === productId);
  return product ? product.stock : 0;
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
      displayCart();
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
  } else{
  showCheckoutSummary();
  }
}

function showCheckoutSummary() {
  document.getElementById("hiddenDiv").style.display = "block";
  document.getElementById("overlay").style.display = "block";

  subtotal = calculateSubtotal();
  tax = subtotal * 0.08;
  total = tax + subtotal;
  totalItems = getTotalItems();

  document.getElementById("summary-items").innerText = `Total items: ${totalItems}`;
  document.getElementById("summary-subtotal").innerText = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById("summary-tax").innerText = `Tax (8%): $${tax.toFixed(2)}`;
  document.getElementById("summary-total").innerText = `Total: $${total.toFixed(2)}`;
}

function hideCheckoutSummary() {
  document.getElementById("hiddenDiv").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function confirmCheckout(){
   const purchase = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    cart: cart
  };

  localStorage.setItem(`Purchase ID:${Date.now()}`, JSON.stringify(purchase));
  cart = [];
  displayCart();
  hideCheckoutSummary();
}

function viewShoppingHistory() {
  const cartContainer = document.getElementById("cart-section");
  cartContainer.innerHTML = "<h2>Purchase History</h2>";
  
  // Samla alla purchases i en array för att kunna sortera
  const purchases = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('Purchase ID:')) {
      const value = JSON.parse(localStorage.getItem(key));
        purchases.push({ key, data: value });
    }
  }
  
  // Sortera så nyast kommer först (Purchase#3, #2, #1)
  purchases.sort((a, b) => {
    const numA = parseInt(a.key.replace('Purchase ID:', ''));
    const numB = parseInt(b.key.replace('Purchase ID:', ''));
    return numB - numA;
  });
  
  // Visa varje purchase
  purchases.forEach(purchase => {
    const postDiv = document.createElement('div');
    postDiv.className = 'history-post';
    
    let cartItemsHTML = "";
    if (purchase.data.cart && purchase.data.cart.length > 0) {
      cartItemsHTML = purchase.data.cart.map(item => `
        <div class="cart-item">
          <strong>${item.name}</strong> 
          <p>${item.price}$</p> 
          <p>(Quantity: ${item.quantity})</p>
          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}$</p>
          <p>Total (8% tax): ${((item.price * 1.08) * item.quantity).toFixed(2)}$</p>
        </div>
      `).join('');
    }
    
    postDiv.innerHTML = `
      <h3>${purchase.key}</h3>
      ${cartItemsHTML}
      <hr>
    `;
    
    cartContainer.appendChild(postDiv);
  });
}

window.addEventListener("load", () => {
  displayCart();
});
