const products = [
    {id:1, title:'gascoigne', price:500},
    {id:2, title:'maradona', price:500},
    {id:3, title:'matthäus', price:500},
    {id:4, title:'schmeichel', price:500},
    {id:5, title:'valderrama', price:500},
    {id:6, title:'milla', price:500},
    {id:7, title:'romario', price:500},
    {id:8, title:'baggio', price:500},
    {id:9, title:'voller', price:500},
    {id:10, title:'sánchez', price:500},
    {id:11, title:'batistuta', price:500},
    {id:12, title:'stoichkov', price:500},
    {id:13, title:'weah', price:500},
    {id:14, title:'bebeto', price:500},
    {id:15, title:'rijkaard', price:500},
    {id:16, title:'bergkamp', price:500},
    {id:17, title:'okocha', price:500},
    {id:18, title:'cantona', price:500},
    {id:19, title:'ronaldo', price:500},
    {id:20, title:'van basten', price:500},
    {id:21, title:'hagi', price:500},
    {id:22, title:'karpin', price:500},
    {id:23, title:'laudrup', price:500},
    {id:24, title:'litmanen', price:500},
]

const productsContainer = document.querySelector('section.products')
console.log(productsContainer)

let list = '';

products.forEach(products => {
    list += `
    <article class='products products-${products.id}'>
            <h4>${products.title}</h4>
            <p>${products.price}</p>
            <button>Buy</button>
    </article>
    `;
})

productsContainer.innerHTML = list;