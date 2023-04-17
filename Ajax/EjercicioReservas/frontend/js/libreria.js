const crearLi = (turno) => {
    // Crea el <li>
    const li = document.createElement("li");
    // Crea el <input:checkbox>
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Crea el <span> del texto de la turno
    const spanTexto = document.createElement("span");
    spanTexto.textContent = turno;
    // Crea el <span> para eliminar la turno
    const spanBorrar = 
    li.append(checkbox, spanTexto);
    // Retorna el <li>
    return li;
  };
  
  export { crearLi };