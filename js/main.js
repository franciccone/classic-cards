const products = [
    {id:1, title:'Paul Gascoigne', price:500, img:'../media/paul-gascoigne.jpg'},
    {id:2, title:'Diego Maradona', price:500, img:'../media/diego-maradona.webp'},
    {id:3, title:'Lothar Matthäus', price:500, img:'../media/lothar-matthaus.jfif'},
    {id:4, title:'Dejan Savićević', price:500, img:'../media/dejan-savicevic.jfif'},
    {id:5, title:'Carlos Valderrama', price:500, img:'../media/carlos-valderrama.webp'},
    {id:6, title:'Roger Milla', price:500, img:'../media/roger-milla.jpg'},
    {id:7, title:'Romario', price:500, img:'../media/romario.jfif'},
    {id:8, title:'Roberto Baggio', price:500, img:'../media/roberto-baggio.png'},
    {id:9, title:'Rudi Völler', price:500, img:'../media/rudi-voller.jfif'},
    {id:10, title:'Hugo Sánchez', price:500, img:'../media/hugo-sanchez.webp'},
    {id:11, title:'Gabriel Batistuta', price:500, img:'../media/gabriel-batistuta.webp'},
    {id:12, title:'Hristo Stoichkov', price:500, img:'../media/hristo-stoichkov.webp'},
    {id:13, title:'Franco Baresi', price:500, img:'../media/franco-baresi.webp'},
    {id:14, title:'Bebeto', price:500, img:'../media/bebeto.webp'},
    {id:15, title:'Frank Rijkaard', price:500, img:'../media/frank-rijkaard.webp'},
    {id:16, title:'Paolo Maldini', price:500, img:'../media/paolo-maldini.jpg'},
    {id:17, title:'Dennis Bergkamp', price:500, img:'../media/dennis-bergkamp.png'},
    {id:18, title:'Eric Cantona', price:500, img:'../media/eric-cantona.webp'},
    {id:19, title:'Tomas Brolin', price:500, img:'../media/tomas-brolin.png'},
    {id:20, title:'Marco van Basten', price:500, img:'../media/marco-van-basten.jpg'},
    {id:21, title:'Gheorghe Hagi', price:500, img:'../media/gheorghe-hagi.webp'},
    {id:22, title:'Andrei Kanchelskis', price:500, img:'../media/andrei-kanchelskis.webp'},
    {id:23, title:'Michael Laudrup', price:500, img:'../media/michael-laudrup.png'},
    {id:24, title:'Robert Prosinečki', price:500, img:'../media/robert-prosinecki.jfif'},
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
                <button class="btn btn-primary" value='${products.id}'>Buy</button>
            </div>
        </article>
    </div>
    `;
})

productsContainer.innerHTML = list;

//Array donde queremos guardar los productos

const cart = [];

function addToCart(buttonId) {
    console.log(buttonId);
    console.log(cart);
}

//Buscamos el producto con el metodo find de los array, la idea es ubicar el producto que tenga un id igual al que le estamos pasando por parametro

const searchProductOnDatabase = products.find(
    product => product.id === buttonId
);