function cubo(numero) {
    let cubo = numero * numero * numero;
    return cubo;
}

let num, resultado;
num = parseInt(prompt("Introduzca un número:"));
resultado = cubo(num);
document.write("El cubo del número " + num + " es " + resultado);