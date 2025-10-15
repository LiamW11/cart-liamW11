# Day 3 Exercise: Interactive Cart UI

## Goal
Build interactive cart interface with quantity controls, remove functionality, and real-time total updates.
Build on Day 2 product catalog.

## Time
4 hours (4 sections × 60 minutes)

---

## Setup

### Create Day 3 Folder
Keep previous days separate. Create new folder for Day 3.

### Files Needed
```
day-3/
├── index.html       (copy from Day 2, then modify)
├── cart.js          (copy from Day 2)
├── products.js      (copy from Day 2)
├── catalog.js       (copy from Day 2)
├── cart-ui.js       (NEW - copy from day-3/starter/cart-ui.js)
```

### Setup Steps
1. Create `day-3` folder
2. Copy all files from your Day 2 folder into `day-3` folder
3. Copy `day-3/starter/cart-ui.js` into `day-3` folder (has TODO comments for cart UI)
4. Reference `day-3/starter/styles.css` for CSS examples

---

## Section 1: Cart Display (60 minutes)

### Task 1.1: Add Cart UI Structure (10 min)

Add to Day 3 `index.html` after the product section:

```html
<section id="cart-section">
  <h2>Shopping Cart</h2>
  <div id="cart-items"></div>
  <div id="cart-totals"></div>
  <button onclick="clearCart()" class="clear-btn">Clear Cart</button>
  <button onclick="proceedToCheckout()" class="checkout-btn">Checkout</button>
</section>
```

Add cart-ui.js to scripts at bottom (after other scripts):
```html
<script src="cart.js"></script>
<script src="products.js"></script>
<script src="catalog.js"></script>
<script src="cart-ui.js"></script>
```

### Task 1.2: Complete displayCart() (35 min)

In Day 3 `cart-ui.js`, find the `displayCart()` function with TODO comments.

Complete the function to:
1. Get the #cart-items container
2. Clear existing content
3. Check if cart is empty (show "Your cart is empty" message)
4. Loop through cart array with forEach
5. For each item, create HTML with:
   - Item name and price
   - Quantity controls (-, quantity, +)
   - Item total (price × quantity)
   - Remove button
6. Add HTML to container
7. Call updateCartTotals()

The function template with hints is in the file.

### Task 1.3: Add Cart UI Styling (10 min)

Add to your CSS file or `<style>` tag in Day 3 index.html:

```css
#cart-section {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  background: #f9f9f9;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  gap: 15px;
  background: white;
  margin-bottom: 10px;
  border-radius: 4px;
}

.item-info {
  flex: 1;
}

.item-info h4 {
  margin: 0 0 5px 0;
}

.price {
  color: #666;
  font-size: 14px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.quantity-controls button:hover {
  background: #f0f0f0;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: bold;
}

.item-total {
  font-weight: bold;
  min-width: 80px;
  text-align: right;
  color: #28a745;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.remove-btn:hover {
  background: #c82333;
}
```

### Task 1.4: Initialize Cart Display (5 min)

At bottom of cart-ui.js, add initialization code:
```javascript
window.addEventListener('load', () => {
  displayCart();
});
```

Test: Open Day 3 index.html. Add some products to cart. Should see cart items displayed below products.

Checkpoint: Cart items display with proper styling

---

## Section 2: Quantity Controls (60 minutes)

### Task 2.1: Complete increaseQuantity() (20 min)

In Day 3 `cart-ui.js`, find the `increaseQuantity()` function with TODO comments.

Complete the function to:
1. Find the cart item by ID using find()
2. Check if item exists
3. Increase quantity by 1
4. Call displayCart() to refresh UI
5. Log the change

### Task 2.2: Complete decreaseQuantity() (25 min)

Find the `decreaseQuantity()` function with TODO comments.

Complete the function to:
1. Find the cart item by ID using find()
2. Check if item exists
3. If quantity > 1: decrease by 1 and refresh display
4. If quantity = 1: call confirmRemove() instead
5. Log the change

Important: Don't let quantity go below 1. Use remove function instead.

### Task 2.3: Test Quantity Controls (10 min)

Test the +/- buttons:
1. Add products to cart
2. Click + button - quantity should increase
3. Click - button - quantity should decrease
4. When quantity reaches 1, - button should ask to remove

### Task 2.4: Enhanced Integration (5 min)

Update your Day 2 `handleAddToCart()` function in catalog.js to refresh cart UI:

```javascript
function handleAddToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  addToCart(product, 1);
  displayCart();        // Add this line (replaces Day 2 updateCartDisplay)
  
  alert(`Added ${product.name} to cart`);
}
```

Test: Add products from catalog. Cart UI should update immediately.

Checkpoint: Quantity controls work and integrate with product adding

---

## Section 3: Remove Functionality (60 minutes)

### Task 3.1: Complete confirmRemove() (20 min)

