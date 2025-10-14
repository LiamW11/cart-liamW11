// ===== SIMPLE CART TESTS =====
// These are REAL tests - they check your code actually works!
// When you first run this, most tests will FAIL - that's normal!
//
// As you implement functions in cart.js, refresh the browser
// and watch the tests turn from ✗ FAIL to ✓ PASS
//
// This is Test-Driven Development (TDD) - a professional practice
// You'll learn more about testing frameworks like Jest on Day 3
//
// EXPECTED FLOW:
// 1. Open index.html → See many ✗ FAIL messages
// 2. Implement addToCart() in cart.js
// 3. Refresh browser → Part 1 tests now ✓ PASS
// 4. Implement removeFromCart() and updateQuantity()
// 5. Refresh browser → Part 2 tests now ✓ PASS
// 6. Continue until all tests pass!

console.log("Starting Cart Tests...\n");
console.log("⚠ Tests will FAIL until you implement the functions!\n");

// ===== TEST SETUP =====
let testsPassed = 0;
let testsFailed = 0;

function test(description, testFunction) {
  try {
    testFunction();
    console.log(`✓ PASS: ${description}`);
    testsPassed++;
  } catch (error) {
    console.log(`✗ FAIL: ${description}`);
    console.log(`  Error: ${error.message}`);
    testsFailed++;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(
      `${
        message || "Values not equal"
      }\n  Expected: ${expected}\n  Got: ${actual}`
    );
  }
}

function resetCart() {
  cart = [];
}

// ===== PART 1 TESTS: Add to Cart =====
console.log("=== PART 1: Add to Cart Tests ===\n");

test("Cart starts empty", () => {
  resetCart();
  assertEqual(cart.length, 0, "Cart should be empty");
});

test("Can add item to cart", () => {
  resetCart();
  addToCart(products.laptop, 1);
  assertEqual(cart.length, 1, "Cart should have 1 item");
  assertEqual(cart[0].name, "Laptop", "Item name should be Laptop");
  assertEqual(cart[0].quantity, 1, "Quantity should be 1");
});

test("Adding duplicate item increases quantity", () => {
  resetCart();
  addToCart(products.laptop, 1);
  addToCart(products.laptop, 1);
  assertEqual(cart.length, 1, "Cart should still have 1 item");
  assertEqual(cart[0].quantity, 2, "Quantity should be 2");
});

test("Can add multiple different items", () => {
  resetCart();
  addToCart(products.laptop, 1);
  addToCart(products.mouse, 2);
  assertEqual(cart.length, 2, "Cart should have 2 items");
});

console.log("\n");

// ===== PART 2 TESTS: Remove and Update =====
console.log("=== PART 2: Remove and Update Tests ===\n");

test("Can remove item from cart", () => {
  resetCart();
  addToCart(products.laptop, 1);
  removeFromCart(1);
  assertEqual(cart.length, 0, "Cart should be empty after removal");
});

test("Can update item quantity", () => {
  resetCart();
  addToCart(products.mouse, 2);
  updateQuantity(2, 5);
  assertEqual(cart[0].quantity, 5, "Quantity should be updated to 5");
});

test("Updating quantity to 0 removes item", () => {
  resetCart();
  addToCart(products.keyboard, 1);
  updateQuantity(3, 0);
  assertEqual(cart.length, 0, "Cart should be empty when quantity set to 0");
});

test("Can increase quantity", () => {
  resetCart();
  addToCart(products.monitor, 1);
  increaseQuantity(4);
  assertEqual(cart[0].quantity, 2, "Quantity should increase to 2");
});

test("Can decrease quantity", () => {
  resetCart();
  addToCart(products.headphones, 3);
  decreaseQuantity(5);
  assertEqual(cart[0].quantity, 2, "Quantity should decrease to 2");
});

console.log("\n");

// ===== PART 3 TESTS: Calculations =====
console.log("=== PART 3: Calculations Tests ===\n");

test("Calculate subtotal correctly", () => {
  resetCart();
  addToCart(products.laptop, 1); // $999
  addToCart(products.mouse, 2); // $58
  const subtotal = calculateSubtotal();
  assertEqual(subtotal, 1057, "Subtotal should be $1057");
});

test("Count total items correctly", () => {
  resetCart();
  addToCart(products.laptop, 1);
  addToCart(products.mouse, 2);
  addToCart(products.keyboard, 1);
  const count = getTotalItems();
  assertEqual(count, 4, "Total items should be 4");
});

test("Calculate total with tax correctly", () => {
  resetCart();
  addToCart({ id: 99, name: "Test", price: 100 }, 1);
  const total = calculateTotal(0.25);
  assertEqual(total, 125, "Total should be $125 (100 + 25% tax)");
});

test("Get cart summary returns correct object", () => {
  resetCart();
  addToCart({ id: 99, name: "Test", price: 100 }, 2);
  const summary = getCartSummary();
  assert(summary.itemCount !== undefined, "Summary should have itemCount");
  assert(summary.subtotal !== undefined, "Summary should have subtotal");
  assert(summary.tax !== undefined, "Summary should have tax");
  assert(summary.total !== undefined, "Summary should have total");
  assertEqual(summary.itemCount, 2, "Item count should be 2");
  assertEqual(summary.subtotal, "200.00", "Subtotal should be 200.00");
});

console.log("\n");

// ===== PART 4 TESTS: Stock Management =====
console.log("=== PART 4: Stock Management Tests ===\n");

test("Cannot add more than available stock", () => {
  resetCart();
  const limited = { id: 99, name: "Limited", price: 50, stock: 2 };
  addToCart(limited, 2); // OK
  addToCart(limited, 1); // Should fail
  assertEqual(cart[0].quantity, 2, "Quantity should stay at 2 (stock limit)");
});

test("Can add up to stock limit", () => {
  resetCart();
  const limited = { id: 99, name: "Limited", price: 50, stock: 5 };
  addToCart(limited, 3);
  addToCart(limited, 2); // Total = 5 (should work)
  assertEqual(cart[0].quantity, 5, "Can add up to stock limit");
});

console.log("\n");

// ===== TEST SUMMARY =====
console.log("================================");
console.log("TEST SUMMARY");
console.log("================================");
console.log(`✓ Passed: ${testsPassed}`);
console.log(`✗ Failed: ${testsFailed}`);
console.log(`Total: ${testsPassed + testsFailed}`);
console.log("================================\n");

if (testsFailed === 0) {
  console.log("🎉 All tests passed! Great work!");
  console.log("Move on to the next part of the exercise.\n");
} else {
  console.log("⚠ Some tests failed. Check the errors above.");
  console.log("Fix the issues and run the tests again.\n");
}

// Helper to run tests again
console.log("To run tests again: runTests()");
function runTests() {
  testsPassed = 0;
  testsFailed = 0;
  // Re-run by reloading the page or copy-paste test functions
  console.log("Reload the page to run tests again.");
}
