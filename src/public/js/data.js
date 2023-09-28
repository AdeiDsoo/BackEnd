const seccionProducts=document.querySelector('.allProducts')

let products=[]
let acumuladorHTML = '';

async function fetchData() {
    const response = await fetch('../Products.json');
    const data=await response.json();
return data    
  }
fetchData().then(product => {
 products.push(...product)
 


  products.forEach(p => {

  acumuladorHTML += `<div class='contentProduct'>
  <h4>${p.title}</h4> 
  <p> La descripción de este producto es:  ${p.description}</p>
  <p> Su precio es de:  ${p.price}</p>
  <p> Su codigo es:  ${p.code}</p>
  <p> Tenemos en existencia este stock: ${p.stock}</p>
  <p> Su estatus es de:  ${p.status}</p>
  <p> y pertenece a la categoria de:  ${p.category}</p>
  </div>`

  seccionProducts.innerHTML = acumuladorHTML;
    const card = document.createElement('div');
    card.className = "card";


 
})
  });

