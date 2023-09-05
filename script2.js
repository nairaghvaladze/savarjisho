// JavaScript
const cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px;">
      <div class="item-details">
        <p style="width:200px">${item.title}</p>
        <p>Price: $${item.price}</p>
      </div>
    `;
    
    cartItemsElement.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Fetch products from the API
  fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(data => {
      const productListElement = document.getElementById("product-list");

      // Loop through the product data and generate HTML for each product
      data.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width: 250px; height: 250px;">
          <p style="width:200px">${product.title}</p>
          <p>Price: $${product.price}</p>
       
          <button class="add-to-cart">
          <ion-icon name="cart" ></ion-icon>
          </button>
        `;

        // Attach an event listener to the "Add to Cart" button for each product
        const addToCartButton = productDiv.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
          addToCart(product);
        });

        productListElement.appendChild(productDiv);
      });
    });
});
