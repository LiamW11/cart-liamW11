// ===== SHOPPING CART - Day 1 Exercise =====
// Follow the TODOs in order - they match the exercise parts
// Run test-cart.js to verify your work after each part

// Sample products for testing
const products = {
  laptop: { id: 1, name: "Laptop", price: 999, stock: 10 },
  mouse: { id: 2, name: "Wireless Mouse", price: 29, stock: 25 },
  keyboard: { id: 3, name: "Mechanical Keyboard", price: 79, stock: 15 },
  monitor: { id: 4, name: '27" Monitor', price: 299, stock: 8 },
  headphones: { id: 5, name: "Headphones", price: 149, stock: 20 },
};

// ===== STATE =====
let cart = []; // Your shopping cart - starts empty
let discountCode = null;

// ===== PART 1: ADD TO CART (45 minutes) =====

/**
 * Add an item to the cart or update quantity if it already exists
 * @param {Object} product - Product to add {id, name, price}
 * @param {number} quantity - How many to add (default: 1)
 */
function addToCart(product, quantity = 1) {
  if (product.stock !== undefined) {
    const currentInCart = cart.find((item) => item.id === product.id);
    const currentQuantity = currentInCart ? currentInCart.quantity : 0;

    if (currentQuantity + quantity > product.stock) {
      console.log(
        `Cannot add ${quantity}x ${product.name}. Only ${
          product.stock - currentQuantity
        } available.`
      );
      return;
    }
  }

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
  displayCart();
}

// ===== PART 2: REMOVE AND UPDATE (45 minutes) =====

/**
 * Remove an item from the cart
 * @param {number} itemId - ID of item to remove
 */
function removeFromCart(itemId) {
  const itemToRemove = cart.find((x) => x.id == itemId);

  if (!itemToRemove) {
    console.log("Product ID missing");
    return;
  }

  cart = cart.filter((x) => x.id !== itemId);
  displayCart();
}

/**
 * Update the quantity of a cart item
 * @param {number} itemId - ID of item to update
 * @param {number} newQuantity - New quantity value
 */
function updateQuantity(itemId, newQuantity) {
  if (newQuantity === 0) {
    removeFromCart(itemId);
    return;
  }

  const itemToUpdate = cart.find((x) => x.id === itemId);
  if (!itemToUpdate) {
    console.log("Product ID missing");
    return;
  } else {
    itemToUpdate.quantity = newQuantity;
    displayCart();
  }
}

/**
 * Increase quantity by 1
 * @param {number} itemId
 */
function increaseQuantity(itemId) {
  const itemToUpdate = cart.find((x) => x.id === itemId);
  if (itemToUpdate) {
    updateQuantity(itemId, itemToUpdate.quantity + 1);
  } else return;
}

/**
 * Decrease quantity by 1
 * @param {number} itemId
 */
function decreaseQuantity(itemId) {
  const itemToUpdate = cart.find((x) => x.id === itemId);
  if (itemToUpdate) {
    updateQuantity(itemId, itemToUpdate.quantity - 1);
  } else return;
}

// ===== PART 3: CALCULATIONS (50 minutes) =====

/**
 * Calculate the total cost of all items in cart
 * @returns {number} Total cost
 */
function calculateSubtotal() {
  if (discountCode !== null) {
    return cart.reduce((total, item) => {
      return (
        (1 - discountCode.percentage) * (total + item.price * item.quantity)
      );
    }, 0);
  } else {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
}

/**
 * Calculate total number of items in cart
 * @returns {number} Total item count
 */
function getTotalItems() {
  return cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}

/**
 * Calculate final total with tax
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.25 for 25%)
 * @returns {number} Total with tax
 */
function calculateTotal(taxRate = 0.25) {
  const subtotal = calculateSubtotal();
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

/**
 * Get cart summary with all totals
 * @returns {Object} Cart summary
 */
function getCartSummary() {
  const itemCount = getTotalItems();
  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.25;
  const total = subtotal + tax;
  //
  // 2. Return an object with formatted values:
  return {
    itemCount: itemCount,
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
  };
}

/**
 * Display cart contents in console
 */
function displayCart() {
  console.clear();
  console.log("=== SHOPPING CART ===");
  if (!cart) {
    console.log("Cart is empty");
    return;
  }
  if (!discountCode) {
    console.log("No discount applied");
  } else {
    console.log(discountCode);
  }
  cart.forEach((product) => {
    console.log(product.name);
    console.log(
      `Price: ${product.price} x ${product.quantity} = ${
        product.price * product.quantity
      } $`
    );
  });
  console.log(`Total items: ${getTotalItems()}`);
  console.log(`Subtotal: ${calculateSubtotal()}`);
  if (discountCode) {
    console.log(`Discount amount: ${100 * discountCode.percentage}%`);
  }
  console.log(`Tax (25%): ${calculateSubtotal() * 0.25}`);
  console.log(`Total: ${calculateTotal()}`);
  console.log("Current cart:", cart);
}

function applyDiscount(code) {
  const codes = {
    SAVE10: { code: "SAVE10", percentage: 0.1 },
    SAVE20: { code: "SAVE20", percentage: 0.2 },
  };

  if (codes[code]) {
    discountCode = codes[code];
    console.log(`Applied ${code}`);
    console.log(
      `Current discount code ${discountCode.code}, Current discount: ${
        100 * discountCode.percentage
      }%`
    );
  } else {
    console.log("Invalid code");
  }
}

// ===== INITIAL MESSAGE =====
console.log("✓ Cart system loaded!");
console.log("Available products:", products);
console.log("\nFollow the TODOs in cart.js");
console.log("Run tests by opening index.html in browser");
console.log("Or test manually: addToCart(products.laptop)\n");
