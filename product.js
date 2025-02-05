let productId = new URLSearchParams(window.location.search).get("id");

// Select the correct container
let product = document.querySelector(".product");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    if (!product) {
      console.error("Error: .product element not found.");
      return;
    }

    const originalPrice = data.price;
    const discountedPrice = data.discount
      ? Math.round(originalPrice * (1 - data.discount / 100))
      : originalPrice;

    product.innerHTML = `
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${
      data.productdisplayname
    }" />

      <div class="product-content">
        <section class="info-container">
          <h2>Product Information</h2>
          <p><strong>Price:</strong> 
            ${
              data.discount
                ? `<span class="old-price">DKK ${originalPrice},-</span> <span class="new-price">DKK ${discountedPrice},-</span>`
                : `DKK ${originalPrice},-`
            }
          </p>
          <dl>
            <dt><strong>Name:</strong></dt>
            <dd>${data.productdisplayname}</dd>
            <dt><strong>Color:</strong></dt>
            <dd>${data.basecolour}</dd>
          </dl>
        </section>

        <section class="purchase-container">
          <p><strong>Brand:</strong> ${data.brandname}</p>
          <form>
            <label>
              <select name="Size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
          </form>
          <button>Add to basket</button>
        </section>
      </div>
    `;
  })
  .catch((error) => console.error("Fetch error:", error));
