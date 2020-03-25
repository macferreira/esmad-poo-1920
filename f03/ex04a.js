// ii. Propriedade DOM
document.querySelector('input').onclick = function () {
    alert('Olá Mundo!');
}

// iii. Adição de listener
const myButton = document.querySelector('input[type=’button’]');
myButton.addEventListener('click', function () {
    alert('Olá Mundo!');
})
