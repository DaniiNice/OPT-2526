function calcular() {
 var a = document.form1.num1.value;
 var b = document.form1.num2.value;
 document.form1.num3.value = a*b;
 // Si no es numérico o es cero
}
function anular() {
 document.form1.num1.value="";
 document.form1.num3.value="";
}