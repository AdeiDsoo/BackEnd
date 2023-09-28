const socketClient = io();

const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const inputPrice = document.getElementById("price");
const inputImage = document.getElementById("thumbail");
const inputCode = document.getElementById("code");
const inputStock = document.getElementById("stock");
const inputStatus = document.getElementById("status");
const inputCategory = document.getElementById("category");

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

    const newProduct = {
        title: inputTitle.value,
        description: inputDescription.value,
        price: +inputPrice.value,
        thumbail: inputImage.value,
        code: inputCode.value,
        stock: +inputStock.value,
        status: strToBool(inputStatus.value),
        category: inputCategory.value,
    };

    socketClient.emit("firstEvent", newProduct);
};

socketClient.on("secondEvent", (info) => {
    console.log(`New pricee: ${info}`);
});
