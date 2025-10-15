// Day 3: Interactive Cart UI Functions
// TODO: Complete the functions below to create interactive cart interface

/**
 * Display cart items in the UI
 * Shows each item with quantity controls and remove buttons
 */
function displayCart() {
  // TODO: Get the cart-items container
  // TODO: Clear existing content
  // TODO: Check if cart is empty
  // If empty, show: '<p>Your cart is empty</p>' and call updateCartTotals(), then return
  // TODO: Loop through cart items with forEach
  // For each item, create HTML with:
  // - Item name and price
  // - Quantity controls (-, quantity, +)
  // - Item total (price × quantity)
  // - Remove button
  // Use this structure:
  /*
  const itemHTML = `
    <div class="cart-item">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p class="price">$${item.price.toFixed(2)} each</p>
      </div>
      <div class="quantity-controls">
        <button onclick="decreaseQuantity(${item.id})">-</button>
        <span class="quantity">${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>
      </div>
      <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="remove-btn" onclick="confirmRemove(${item.id})">Remove</button>
    </div>
  `;
  */
  // TODO: Add item HTML to container
  // TODO: Call updateCartTotals() at the end
}

/**
 * Increase quantity of specific cart item
 * @param {number} productId - ID of product to increase
 */
function increaseQuantity(productId) {
  // TODO: Find the cart item by ID using find()
  // TODO: Check if item exists
  // TODO: Increase quantity by 1
  // TODO: Refresh display with displayCart()
  // TODO: Log the change
}

/**
 * Decrease quantity of specific cart item
 * @param {number} productId - ID of product to decrease
 */
function decreaseQuantity(productId) {
  // TODO: Find the cart item by ID using find()
  // TODO: Check if item exists
  // TODO: If quantity > 1, decrease by 1 and refresh display
  // TODO: If quantity = 1, call confirmRemove() instead
  // TODO: Log the change
}

/**
 * Remove item from cart with confirmation
 * @param {number} productId - ID of product to remove
 */
function confirmRemove(productId) {
  // TODO: Find the cart item by ID
  // TODO: Check if item exists
  // TODO: Show confirmation dialog with item name
  // Use: confirm(`Remove ${item.name} from cart?`)
  // TODO: If confirmed, call removeFromCart() and refresh display
  // TODO: Log the removal
}

/**
 * Clear entire cart with confirmation
 */
function clearCart() {
  // TODO: Check if cart is empty (show alert if so)
  // TODO: Show confirmation with item count
  // Use: confirm(`Remove all ${cart.length} items from cart?`)
  // TODO: If confirmed, clear cart array (set cart.length = 0)
  // TODO: Refresh display and log the action
}

/**
 * Update and display cart totals (subtotal, tax, total)
 */
function updateCartTotals() {
  // TODO: Get the cart-totals container
  // TODO: Calculate subtotal using Day 1 calculateSubtotal()
  // TODO: Calculate tax (8% of subtotal)
  // TODO: Calculate total (subtotal + tax)
  // TODO: Create HTML for totals display
  // Use the structure provided in exercise instructions
  // TODO: Add totals HTML to container
}

/**
 * Proceed to checkout with order summary
 */
function proceedToCheckout() {
  // TODO: Check if cart is empty (show alert if so)
  // TODO: Calculate order totals using Day 1 functions
  // TODO: Get item count using getTotalItems()
  // TODO: Show order summary confirmation
  // Use the format provided in exercise instructions
  // TODO: If confirmed, show success message and log order data
}

// TODO: Add initialization code (see exercise instructions)
