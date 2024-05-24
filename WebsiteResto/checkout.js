let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();
addCartToHTML();

function addCartToHTML() {
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    listCart.forEach(product => {
        if (product) {
            const newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML = `
                <img src="${product.image}">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">$${product.price}/1 product</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">$${product.price * product.quantity}</div>
            `;
            listCartHTML.appendChild(newCart);

            // Update total quantity and total price
            totalQuantity += product.quantity;
            totalPrice += product.price * product.quantity;
        }
    });

    // Update total quantity and total price displayed in HTML
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}
