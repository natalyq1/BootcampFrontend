document.getElementById("btnCreate").addEventListener("click", function () {
  var inputForm = document.getElementById("inputForm").value;
  var cardsList = document.getElementById("cardsList");
  
  localStorage.setItem("inputForm", inputForm);

  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    cardsList.append( `${key}: ${localStorage.getItem(key)}\n`)
    
    alert(`${key}: ${localStorage.getItem(key)}`);
    
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
});
