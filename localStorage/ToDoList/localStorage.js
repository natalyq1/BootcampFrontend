document.getElementById("btnCreate").addEventListener("click", function () {
  var inputForm = document.getElementById("inputForm").value;
  var cardsList = document.getElementById("cardsList");

  localStorage.setItem("inputForm", inputForm);

  for (let i = 0; i < localStorage.length; i++) {
    
   const newDiv = document.createElement("li"); 
var key = localStorage.key(i);
    const newContent = document.createTextNode(
      `${localStorage.getItem(key)}\n`
    );
    newDiv.appendChild(newContent);
    cardsList.appendChild(newDiv);
  }
});
