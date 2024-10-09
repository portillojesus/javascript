// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
function despedir(){
    console.log('Adiós');
}
// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
function multiplicarPorDos(numero){
    return numero * 2 ;
}

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
function esMayorDeEdad(edad){
    return edad >= 18;
}
// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
function multiplicar(x , y){
    return x*y;
}

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
function saludarPersonalizado(nombre, apellido){
    return `Hola, ${nombre} ${apellido}`
}

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
function calcularPotencia(base, exponente){
    return base ** exponente;

}
// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
function restar (numero1, numero2){
    return numero1 - numero2;

}

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
function dividir (numero1 , numero2){

    return numero1 / numero2;;
}


// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    // Tu código aquí
    const multiplicarDOS = function(a, b) {
        return a * b;
    };
    

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
    const saludar = function(nombre) {
        return `Hola, ${nombre}`;
    };
    

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí

    const esPar = function(numero) {
        let x; // Declaramos x fuera del if
        if(numero % 2 == 0) {
            x = true;
        } else {
            x = false;
        }
        return x;
    }



// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    // Tu código aquí
    const multiplicarFlecha = (a, b) => a*b;

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
    const saludarFlecha = nombre => `Hola, ${nombre}`

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {
    const area = Math.PI * (radio * radio);
    return area;
};

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    // Tu código aquí
    function suma(n) {
        if (n <= 0) return 0; // Caso base: si n es 0 o negativo, la suma es 0
        return n + suma(n - 1); 
    }
    
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    // Tu código aquí
    function fibonacci(n) {
        if (n === 0) return 0; // Casos bases
        if (n === 1) return 1; 
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursión: suma de los dos anteriores
    }
}

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    // Tu código aquí
    function factorial(n) {
        if (n === 0 || n === 1) return 1; // Caso base: 0! y 1! son 1
        return n * factorial(n - 1); // Recursión: n * factorial(n - 1)
    }
}

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    // Tu código aquí
    function potencia(base, exponente) {
        if (exponente === 0) return 1; 
        return base * potencia(base, exponente - 1); 
    }
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
