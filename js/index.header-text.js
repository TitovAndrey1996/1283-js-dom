const headerText = document.querySelector('.header__title'); 
// headerText.innerText = 'HELLO, JS!'; 

const greetings = [
    'Hello, JS!', 
    'Добрий день, JS!', 
    'Bonjour, JS!', 
    'Hola, JS!', 
    'Ciao, JS!'
]; 

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // Повертає random елемент з будь-якого масиву (по індексу) 
} 

headerText.innerText = getRandomEl(greetings);  

