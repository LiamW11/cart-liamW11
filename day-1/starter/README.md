# Day 1 Starter Files

## Quick Start

1. **Open `cart.js`** - This is your main work file
2. **Follow the TODOs** - They're organized by exercise parts
3. **Open `index.html` in browser** - See tests run automatically
4. **Check console** - Tests will FAIL until you implement functions

## Important: Tests Will Fail at First!

The `test-cart.js` file contains REAL tests that check your code actually works. When you first open `index.html`, you'll see many FAILED tests - this is expected! 

**WHERE TO SEE TEST RESULTS:**
- **Press F12** to open Browser DevTools
- **Look at the Console tab**
- You'll see ✓ PASS and ✗ FAIL messages there

The dark console box on the page shows basic logging, but the real test feedback is in the DevTools console (F12).

As you implement each function in `cart.js`, refresh the page and watch more tests pass in the DevTools console. This gives you immediate feedback on your progress.

### Test-Driven Development
1. See which test is failing
2. Implement the function it's testing
3. Refresh browser
4. Watch test turn from ✗ FAIL to ✓ PASS
5. Move to next function

This is how professional developers work!

## Files

- **`cart.js`** - Your work file with guided TODOs
- **`test-cart.js`** - Automated tests (runs in browser)
- **`index.html`** - Testing interface with buttons
- **`README.md`** - This file

## Workflow

### 1. Read the Exercise Part
Look at the exercise.md for the current part (Part 1, 2, 3, etc.)

### 2. Find the TODOs in cart.js
Each part has clear TODO comments with steps

### 3. Implement the Function
Follow the hints and examples in the comments

### 4. Test Your Code
- Open index.html in browser
- Check console for test results
- Use test buttons to try features

### 5. Move to Next Part
Once tests pass, move to next part

## Testing

### Automated Tests
Open `index.html` - tests run automatically in console

### Manual Testing
Use browser console:
```javascript
addToCart(products.laptop);
addToCart(products.mouse, 2);
displayCart();
```

### Interactive Buttons
Click buttons in the interface to test features

## Parts Timeline

- **Part 1** (45 min): Add to cart
- **Part 2** (45 min): Remove and update  
- **Part 3** (50 min): Calculations
- **Part 4** (40 min): Stock management
- **Part 5** (60 min): Choose one feature

## Tips

- Read the TODO comments carefully
- Test after implementing each function
- Use console.log() to debug
- Check test output for errors
- Reference the lesson examples


## Common Commands

```javascript
// Add item
addToCart(products.laptop);
addToCart(products.mouse, 2);

// Update
increaseQuantity(1);
decreaseQuantity(2);
updateQuantity(1, 5);

// Remove
removeFromCart(1);

// View
displayCart();
console.log(getCartSummary());

// Calculate
console.log(calculateSubtotal());
console.log(getTotalItems());
```
