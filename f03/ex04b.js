const myTextbox = document.querySelector('input[type="text"]');
const myP = document.querySelector('p');
myTextbox.addEventListener('input', function () {
    myP.innerHTML = myTextbox.value;
});

const myButton = document.querySelector('input[type="button"]')
myButton.addEventListener('click', function () {
    alert(myTextbox.value.length);
});
