document.addEventListener('DOMContentLoaded', () => {
    // Obtener la tabla y el cuerpo de la tabla
    const table = document.querySelector('table');
    const tbody = document.querySelector('#customer-list');
  
    // Hacer una solicitud a la ruta /clientes
    fetch('/clientes')
      .then(response => response.json())
      .then(clientes => {
        // Agregar cada cliente como una fila en la tabla
        clientes.forEach(cliente => {
          const row = document.createElement('tr');
          const nombreCell = document.createElement('td');
          const emailCell = document.createElement('td');
          const propietarioCell = document.createElement('td');
          const fechaCell = document.createElement('td');
          const sintomasCell = document.createElement('td');
  
          nombreCell.textContent = cliente.nombre;
          emailCell.textContent = cliente.email;
          propietarioCell.textContent = cliente.propietario;
          fechaCell.textContent = cliente.fecha;
          sintomasCell.textContent = cliente.sintomas;
  
          row.appendChild(nombreCell);
          row.appendChild(emailCell);
          row.appendChild(propietarioCell);
          row.appendChild(fechaCell);
          row.appendChild(sintomasCell);
          tbody.appendChild(row);
        });
        // Mostrar la tabla
        table.style.display = 'table';
      })
      .catch(error => {
        console.error(error);
      });
  });
