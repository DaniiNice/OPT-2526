// --- VARIABLES GLOBALES INICIALES ---
let NombreGlobal = "Carlota"; // JVS2
let edadGlobal = 1;           // JVS2
let simpatica = true;         // JVS2
var a_global = 20;            // JVS6 (Ámbitos)

// --- JVS1 y JVS9: SECUENCIA DE INICIO ---
function ejecutarInicio() {
    // JVS1: Alerta Básica
    alert("Hola"); 
    
    // JVS2: Alertas de variables por defecto
    alert("La niña se llama " + NombreGlobal);
    alert("Y tiene " + edadGlobal + " año.");
    alert("La variable simpatica tiene el valor " + simpatica);

    // JVS9 & JVS3: Captura personalizada
    let nombreUsuario = prompt("Dime tu nombre", "Escríbalo aquí");
    if (!nombreUsuario) nombreUsuario = "Invitado Anónimo";
    
    // Inyección dinámica (JVS9 h2 output)
    document.getElementById("saludo-contenedor").innerHTML = "<h2>Buenos días, " + nombreUsuario + "</h2>";

    let edadUsuario = prompt("Dime tu edad (0 a 100)", "20");
    let edadNum = parseInt(edadUsuario) || 0;

    // JVS3: Cálculos Matemáticos con Operadores
    let dias100 = 100 * 365;
    let diasUsuario = edadNum * 365;
    let diasQuedan = dias100 - diasUsuario;

    document.getElementById("resultado-vida").innerHTML = `
        <p>Hola <strong>${nombreUsuario}</strong>, has vivido aproximadamente <strong>${diasUsuario}</strong> días.</p>
        <p>Te faltan alrededor de <strong>${diasQuedan}</strong> días para llegar a los 100 años.</p>
    `;

    // JVS23: Enfocar automáticamente el primer input del formulario al terminar la carga
    if(document.formValidacion && document.formValidacion.texto1) {
        document.formValidacion.texto1.focus();
    }
}

// --- JVS4 y JVS5: FUNCIONES CON PARÁMETROS Y RETORNO ---
function cubo(numero) {
    let resultadoCubo = numero * numero * numero;
    return resultadoCubo; // Retorna el valor calculado
}

function procesarCubo() {
    let inputVal = parseInt(document.getElementById("num-cubo").value);
    if (isNaN(inputVal)) {
        alert("Por favor, introduzca un número válido.");
        return;
    }
    let res = cubo(inputVal);
    document.getElementById("resultado-cubo").innerText = "El cubo del número " + inputVal + " es " + res;
}

// --- JVS6: DEMOSTRACIÓN DE ÁMBITO (LOCAL VS GLOBAL) ---
function modifica() {
    var a_local = 10; // Variable Local
    return "<p>La variable 'a' dentro de la función (local) = " + a_local + "</p>";
}

function demostrarAmbito() {
    let textoLocal = modifica();
    let textoGlobal = "<p>La variable 'a' fuera de la función (global) = " + a_global + "</p>";
    document.getElementById("resultado-ambito").innerHTML = textoLocal + textoGlobal;
}

// --- JVS7, JVS8 y JVS10: MÉTODOS Y TEMPORIZADORES ---
function alerta() {
    alert("Esto es un mensaje de alerta!");
}

function probarConfirmacion() {
    let confirmacion = confirm("Pulse Aceptar o Cancelar");
    if (confirmacion == true) {
        alert("Ha pulsado Aceptar");
    } else {
        alert("Ha pulsado Cancelar");
    }
}

function iniciarTemporizador() {
    alert("Temporizador iniciado. Espera 5 segundos...");
    // Ejecuta la función interna tras 5000ms
    setTimeout(function() {
        alert("¡Hola! Han transcurrido los 5 segundos reglamentarios.");
    }, 5000);
}

// --- JVS11: CONDICIONALES (IF...ELSE) ---
function test() {
    let n = parseInt(document.getElementById("numero-condicion").value);
    let outputDiv = document.getElementById("resultado-condicion");
    
    if (isNaN(n)) {
        outputDiv.innerText = "Suministra un número válido primero.";
        return;
    }

    if (n <= 50) {
        outputDiv.innerText = n + " es inferior o igual a 50";
    } else {
        outputDiv.innerText = n + " es superior a 50";
    }
}

// --- JVS12 y JVS13: BUCLES (FOR Y WHILE) ---
function ejecutarBucles() {
    // Bucle For (JVS12)
    let stringFor = "<strong>Resultado For:</strong><br>";
    for (let i = 0; i < 5; i++) {
        stringFor += "Paso " + i + "<br>";
    }
    document.getElementById("print-for").innerHTML = stringFor;

    // Bucle While (JVS13)
    let stringWhile = "<strong>Resultado While:</strong><br>";
    let contador = 0;
    while (contador < 5) {
        stringWhile += "Paso " + contador + "<br>";
        contador++;
    }
    document.getElementById("print-while").innerHTML = stringWhile;
}

// --- JVS15 y JVS16: SUCESOS ADICIONALES (ERROR Y ENFOQUE) ---
function mensaje_err() {
    alert('Suceso onError: No se encuentra la imagen especificada en el servidor.');
}

function focoTexto(idInput) {
    if (idInput === 1) {
        document.getElementById("texto-foco-1").value = "Introduzca aquí su apellido";
    } else if (idInput === 2) {
        document.getElementById("texto-foco-2").value = "Introduzca aquí su nombre";
    }
}

// --- JVS20 a JVS25: FORMULARIOS Y VALIDACIONES ---

// JVS20: Validar campos vacíos en el envío (onSubmit)
function validaCamposVacios() {
    let a = document.formValidacion.texto1.value;
    let b = document.formValidacion.texto2.value;
    let c = document.formValidacion.texto3.value;
    
    if (a == "" || b == "" || c == "") {
        alert("Error en Formulario A: Hay algún campo vacío.");
        return false; // Evita el envío real
    }
    alert("¡Excelente! Todos los campos obligatorios fueron rellenados.");
    return false; // Retornamos falso únicamente para no refrescar el ejercicio
}

// JVS21 y JVS22: Transferir y proyectar cadenas de texto
function transferirTexto() {
    let origenTexto = document.formEspejo.origen.value;
    alert("Ha escrito usted: " + origenTexto); // JVS21
    document.formEspejo.destino.value = origenTexto; // JVS22 (Efecto espejo)
}

// JVS24: Validación de Código Postal (Restricción numérica e isNaN)
function validaCP() {
    let n = document.formPostal.texto1CN?.value || document.formPostal.textoCP.value;
    
    // Comprobar si no es numérico o es exactamente cero
    if (isNaN(n) || n == 0 || n.trim() === "") {
        alert("Debe introducir un número de código postal válido");
    } else {
        alert("Código postal con formato correcto.");
    }
}

// JVS25: Operaciones Comerciales de cálculo rápido sobre elementos
function calcularCompra() {
    let cantidad = parseFloat(document.formCompra.num1.value);
    let precioUnidad = parseFloat(document.formCompra.num2.value); // Proviene del input hidden (2.56)
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce una cantidad entera mayor a 0.");
        document.formCompra.num3.value = "";
        return;
    }
    
    // Operación matemática y asignación de valor final al cuadro de texto
    document.formCompra.num3.value = (cantidad * precioUnidad).toFixed(2);
}

function anularCompra() {
    // Blanquear los campos del formulario
    document.formCompra.num1.value = "";
    document.formCompra.num3.value = "";
}