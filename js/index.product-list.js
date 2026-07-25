const products = [
    {
        id: "1", 
        title: "Baby Yoda", 
        price: 100, 
        img: "img/baby-yoda.svg", 
        description: "Baby Yoda sticker" 
    }, 
    {
        id: "2", 
        title: "Banana", 
        price: 10, 
        img: "img/banana.svg", 
        description: "Banana sticker" 
    }, 
    {
        id: "3", 
        title: "Girl", 
        price: 200, 
        img: "img/girl.svg", 
        description: "Girl sticker" 
    }, 
    {
        id: "4", 
        title: "Viking", 
        price: 150, 
        img: "img/viking.svg", 
        description: "Viking sticker" 
    }, 
] 

function renderProducts(products) {
    let productsHtml = ''; 
    for (const product of products) {
        productsHtml += `
        <article class="products__item">
            <img class="products__image" src="${product.img}" alt="${product.title}">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">${product.description}</p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`; 
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
} 

renderProducts(products); 