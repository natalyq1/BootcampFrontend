function esPalindromo(palabra) {
  // Convertir la palabra a minúsculas y eliminar los espacios en blanco
  palabra = palabra.toLowerCase().replace(/ /g, '');
  
  // Convertir la palabra a un array y revertir el orden de los caracteres
  var palabraInversa = palabra.split('').reverse().join('');
  
  // Comparar la palabra original con la palabra invertida
  if (palabra === palabraInversa) {
    return true;
  } else {
    return false;
  }
}

// Ejemplo de uso:
console.log(esPalindromo("Sometamos o matemos")); // true
console.log(esPalindromo("Yo dono rosas oro no doy")); // true
