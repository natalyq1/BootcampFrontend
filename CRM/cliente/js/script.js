window.addEventListener('DOMContentLoaded', () => {
  const tablaClientes = document.querySelector('#tabla-clientes tbody');

  fetch('/clientes')
    .then(response => response.json())
    .then(data => {
      data.forEach(cliente => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = cliente._id;
        row.appendChild(idCell);

        const nombreCell = document.createElement('td');
        nombreCell.textContent = cliente.nombre;
        row.appendChild(nombreCell);

        const apellidoCell = document.createElement('td');
        apellidoCell.textContent = cliente.apellido;
        row.appendChild(apellidoCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = cliente.email;
        row.appendChild(emailCell);

        tablaClientes.appendChild(row);
      });
    })
    .catch(error => console.error(error));
});
