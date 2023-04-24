window.addEventListener("DOMContentLoaded", () => {
  const tablaClientes = document.querySelector("#tabla-clientes tbody");

  fetch("/clientes")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.textContent = data[i].nombre;
        td2.textContent = data[i].apellido;
        td3.textContent = data[i].email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.querySelector("table").appendChild(tr);
      }
    })
    .catch((err) => console.log(err));
});
