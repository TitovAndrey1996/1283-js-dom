const clockContainer = document.querySelector('.header__clock'); 

// clockContainer.innerText = new Date().toLocaleTimeString('uk'); // Створииь новий об'єкт Date; .toLocaleTimeString('uk') - сконвертує час в поточний, формат - український 

// Щоб час поcтійно оновлювався (йшов) 

function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk');
}

setInterval(updateClock, 1000); // Приймає першим параметром ф-ю, яку треба викликати, другим параметром - к-сть мс як часто потрібно викликати  

