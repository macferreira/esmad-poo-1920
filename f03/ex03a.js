// Criação de todos os nodos
const table = document.createElement("table")
const firstTr = document.createElement("tr")
const secondTr = document.createElement("tr")
const firstTh = document.createElement("th")
const secondTh = document.createElement("th")
const firstTd = document.createElement("td")
const secondTd = document.createElement("td")
const firstText = document.createTextNode("Escola")
const secondText = document.createTextNode("Local")
const thirdText = document.createTextNode("ESMAD")
const fourthText = document.createTextNode("Vila do Conde")

// Associação dos nodos de tipo texto aos elementos <th> e <td>
firstTh.appendChild(firstText)
secondTh.appendChild(secondText)
firstTd.appendChild(thirdText)
secondTd.appendChild(fourthText)

// Associação dos elementos <th> e <td> aos elementos <tr>
firstTr.appendChild(firstTh)
firstTr.appendChild(secondTh)
secondTr.appendChild(firstTd)
secondTr.appendChild(secondTd)

// Associação dos elementos <tr> ao elemento <table>
table.appendChild(firstTr)
table.appendChild(secondTr)

// Associação do elemento <table> ao elemento <body>
document.body.appendChild(table)
