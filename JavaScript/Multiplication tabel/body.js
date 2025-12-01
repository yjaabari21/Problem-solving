let x = 12;

for(let y=1; y<=x; y++) {

    let card = document.createElement('div');
    card.className = 'card';

    let title = document.createElement('h4');
    title.className = 'title';
    title.textContent = `Table of Number ${y}`;

    let table = document.createElement('div');
    table.className = 'table';

    for(let z=1; z<=x; z++) {
        table.innerHTML += `${y} x ${z} = ${y*z} <br>`;
    }

    card.appendChild(title);
    card.appendChild(table);
    document.getElementById('tables-container').appendChild(card);
}