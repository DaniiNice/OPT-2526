function validaCamposVacios() {
    // Creamos las variables que vamos a usar indicando a los apartados del form
    let a = document.form2.text1.value;
    let b = document.form2.text2.value;
    let c = document.form2.text3.value;
    
    // Comprobamos los campos del form, mirando si están vacíos
    if (a == "") {
        alert("Error: El Autor está campo vacío.");
        document.form2.text1.focus();
    } else if (b == "") {
        alert("Error: El título está campo vacío.");
        document.form2.text2.focus();
    } else if (c == "") {
        alert("Error: El mensaje está campo vacío.");
        document.form2.text3.focus();
    } 

    // Comprobamos los campos del form, mirando si son iguales el título y el mensaje
    if (b == c) {
        alert("El título y el mensaje no deben ser iguales ni vacíos.");
        document.form2.text3.value = "";
        document.form2.text3.focus();
    } else {
        alert("Todos los campos obligatorios fueron rellenados correctamente.");
    }
}