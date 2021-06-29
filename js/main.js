const products = [
    {id:1, title:'Gascoigne', price:500, img:'../media/paul-gascoigne.jpg'},
    {id:2, title:'Maradona', price:500, img:'../media/diego-maradona.jpg'},
    {id:3, title:'Matthäus', price:500, img:'../media/lothar-matthaus.jpg'},
    {id:4, title:'Savićević', price:500, img:'../media/dejan-savicevic.jpg'},
    {id:5, title:'Valderrama', price:500, img:'../media/carlos-valderrama.jfif'},
    {id:6, title:'Milla', price:500, img:'../media/roger-milla.jpg'},
    {id:7, title:'Romario', price:500, img:'../media/romario.jfif'},
    {id:8, title:'Baggio', price:500, img:'../media/roberto-baggio.png'},
    {id:9, title:'Völler', price:500, img:'../media/rudi-voller.jfif'},
    {id:10, title:'Sánchez', price:500, img:'../media/hugo-sanchez.webp'},
    {id:11, title:'Batistuta', price:500, img:'../media/gabriel-batistuta.jpg'},
    {id:12, title:'Stoichkov', price:500, img:'../media/hristo-stoichkov.jpg'},
    {id:13, title:'Baresi', price:500, img:'../media/franco-baresi.jfif'},
    {id:14, title:'Bebeto', price:500, img:'../media/bebeto.jpg'},
    {id:15, title:'Rijkaard', price:500, img:'../media/frank-rijkaard.jfif'},
    {id:16, title:'Maldini', price:500, img:'../media/paolo-maldini.jpg'},
    {id:17, title:'Bergkamp', price:500, img:'../media/dennis-bergkamp.png'},
    {id:18, title:'Cantona', price:500, img:'../media/eric-cantona.jfif'},
    {id:19, title:'Brolin', price:500, img:'../media/tomas-brolin.png'},
    {id:20, title:'van Basten', price:500, img:'../media/marco-van-basten.jpg'},
    {id:21, title:'Hagi', price:500, img:'../media/gheorghe-hagi.jpg'},
    {id:22, title:'Kanchelskis', price:500, img:'../media/andrei-kanchelskis.jfif'},
    {id:23, title:'Laudrup', price:500, img:'../media/michael-laudrup.png'},
    {id:24, title:'Prosinečki', price:500, img:'../media/robert-prosinecki.jfif'},
]

const productsContainer = document.querySelector('section.products')
console.log(productsContainer)

let list = '';

products.forEach(products => {
    list += `
    <div class="col-sm-6">
        <article class='card products products-${products.id}'>
            <img src="${products.img}" class="card-img-top" alt="${products.title}"">
            <div class="card-body">
                <h5 class="card-title">${products.title}</h5>
                <p class="card-text">${products.price}</p>
                <button class="btn btn-primary">Buy</button>
            </div>
        </article>
    </div>
    `;
})

productsContainer.innerHTML = list;