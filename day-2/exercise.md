# Day 2 Exercise: Product Catalog

## Goal
Build product display with search, filter, and sort functionality.
Connect to Day 1 cart.

## Time
4 hours (4 sections × 60 minutes)

---

## Setup

### Create Day 2 Folder
Keep Day 1 separate. Create new folder for Day 2.

### Files Needed
```
day-2/
├── index.html       (copy from Day 1, then modify)
├── cart.js          (copy from your Day 1 solution)
├── products.js      (copy from starter/products.js)
└── catalog.js       (copy from starter/catalog.js - has TODOs)
```

### Setup Steps
1. Create `day-2` folder
2. Copy your working `cart.js` from Day 1 into `day-2` folder
3. Copy your `index.html` from Day 1 into `day-2` folder
4. Copy `starter/products.js` into `day-2` folder
5. Copy `starter/catalog.js` into `day-2` folder (has TODO comments to guide you)
6. Reference `starter/styles.css` for CSS examples

---

## Section 1: Display Products (60 minutes)

### Task 1.1: Review Product Data (5 min)

Open `products.js` and review the product array structure:
- 12 products total
- Each has: id, name, price, category, image, stock, description
- Categories: electronics, clothing, home, office

### Task 1.2: Update HTML Structure (10 min)

In your Day 2 `index.html`, add product display section:

```html
<h2>Products</h2>
<div id="product-grid"></div>
```

Update scripts at bottom of `<body>` to load all files (in this order):
```html
<script src="cart.js"></script>
<script src="products.js"></script>
<script src="catalog.js"></script>
```

Important: Order matters! cart.js first (Day 1 functions), then products (data), then catalog (new functions).

### Task 1.3: Complete displayProducts() (30 min)

In your Day 2 `catalog.js`, find the `displayProducts()` function with TODO comments.

Complete the function to:
1. Get the #product-grid element
2. Clear its innerHTML
3. Check if productsToShow is empty (show "No products found" message)
4. Loop through productsToShow with forEach
5. For each product, create HTML string with product card
6. Add HTML to container

Hints in the file guide you through each step.

### Task 1.4: Initialize Display (5 min)

At bottom of catalog.js, uncomment:
```javascript
displayProducts(products);
```

Open Day 2 index.html in browser. Should see 12 products.

### Task 1.5: Add Basic CSS (10 min)

In Day 2 folder, add to your CSS file or `<style>` tag in index.html:

```css
#product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: green;
}

.stock {
  color: #666;
  font-size: 14px;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
```

Optional: Copy and adapt CSS from `starter/styles.css` for more complete styling.

Checkpoint: Products display in grid with proper styling

---

## Section 2: Filter by Category (60 minutes)

### Task 2.1: Add Filter Buttons (10 min)

Add to Day 2 `index.html` above product grid:

```html
<div>
  <button onclick="filterByCategory('all')">All</button>
  <button onclick="filterByCategory('electronics')">Electronics</button>
  <button onclick="filterByCategory('clothing')">Clothing</button>
  <button onclick="filterByCategory('home')">Home</button>
  <button onclick="filterByCategory('office')">Office</button>
</div>
```

### Task 2.2: Complete filterByCategory() (35 min)

In `catalog.js`, find the `filterByCategory()` function with TODO comments.

Uncomment and complete the code to:
- Check if category is 'all'
- If 'all', display all products
- Otherwise, use filter() to get matching products
- Display filtered results

The function template is already in the file with hints.

### Task 2.3: Test Filters (15 min)

Click each filter button. Verify:
- All shows 12 products
- Electronics shows 3 products (Gaming Mouse, Headphones, Keyboard)
- Clothing shows 3 products (T-Shirt, Backpack, Sneakers)
- Home shows 3 products (Coffee Mug, Desk Lamp, Plant Pot)
- Office shows 3 products (Notebook, Pen Set, Desk Organizer)

Checkpoint: Filtering works for all categories

---

## Section 3: Search Products (60 minutes)

### Task 3.1: Add Search Input (10 min)

Add to Day 2 `index.html` above filters:

```html
<input 
  type="text" 
  placeholder="Search products..."
  oninput="searchProducts(this.value)"
>
```

### Task 3.2: Complete searchProducts() (35 min)

In `catalog.js`, find the `searchProducts()` function with TODO comments.

Uncomment and complete the code to:
- Convert search text to lowercase
- Filter products where name includes search text (case-insensitive)
- Display results

Remember: Use toLowerCase() on BOTH the search text and product name.

