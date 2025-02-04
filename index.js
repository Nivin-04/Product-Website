console.log("potato");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er: ", data);

  const markup = data
    .map(
      (element) => `
      
          <a class="list" href="productlist.html?category=${element.category}">${element.category}</a>

    `
    )
    .join("");

  console.log("min markup her", markup);
  document.querySelector("section").innerHTML = markup;
}
