import products from "./data.js";

const seccionProducts=document.querySelector('.allProducts')

const allProducts=products

.map((obj) => `<p>${obj.title}: ${obj.id}</p>`)
        .join(" ");
    seccionProducts.innerHTML = allProducts;
