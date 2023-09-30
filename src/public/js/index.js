const socketClient = io();

const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPrice = document.getElementById("price");
const inputImage = document.getElementById("thumbnail");
const inputCode = document.getElementById("code");
const inputStock = document.getElementById("stock");
const inputStatus = document.getElementById("status");
const inputCategory = document.getElementById("category");
const table = document.getElementById("table");
const tableBody = document.getElementById("tableBody");
const allButtons = document.querySelectorAll(".delete");
const sectionMessage = document.querySelector(".messages")


const strToBool = (str) => {
    switch (str.toLowerCase()) {
        case "true":
            return true;
        case "false":
            return false;
    }
};

form.onsubmit = (e) => {
    e.preventDefault();

    const product = {
        title: inputTitle.value,
        description: inputDescription.value,
        price: +inputPrice.value,
        thumbail: inputImage.value,
        code: inputCode.value,
        stock: +inputStock.value,
        status: strToBool(inputStatus.value),
        category: inputCategory.value,
    };

    socketClient.emit("createProduct", product);
};

socketClient.on("productCreated", (product) => {
    const { id, title, description, price, thumbail, code, stock, status, category } = product;
    const row = `
    <tr>
    <td>${id}</td>
            <td>${title}</td>
            <td>${description}</td>
            <td>${price}</td>
            <td>${thumbail}</td>
            <td> ${code} </td>
            <td> ${stock} </td>
            <td> ${status} </td>
            <td> ${category} </td>
            <td><button id=${id} class="delete">Eliminate</button>  </td>
      
        </tr>`;
    table.innerHTML += row;
    sectionMessage.innerHTML = ''
});
const deleteProduct = () => {

}

allButtons.forEach(function (button) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.id
        socketClient.emit("deleteProduct", +id);

    });
});


function deleteRow(rowId)  
{   
    const row = document.getElementById(`${rowId}row`);
    row.parentNode.removeChild(row);
}
socketClient.on("productDeleted", (product) => {

    console.log(product.id, 'id products delete');


    const confirmMessage = `<p>El producto con el ${product.id}, ha sido eliminado</p>`;
    sectionMessage.innerHTML += confirmMessage;
   deleteRow(product.id)
   
});


