const tBody = document.querySelector('#product-table tbody');
const form = document.forms.create;

const nameC = form.elements.name;
const priceC = form.elements.price;

let counter = 4; // start id

form.onsubmit = (e) => {
    e.preventDefault();

    tBody.innerHTML += `<tr>
                            <th scope="row">${counter++}</th>
                            <td>${nameC.value}</td>
                            <td>${priceC.value}$</td>
                        </tr>`
}