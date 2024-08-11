const form = document.getElementById("formRegistro");
const nameInput = document.getElementById("nameInput");
const cedulaInput = document.getElementById("cedulaInput");
const emailInput = document.getElementById("emailInput");
const arlInput = document.getElementById("arlInput");
const epsInput = document.getElementById("epsInput");
const ContactoInput = document.getElementById("ContactoInput");
const fechaInput = document.getElementById("fechaInput");
const tableBody = document.getElementById("tableBody");

let data = JSON.parse(localStorage.getItem("formData")) || [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const cedula = cedulaInput.value;
    const email = emailInput.value;
    const arl = arlInput.value;
    const eps = epsInput.value;
    const Contacto = ContactoInput.value;
    const fecha = fechaInput.value;

    if(name && cedula && email && arl && eps && Contacto && fecha) {
        const newData = {name,cedula,email,arl,eps,Contacto,fecha};
        data.push(newData);
        saveDataToLocalstorage();
        renderTable();
        form.reset();
    }else{
        alert("Todos los datos son obligatorios Imbecil")

    }

})

function saveDataToLocalstorage() {
    localStorage.setItem("formData",JSON.stringify(data));
} 

function renderTable() {
    tableBody.innerHTML = "";

    data.forEach(function (item, index) {
        


        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const cedulaCell = document.createElement("td"); 
        const emailCell = document.createElement("td");
        const arlCell = document.createElement("td");
        const epsCell = document.createElement("td");
        const ContactoCell = document.createElement("td");
        const fechaCell = document.createElement("td");
        const OpcionCell = document.createElement("td");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        nameCell.textContent = item.name;
        cedulaCell.textContent = item.cedula;
        emailCell.textContent = item.email;
        arlCell.textContent = item.arl;
        epsCell.textContent = item.eps;
        ContactoCell.textContent = item.Contacto;
        fechaCell.textContent = item.fecha;
        OpcionCell.textContent = item.Opcion;
        
        editButton.textContent = "Editar";
        deleteButton.textContent = "Eliminar";

        editButton.classList.add("button", "button--secondary");
        deleteButton.classList.add("button", "button--tertiary");

        editButton.addEventListener("click", function(){
            editData(index);
        })

        deleteButton.addEventListener("click", function(){
            deleteData(index);
        })

        OpcionCell.appendChild(editButton);
        OpcionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(cedulaCell);
        row.appendChild(emailCell);
        row.appendChild(arlCell);
        row.appendChild(epsCell);
        row.appendChild(ContactoCell);
        row.appendChild(fechaCell);
        row.appendChild(OpcionCell);

        tableBody.appendChild(row);


        
    })
}

function editData (index) {

    const item = data[index];
    nameInput.value = item.name;
    cedulaInput.value = item.cedula;
    emailInput.value = item.email;
    arlInput.value = item.arl;
    epsInput.value = item.eps;
    ContactoInput.value = item.Contacto;
    fechaInput.value = item.fecha;
    data.splice(index, 1);
    saveDataToLocalstorage();
    renderTable();

}

function deleteData(index) {

    data.splice(index, 1);
    saveDataToLocalstorage();
    renderTable();
}

renderTable();