The empty results handling is already in displayProducts() if you completed it in Section 1.

### Task 3.3: Test Search (15 min)

Type in search box:
- "mouse" should find Gaming Mouse
- "shirt" should find T-Shirt
- "desk" should find Desk Lamp and Desk Organizer
- "xyz" should show "No products found"

Test case-insensitivity:
- "MOUSE" should also find Gaming Mouse
- "Mouse" should also find Gaming Mouse

Checkpoint: Search works, case-insensitive

---

## Section 4: Sort and Cart Integration (60 minutes)

### Part A: Sorting (30 min)

#### Task 4.1: Add Sort Dropdown (5 min)

Add to Day 2 `index.html`:

```html
<select onchange="sortProducts(this.value)">
  <option value="">Sort by...</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
  <option value="name">Name: A-Z</option>
</select>
```

#### Task 4.2: Complete sortProducts() (20 min)

In `catalog.js`, find the `sortProducts()` function with TODO comments.

Uncomment and complete the code to:
- Make a copy of products array using spread operator
- Sort based on the sortBy parameter
- Display sorted results

Important: Always copy the array first so the original stays unchanged.

#### Task 4.3: Test Sorting (5 min)

Test each sort option:
- "Price: Low to High" → Notebook ($5.99) first, Keyboard ($89.99) last
- "Price: High to Low" → Keyboard ($89.99) first, Notebook ($5.99) last
- "Name: A-Z" → Backpack first, T-Shirt last

### Part B: Cart Integration (30 min)

#### Task 4.4: Add Cart Count Display (5 min)

Add to Day 2 `index.html` near the top (in header area):

```html
<div id="cart-count">Cart: 0 items</div>
```

#### Task 4.5: Complete handleAddToCart() (15 min)

In Day 2 `catalog.js`, find both `handleAddToCart()` and `updateCartDisplay()` functions with TODO comments.

Complete handleAddToCart() to:
- Find the product by ID using find()
- Check if product exists
- Call addToCart() function from your Day 1 cart.js (now in day-2 folder)
- Show success alert
- Update cart display

Complete updateCartDisplay() to:
- Get total items using getTotalItems() from your Day 1 cart.js
- Update the #cart-count element text

#### Task 4.6: Verify Product Cards (5 min)

In displayProducts(), verify your button onclick calls handleAddToCart correctly:

```javascript
<button onclick="handleAddToCart(${product.id})">Add to Cart</button>
```

Note: Use product.id, not quotes around it.

#### Task 4.7: Initialize and Test (10 min)

At bottom of Day 2 catalog.js, uncomment:
```javascript
updateCartDisplay();
```

Test the integration in browser:
1. Click "Add to Cart" on any product
2. Should see success alert
3. Cart count should increase
4. In console, type `cart` to see cart array
5. Add same product again - quantity should increase
6. Verify all your Day 1 cart functions work (addToCart, getTotalItems, etc.)

Checkpoint: Cart integration works with copied Day 1 functions

---

## Troubleshooting

### Products don't display
- Check console for errors
- Verify displayProducts(products) is called at bottom of catalog.js
- Check all scripts loaded in correct order in HTML
- Verify products.js was copied to day-2 folder

### Filter doesn't work
- Use filter() correctly: `products.filter(p => p.category === category)`
- Call displayProducts() with filtered array
- Check category names match exactly

### Search is case-sensitive
- Use toLowerCase() on BOTH strings
- Example: `product.name.toLowerCase().includes(searchLower)`

### Sort doesn't work
- Make array copy first: `[...products]`
- Numbers: `a.price - b.price` (ascending)
- Strings: `a.name.localeCompare(b.name)`

### Cart button doesn't work
- Verify cart.js was copied from Day 1 to day-2 folder
- Check cart.js is loaded before catalog.js in HTML
- Use find() to get product by ID
- Verify Day 1 cart functions exist (addToCart, getTotalItems)

---

## Extension Challenges

If finished early:

1. Multiple filters (category + price range)
2. Clear search button
3. Active filter button styling
4. Product detail modal
5. Quantity selector before adding to cart
6. Sort by multiple criteria

---

## Completion Checklist

- [ ] Products display in grid
- [ ] All filter buttons work
- [ ] Search works (case-insensitive)
- [ ] Sort dropdown works
- [ ] Add to cart works
- [ ] Cart count updates
- [ ] Code is clean
- [ ] Pushed to GitHub

---

## Next Steps

Day 3: Cart UI, quantity controls, checkout flow
