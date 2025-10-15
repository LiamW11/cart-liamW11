// ============================================
// Day 2: Product Catalog Functions
// ============================================
// Your task: Complete all functions marked TODO
// Run tests in console (F12) to check your work
// ============================================

// ============================================
// SECTION 1: DISPLAY PRODUCTS (60 minutes)
// ============================================

/**
 * Display products in the grid
 * @param {Array} productsToShow - Array of product objects to display
 */
function displayProducts(productsToShow) {
  console.log('TODO: Display products', productsToShow);
  
  // TODO: Get container element
  const container = document.getElementById('product-grid');
  
  // TODO: Clear container
   container.innerHTML = '';
  
  // TODO: Check if no products
   if (productsToShow.length === 0) {
     container.innerHTML = '<p>No products found.</p>';
     return;
   }
  
  // TODO: Loop through products and create HTML
   productsToShow.forEach(product => {
     const productCard = `
       <div class="product-card">
         <p>${product.image}</p>
         <p>${product.name}</p>
         <p>Price: ${product.price.toFixed(2)}$</p>
         <p>${product.stock} Left</p>
         <button onclick="handleAddToCart(${product.id})">Add to Cart</button>
       </div>
     `;
   container.innerHTML += productCard;
});
};

// ============================================
// SECTION 2: FILTER BY CATEGORY (60 minutes)
// ============================================

/**
 * Filter products by category
 * @param {string} category - Category to filter by ('all', 'electronics', 'clothing', 'home', 'office')
 */
function filterByCategory(category) {
  console.log('TODO: Filter by category:', category);
  
   if (category === 'all') {
     displayProducts(products);
   } else {

    const filteredProducts = products.filter((p) => p.category === category);
    displayProducts(filteredProducts);
   }
};


// ============================================
// SECTION 3: SEARCH PRODUCTS (60 minutes)
// ============================================

/**
 * Search products by name
 * @param {string} searchText - Text to search for
 */
function searchProducts(searchText) {
  console.log('TODO: Search for:', searchText);
    const result = products.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
    displayProducts(result)
};


// ============================================
// SECTION 4: SORT PRODUCTS (30 minutes)
// ============================================

/**
 * Sort products by different criteria
 * @param {string} sortBy - Sort method ('price-low', 'price-high', 'name')
 */
function sortProducts(sortBy) {
  console.log('TODO: Sort by:', sortBy);
  
  // TODO: Make a copy of products array
   let sorted = [...products];
  
  // TODO: Sort based on sortBy parameter
   if (sortBy === 'price-low') {
     sorted.sort((a, b) => a.price - b.price);
   } else if (sortBy === 'price-high') {
     sorted.sort((a, b) => b.price - a.price);
   } else if (sortBy === 'name') {
     sorted.sort((a, b) => a.name.localeCompare(b.name));
   }
  
  // TODO: Display sorted products
   displayProducts(sorted);
}


// ============================================
// SECTION 4: CART INTEGRATION (30 minutes)
// ============================================

/**
 * Handle adding product to cart
 * @param {number} productId - ID of product to add
 */
function handleAddToCart(productId) {
  console.log('TODO: Add product to cart:', productId);
  
   const product = products.find(p => p.id === productId);
  
   if (!product) {
     console.log('Product not found!');
     return;
   }
  
   addToCart(product, 1);
   displayCart();
}

function updateCartDisplay() {
  console.log('TODO: Update cart display');
  
  // TODO: Get total items from cart
   const total = getTotalItems();
  
  // TODO: Update cart count element
   const cartCount = document.getElementById('cart-count');
   if (cartCount) {
     cartCount.textContent = `Cart: ${total} items`;
   }
}


// ============================================
// INITIALIZATION
// ============================================

 displayProducts(products);
 updateCartDisplay();


// ============================================
// HELPFUL DEBUGGING
// ============================================

// Uncomment these to test functions in console:
// window.testDisplay = () => displayProducts(products);
// window.testFilter = (cat) => filterByCategory(cat);
// window.testSearch = (text) => searchProducts(text);
// window.testSort = (sort) => sortProducts(sort);
