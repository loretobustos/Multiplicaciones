var ingresado = prompt("ingrese numero");
ingresado = parseInt(ingresado);
var resultado = 0;


let resolucion = (ingresado) =>{
    if (ingresado >= 1 && ingresado <= 20) {
        resultado = "si"
    }
    else {
        resultado = "no";
    }
    return resultado;
}

resolucion(ingresado)

if (resultado == "si") {
    for (let i = 0; i < ingresado; i++){
        let resultado = ingresado * i;
        document.write(ingresado + "" + " x " + i + "=" + resultado + "<br>");
    }
    for (let i = 1; i <= ingresado; i++) {
        let factorial =1;
        for (let j = 1; j <= i; j++) {
            factorial = factorial * j;
        }
        document.write("factorial de " + "" + i + " es: " + factorial + "<br>");
    }
}
else {
    alert("numero fuera de rango")
}