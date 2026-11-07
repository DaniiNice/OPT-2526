let nombre, edadusuario, dias100, diasusuario, diasquedan;
nombre = prompt("¿Cuál es tu nombre?");
edadusuario = prompt("¿Cuántos años tienes?");
diasusuario = edadusuario * 365;
dias100 = 100 * 365;
diasquedan = dias100 - diasusuario;
alert(nombre + " has vivido " + diasusuario + " días, y te quedan " + diasquedan + " días para llegar a los 100 años.");