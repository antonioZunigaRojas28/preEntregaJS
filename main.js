///////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
///////////////////////////////////////////////////////////////////////////////////////////////////////
let numero1, numero2, numero3, numero4, menorNumero=0, mayorNumero=0, resultado;


///////////////////////////////////////////////////////////////////////////////////////////////////////
// PROCEDIMIENTO
///////////////////////////////////////////////////////////////////////////////////////////////////////

numero1 = ingresenumero("Ingrese numero 1:");
if(!(numero1===null)){
    numero2 = ingresenumero("Ingrese numero 2:");
    if(!(numero2===null)){
        numero3 = ingresenumero("Ingrese numero 3:");
        if(!(numero3===null)){
            numero4 = ingresenumero("Ingrese numero 4:");
            if(!(numero4===null)){
                resultado = "NUMEROS INGRESADOS\n" + getnumeros() + getLinea() + getMayorNumero() + '\n' + getMenorNumero() + '\n' + getPromedio();
                alert(resultado);
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES
///////////////////////////////////////////////////////////////////////////////////////////////////////

function ingresenumero(labelnumero) {
    let textoIngresado, numeroIngresado, valorCorrecto;
    let label = "INGRESE 4 NUMEROS" + getLinea() + getnumeros() + getLinea() + labelnumero + '  ( Valor numerico entre 1 y 10 )';
    
    do{
        textoIngresado  = prompt(label);
        console.log(textoIngresado);

        if(textoIngresado===null){
            return null;
        }else{
            valorCorrecto   = false;

            if(isNaN(textoIngresado)){
                alert("El dato ingresado no es numerico.")
            }else{
                numeroIngresado = parseInt(textoIngresado);
                if(numeroIngresado>=1 && numeroIngresado<=10){
                    valorCorrecto=true;

                    setMayorNumero(numeroIngresado);
                    setMenorNumero(numeroIngresado);
                }else{
                    alert("El valor ingesado es incorrecto.")
                }
            }
        }
    }while(!(valorCorrecto));
    return numeroIngresado;
}

function getnumeros(){
    let numeros
    numeros = "Numero1: [ " + numero1 + " ]"
    numeros = numeros + "\nNumero2: [ " + numero2 + " ]"
    numeros = numeros + "\nNumero3: [ " + numero3 + " ]"
    numeros = numeros + "\nNumero4: [ " + numero4 + " ]"
    return numeros
}

function getLinea(){
    return '\n---------------------------------------------------------\n'
}

function setMenorNumero(numero){
    if(menorNumero===0){
        menorNumero=numero;
    }else if(menorNumero>numero){
        menorNumero=numero
    }
    console.log(menorNumero);
}

function setMayorNumero(numero){
    if(mayorNumero===0){
        mayorNumero=numero;
    }else if(mayorNumero<numero){
        mayorNumero=numero
    }
    console.log(mayorNumero);
}

function getMayorNumero(){
    return "- El numero mayor es: [ " + mayorNumero + " ]"
}

function getMenorNumero(){
    return "- El numero menor es: [ " + menorNumero + " ]"
}

function getPromedio(){
    let promedio = (numero1 + numero2 + numero3 + numero4)/4;
    return "- El valor promedio es: [ " + promedio + " ]";
}