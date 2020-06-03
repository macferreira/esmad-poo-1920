let letter = "A"
const tds = document.getElementsByTagName('td')
for (const td of tds) {
    td.addEventListener('click', event => {
        if (event.target.innerHTML === "") {
            event.target.innerHTML = letter
            letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        } else {
            alert("Célula já ocupada!")
        }
    })
}
