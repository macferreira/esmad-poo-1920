// Definição do array que vai guardar todos os objetos Movie
let movies = [];

// Definir o atributo max da caixa de texto do ano com o ano atual
document.querySelector('#txtYear').max = new Date().getFullYear();

document.querySelector('form').addEventListener('submit', (event) => {

    // 1. Obter todos os valores dos elementos do formulário
    const newTitle = document.querySelector('#txtTitle').value;
    const newGenre = document.querySelector('#sltGenre').value;
    const newYear = document.querySelector('#txtTitle').value;
    const newCover = document.querySelector('#txtCover').value;
    const newTrailer = document.querySelector('#txtTrailer').value;

    // 2. Verificar se o título do filme inserido já existe no array
    if (!movies.some((movie) => movie.title === newTitle)) {

        // 3. Criar objeto newMovie
        const newMovie = {
            title: newTitle,
            genre: newGenre,
            year: newYear,
            cover: newCover,
            trailer: newTrailer,
        };

        // 4. Adicionar o objeto newMovie ao array
        movies.push(newMovie);

        // 5. Renderizar a tabela com todos os dados do array
        renderTable();

    } else {
        alert('Filme existente!');
    }

    // 6. Prevenir que o form seja submetido ao servidor
    event.preventDefault();
});

function renderTable() {

    const table = document.querySelector('table');

    // Injetar o cabeçalho na tabela
    table.innerHTML = `
        <tr>
            <th>TITULO</th><th>GÉNERO</th>
        </tr>
    `;

    // Percorrer todo o array e injetar cada objeto movie como uma nova linha da tabela
    for (const movie of movies) {
        table.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>
                    <button onclick="showCoverWindow('${movie.cover}')">VER CAPA</button>
                    <button onclick="showTrailerWindow('${movie.trailer}')">VER TRAILLER</button>
                    <button onclick="removeMovie('${movie.title}')">REMOVER</button>
                </td>
            </tr>
        `;
    }
}

/*
 * Modal Movie Cover
 */
// Função para mostrar a capa do filme numa janela modal
function showCoverWindow(cover) {
    const dlgCover = document.querySelector('#dlgCover');
    const imgCover = document.querySelector('#imgCover');
    imgCover.src = cover;
    dlgCover.showModal();
}
// Função para fechar a janela modal da capa do filme
const btnCloseCoverDialog = document.querySelector('#btnCloseCoverDialog');
btnCloseCoverDialog.addEventListener('click', function () {
    document.querySelector('#dlgCover').close();
});

/*
 * Modal Movie Trailer
 */
// Função para mostrar o trailer do filme numa janela modal
function showTrailerWindow(trailer) {
    const dlgTrailer = document.querySelector('#dlgTrailer');
    const ifrTrailer = document.querySelector('#ifrTrailer');
    ifrTrailer.src = trailer + '?autoplay=1';
    dlgTrailer.showModal();
}
// Função para fechar a janela modal do trailer do filme
const btnCloseTrailerDialog = document.querySelector('#btnCloseTrailerDialog');
btnCloseTrailerDialog.addEventListener('click', function () {
    document.querySelector('#dlgTrailer').close();
});

// Função para remover um objeto movie do array
function removeMovie(title) {
    movies = movies.filter((movie) => movie.title !== title);
    renderTable();
}
