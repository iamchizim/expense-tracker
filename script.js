
const form = document.querySelector('form');
form.addEventListener("submit",addFunction)

const tbody = document.querySelector("tbody")

const table = document.querySelector('table')
table.addEventListener('click', deleteRow)


function addFunction(event){
    event.preventDefault()
    const description = document.getElementById("description").value
    const amount = document.getElementById("amount").value
    const date  = document.getElementById("date").value
    tbody.innerHTML += `
    <tr>
    <td>${description}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `
}

function deleteRow(e){
    if(!e.target.classList.contains('deleteBtn')){
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
}


