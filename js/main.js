// Variable with all the products

const products = [
    {id:1, title:'Gascoigne', price:500, value: '1', img:'./media/paul-gascoigne.webp'},
    {id:2, title:'Maradona', price:500, value: '2', img:'./media/diego-maradona.webp'},
    {id:3, title:'Matthäus', price:500, value: '3', img:'./media/lothar-matthaus.webp'},
    {id:4, title:'Savicevic', price:500, value: '4', img:'./media/dejan-savicevic.webp'},
    {id:5, title:'Valderrama', price:500, value: '5', img:'./media/carlos-valderrama.webp'},
    {id:6, title:'Milla', price:500, value: '6', img:'./media/roger-milla.webp'},
    {id:7, title:'Romario', price:500, value: '7', img:'./media/romario.webp'},
    {id:8, title:'Baggio', price:500, value: '8', img:'./media/roberto-baggio.webp'},
    {id:9, title:'Völler', price:500, value: '9', img:'./media/rudi-voller.webp'},
    {id:10, title:'Sánchez', price:500, value: '10', img:'./media/hugo-sanchez.webp'},
    {id:11, title:'Batistuta', price:500, value: '11', img:'./media/gabriel-batistuta.webp'},
    {id:12, title:'Stoichkov', price:500, value: '12', img:'./media/hristo-stoichkov.webp'},
    {id:13, title:'Baresi', price:500, value: '13', img:'./media/franco-baresi.webp'},
    {id:14, title:'Bebeto', price:500, value: '14', img:'./media/bebeto.webp'},
    {id:15, title:'Rijkaard', price:500, value: '15', img:'./media/frank-rijkaard.webp'},
    {id:16, title:'Maldini', price:500, value: '16', img:'./media/paolo-maldini.webp'},
    {id:17, title:'Bergkamp', price:500, value: '17', img:'./media/dennis-bergkamp.webp'},
    {id:18, title:'Cantona', price:500, value: '18', img:'./media/eric-cantona.webp'},
    {id:19, title:'Brolin', price:500, value: '19', img:'./media/tomas-brolin.webp'},
    {id:20, title:'van Basten', price:500, value: '20', img:'./media/marco-van-basten.webp'},
    {id:21, title:'Hagi', price:500, value: '21', img:'./media/gheorghe-hagi.webp'},
    {id:22, title:'Kanchelskis', price:500, value: '22', img:'./media/andrei-kanchelskis.webp'},
    {id:23, title:'Laudrup', price:500, value: '23', img:'./media/michael-laudrup.webp'},
    {id:24, title:'Prosinecki', price:500, value: '24', img:'./media/robert-prosinecki.webp'},
]

// I add the products to the HTML

const productsContainer = document.querySelector('section.products');

let list = '';

products.forEach(products => {
    list += `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <article class='card products products-${products.id}'>
            <img src="${products.img}" class="card-img-top card-image" alt="${products.title}"">
            <div class="card-body">
                <h4 class="card-title">${products.title}</h4>
                <h5 class="card-text">${products.price}</h5>
                <button class="btn btn-warning">Buy</button>
            </div>
        </article>
    </div>
    `;
});

productsContainer.innerHTML = list;

// Now I call all buttons

const addToShoppingCartButtons = document.querySelectorAll('.btn');

// I show to JS where I'm going to put everything I will do on the HTML with a global variable

const shoppingCartItemsContainer = document.querySelector('.shopping-cart')

// With a forEach with an Arrow Function I set a click event for every button

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

// I made a function called addToCartClicked with an event as a parameter + I added variables to get the products data

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.products');

    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-text').textContent;
    const itemImg = item.querySelector('.card-image').src;

    addToCart(itemTitle, itemPrice, itemImg);
}

// Function used to add the selected cards to the cart

function addToCart(itemTitle, itemPrice, itemImg) {

    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')

    // Avoid duplicated products with this for

    for(let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
        }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
        <div class="row products">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${itemImg} class="card-image-cart">
                    <h6 class="title-cards shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="price-cards mb-0 shoppingCartItemPrice">${itemPrice}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
}

// Function used to get the total price in the cart

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')

    shoppingCartItems.forEach(shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$','' ));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    })

    shoppingCartTotal.innerHTML = `${total}`;
}

// Function used to delete one cart element

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.products').remove();
    updateShoppingCartTotal();
}

// Function used to change the amount of one cart element

function quantityChanged(event) {
    const input = event.target;
    if (input.value <= 0) {
        input.value = 1;
    }
    updateShoppingCartTotal();
}