const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>', 
    '<div><img src="img/banana.svg" alt="Banana"></div>', 
    '<div><img src="img/girl.svg" alt="Girl"></div>', 
    '<div><img src="img/viking.svg" alt="Viking"></div>', 
]; 

let currentSlideIdx = 0; 

function renderCarousel() {
    const slideContainer = document.querySelector('.product-carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];
} 

function nextSlide() { // Функція для перегортання слайду вперед 
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderCarousel(); 
}

// function nextSlide() {
//     currentSlideIdx++; 
//     if ((currentSlideIdx) >= slides.length) currentSlideIdx = 0;
//     renderCarousel(); 
// }  

function prevSlide() { // Функція для перегортання слайду назад  
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderCarousel(); 
}

setInterval(nextSlide, 3000); // Відмикаємо, якщо не потрібно автолистання
renderCarousel(); 

const nextBtn = document.querySelector('.product-carousel__btn-next'); 
nextBtn.addEventListener('click', nextSlide); // Обробник подіх для кнопки next  

// Так не робимо, бо затирає інші обробники!  // nextBtn.onclick = nextSlide;  

const prevBtn = document.querySelector('.product-carousel__btn-prev'); 
prevBtn.addEventListener('click', prevSlide); // Обробник подіх для кнопки prev   
