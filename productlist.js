const productContainer = document.querySelector("main");
productContainer.classList.add("product-list");

const mycategori = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategori}`)
  .then((res) => res.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  let markup = products
    .map((product) => {
      return `
        <article class="product ${product.discount && "onSale"} ${
        product.soldout && "soldOut"
      }">
          <a href="product.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${
              product.id
            }.webp" alt="${product.productdisplayname}" />
          </a>
          <p>${product.productdisplayname}</p>
          <p class="tag">${product.category} | ${product.brandname}</p>
          <p class="price">DKK ${product.price},-</p>
        </article>`;
    })
    .join("");

  console.log(markup);
  productContainer.innerHTML = markup;
}
