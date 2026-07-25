// Копіюємо з Read.me з template, де є HTMX 

function init() { // Стартує наш JS 
    import('./index.header-text.js'); // Вказуємо наші JS файли, які повинні завантажитись 
    import('./index.header-clock.js'); 
    import('./index.product-list.js'); 
    import('./index.product-carousel.js');
 }

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length; // Рахує patials та їх завантаження
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => { // Обробник подій, рахує к-сть partial 
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init(); // Як тільки к-сть (завантажених) partials відповідає к-сті потрібних partials - виконується ф-я init 
}); 

// HTMX працює асинхронно, він завантажуватиме HTML partials пізніше, ніж виконуватиме наш JS. 
// Тому, щоб цього не було, потрібно JS приєднати особливим способом.  
// Ділимо наш JS на схожі partials, як і HTML. 

