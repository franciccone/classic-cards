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

const productsContainer = document.querySelector('section.products')
console.log(productsContainer)

let list = '';

products.forEach(products => {
    list += `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <article class='card products products-${products.id}'>
            <img src="${products.img}" class="card-img-top card-image" alt="${products.title}"">
            <div class="card-body">
                <h4 class="card-title">${products.title}</h4>
                <h5 class="card-text">${products.price}</h5>
                <button class="btn btn-primary" value="${products.value}">Buy</button>
            </div>
        </article>
    </div>
    `;
})

productsContainer.innerHTML = list;

//Array donde queremos guardar los productos
const cart = [];

function addToCart(buttonId) {
console.log(
    'ID que pasamos como parametro que es el value del boton en este caso: ',
    buttonId
);
console.log('Antes de agregar al carrito: ', cart);

//Buscamos el producto con el metodo find de los array, la idea es ubicar el producto que tenga un id igual al que le estamos pasando por parametro
const searchProductsOnDatabase = products.find(
    products => products.value === buttonId
);

console.log(
    'Copia del producto obtenido en la DB, en teoria, el mismo que seleccionamos para agregar: ',
    searchProductsOnDatabase
);

//agregamos el producto al nuevo array
cart.push(searchProductsOnDatabase);
console.log('Despues de agregar al carrito: ', cart);
}

//Traemos todos los botones que dicen comprar a traves de su clase
const btnBuy = document.querySelectorAll('.btn');

//Hacemos un for each del array que nos trae el querySelectorAll de los botones que tienen clases y le agregamos un evento onclick donde llamamos la funcion addToCart. Si te fijas en el html a cada button le cargue un value que simula el Id del producto por eso utilizo el e.target.value... e.target hace referencia al boton que le estoy dando click y value al value que tiene el button
btnBuy.forEach(function(btn) {
btn.addEventListener('click', e => addToCart(e.target.value));
});