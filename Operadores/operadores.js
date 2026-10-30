let a = 9
let b = 4
console.log(a + b)    //suma
console.log(a - b)    //resta
console.log(a / b)    //division
console.log(a % b)    //modulo
console.log(a * b)    //multiplicacion
console.log(a ** b)   //exponente
a++                   //incremento
b--                   //decremento

// operadores de asignacion
let myNum = 4
myNum += 2 //suma a la variable 2 a = a + 2

//operadores de comparacion

let myBoolean = true
let myBoolean2 = false

console.log(myBoolean == myBoolean2) //igualdad por valor
console.log(a === myBoolean) // igualdad por identidad (tipo y valor)
console.log(a != b) //desigualdad por valor
console.log(a !== b) // desigualdad por identidad
console.log(myBoolean < myBoolean2)
console.log(myBoolean > myBoolean2)
console.log(myBoolean >= myBoolean2)
console.log(myBoolean <= myBoolean2)

/*
truthy numbers ( valores verdaderos)
todos los numeros positivos y negativos menos 0
todas las cadenas de texto menos las vacias
boolean true

falsy values (numeros falsos)
0
0m
null
undefined
NaN
boolean false
cadenas de texto vacias
*/

//operadores logicos

//and (&&)
console.log(5 > 2 && 10 < 20)
//or (||)
console.log(5 > 2 || 10 < 20)
//not (!)
console.log(!(22 < 14))

//operadores ternarios
const isRainning = true
isRainning ? console.log("Esta LLoviendo") : console.log("No esta lloviendo")