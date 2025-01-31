const productContainer = document.querySelector("main");
productContainer.classList.add("product-list");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  let markup = products
    .map((product) => {
      return `
        <article class="product">
          <a href="product.html">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          </a>
          <p>${product.productdisplayname}</p>
          <p class="tag">${product.category} | ${product.brandname}</p>
          <p>DKK ${product.price},-</p>
        </article>`;
    })
    .join("");

  console.log(markup);
  productContainer.innerHTML = markup;
}
