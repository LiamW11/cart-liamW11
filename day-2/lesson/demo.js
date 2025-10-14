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
function displayProducts(productsToShow) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productsToShow.forEach((p) => {
    const productCard = `
        <div>
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <p>${p.category}</p>
        </div>
    `;
    container.innerHTML += productCard;
  });
}

function filterByCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter((p) => p.category === category);
    displayProducts(filteredProducts);
  }
}

function sortProducts(sortBy) {
  let sorted = [...products];

  if (sortBy === "low") {
    sorted.sort((x, y) => x.price - y.price);
  }

  if (sortBy === "high") {
    sorted.sort((x, y) => y.price - x.price);
  }

  displayProducts(sorted);
}

function searchProducts(searchText) {
  searchText = searchText.toLowerCase();
  const result = products.filter((p) =>
    p.name.toLowerCase().includes(searchText)
  );
  displayProducts(result);
}
