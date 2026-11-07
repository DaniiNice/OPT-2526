function valida() {
 let n = document.form1.texto1.value;
 // Si no es numérico o es cero
 if (isNaN(n) || n == 0) {
 alert("Debe introducir un número");
 }
}