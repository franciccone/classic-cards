const products = [
    {id:1, title:'Gascoigne', price:500},
    {id:2, title:'Maradona', price:500},
    {id:3, title:'Matthäus', price:500},
    {id:4, title:'Schmeichel', price:500},
    {id:5, title:'Valderrama', price:500},
    {id:6, title:'Milla', price:500},
    {id:7, title:'Romario', price:500},
    {id:8, title:'Baggio', price:500},
    {id:9, title:'Völler', price:500},
    {id:10, title:'Sánchez', price:500},
    {id:11, title:'Batistuta', price:500},
    {id:12, title:'Stoichkov', price:500},
    {id:13, title:'Weah', price:500},
    {id:14, title:'Bebeto', price:500},
    {id:15, title:'Rijkaard', price:500},
    {id:16, title:'Bergkamp', price:500},
    {id:17, title:'Okocha', price:500},
    {id:18, title:'Cantona', price:500},
    {id:19, title:'Ronaldo', price:500},
    {id:20, title:'van Basten', price:500},
    {id:21, title:'Hagi', price:500},
    {id:22, title:'Karpin', price:500},
    {id:23, title:'Laudrup', price:500},
    {id:24, title:'Litmanen', price:500},
]

const productsContainer = document.querySelector('section.products')
console.log(productsContainer)

let list = '';

products.forEach(products => {
    list += `
    <div class="col-sm-6">
        <article class='card products products-${products.id}'>
            <img src="#" class="card-img-top" alt="${products.title}"">
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