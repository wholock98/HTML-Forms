
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var selectElement = document.getElementById("drop");
    var valorSeleccionado = selectElement.value;
    var checkbox = document.getElementsByName("option");
    var textarea = document.getElementById("comment").value;
    
    function btn() {
      document.getElementById("form").submit();
      }
   
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(valorSeleccionado);
    console.log(checkbox);
    console.log(textarea);
  });
  
  
