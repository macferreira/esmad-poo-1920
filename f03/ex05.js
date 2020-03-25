const frmGame = document.querySelector('form');

frmGame.addEventListener("submit", function (event) {
    const year = document.querySelector('#txtGameYear').value;
    if (year <= 1950 || year > new Date().getFullYear()) {
        alert('Erro');
    } else {
        alert('Validação OK');
        const table = document.querySelector('table');
        const gameName = document.querySelector('#txtGameName').value;
        const gameYear = document.querySelector('#txtGameYear').value;
        const gameGenre = document.querySelector('#sltGameGenre').value;
        const gameCover = document.querySelector('#txtGameCover').value;
        table.innerHTML += `
            <tr>
                <td>${gameName}</td>
                <td>${gameYear}</td>
                <td>${gameGenre}</td>
                <td><img src="${gameCover}"/></td>               
            </tr>         
        `;

    }
    frmGame.reset();
    event.preventDefault();
});