In Day 3 `cart-ui.js`, find the `confirmRemove()` function with TODO comments.

Complete the function to:
1. Find the cart item by ID
2. Check if item exists
3. Show confirmation dialog with item name
4. If confirmed: call removeFromCart() from Day 1
5. Refresh cart display
6. Log the removal

### Task 3.2: Complete clearCart() (20 min)

Find the `clearCart()` function with TODO comments.

Complete the function to:
1. Check if cart is empty (show message if so)
2. Show confirmation with item count
3. If confirmed: clear the cart array (set length to 0)
4. Refresh cart display
5. Log the action

### Task 3.3: Test Remove Functions (15 min)

Test removal:
1. Add several products to cart
2. Click "Remove" on individual items - should confirm and remove
3. Click "Clear Cart" - should confirm and empty cart
4. Try removing when cart is empty - should show appropriate message

### Task 3.4: Add Remove Feedback (5 min)

Optional: Add feedback element to show removal messages:

Add to HTML:
```html
<div id="remove-feedback" class="feedback"></div>
```

Add to CSS:
```css
.feedback {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #dc3545;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
}

.feedback.show {
  opacity: 1;
}
```

Checkpoint: Remove functions work with confirmation

---

## Section 4: Totals and Checkout (60 minutes)

### Task 4.1: Complete updateCartTotals() (25 min)

In Day 3 `cart-ui.js`, find the `updateCartTotals()` function with TODO comments.

Complete the function to:
1. Calculate subtotal using Day 1 calculateSubtotal()
2. Calculate tax (8% of subtotal)
3. Calculate total (subtotal + tax)
4. Display in #cart-totals container with structured HTML
5. Include subtotal, tax, and total rows

Use this HTML structure:
```javascript
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
```

### Task 4.2: Complete proceedToCheckout() (20 min)

Find the `proceedToCheckout()` function with TODO comments.

Complete the function to:
1. Check if cart is empty (show alert if so)
2. Calculate totals using Day 1 functions
3. Get item count using getTotalItems()
4. Show order summary with confirm dialog
5. If confirmed: show "checkout" message and log order data

### Task 4.3: Add Totals Styling (10 min)

Add CSS for totals section:

```css
.totals-section {
  border-top: 2px solid #333;
  padding-top: 15px;
  margin-top: 15px;
  background: white;
  padding: 15px;
  border-radius: 4px;
}

.totals-section div {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  padding: 5px 0;
}

.tax-row {
  color: #666;
  font-size: 14px;
}

.total-row {
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #ddd;
  padding-top: 10px !important;
  margin-top: 10px !important;
}

.checkout-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
}

.checkout-btn:hover {
  background: #218838;
}

.checkout-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.clear-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.clear-btn:hover {
  background: #5a6268;
}
```

### Task 4.4: Test Complete Workflow (5 min)

Test the complete flow:
1. Add products from catalog
2. Adjust quantities with +/- buttons
3. Remove individual items
4. Check totals update correctly
5. Try checkout with items
6. Try checkout with empty cart
7. Clear entire cart

Checkpoint: Complete cart UI with totals and checkout works

---

## Troubleshooting

### Cart items don't display
- Check cart-ui.js is loaded after other scripts in HTML
- Verify displayCart() is called on page load
- Check cart array has items (add products from catalog first)
- Look for console errors

### Quantity buttons don't work
- Verify functions are defined in cart-ui.js
- Check onclick attributes match function names exactly
- Ensure find() is finding the correct item by ID
- Test with console.log to see if functions are called

### Totals don't calculate
- Verify Day 1 functions (calculateSubtotal, getTotalItems) still work
- Check tax calculation (should be decimal: 0.08 not 8)
- Ensure updateCartTotals() is called after cart changes

### Remove doesn't work
- Check removeFromCart() function exists from Day 1
- Verify confirm() dialog is showing
- Test if cart array is actually being modified
- Check displayCart() is called after removal

### Styling looks wrong
- Verify CSS is loaded and applied
- Check for CSS syntax errors
- Test flexbox support in browser
- Use browser dev tools to inspect styles

---

## Extension Challenges

If finished early:

1. Add product images to cart items
2. Save/load cart from localStorage
3. Add discount codes functionality
4. Implement shipping calculator
5. Add cart item animations
6. Create cart summary popup
7. Add keyboard navigation (Tab, Enter)

---

## Completion Checklist

- [ ] Cart items display in organized list
- [ ] Quantity +/- buttons work correctly
- [ ] Remove individual items with confirmation
- [ ] Clear entire cart with confirmation
- [ ] Totals calculate and display correctly
- [ ] Checkout shows order summary
- [ ] UI updates immediately when cart changes
- [ ] Styling is clean and professional
- [ ] Integration with Day 2 catalog works
- [ ] All functions handle edge cases (empty cart, etc.)

