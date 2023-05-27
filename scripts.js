
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página
  
    // Obtén los valores de los campos del formulario
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
    

    // Imprime los datos en la consola del navegador
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(valorSeleccionado);
    console.log(checkbox);
    console.log(textarea);
  });
  
  