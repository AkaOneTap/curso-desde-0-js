//1. Escribe un comentario en una línea.
//hola

//2. Escribe un comentario en varias líneas.
/*
hola 
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let myNum = 23
let myName = "christian"
let myBoolean = true
let mySymbol = Symbol("mySymbol")
let myNull = null
let myBigInt = BigInt(39248509235809238509235)
let myUndefined = undefined

//4. Imprime por consola el valor de todas las variables.
console.log(myNum)
console.log(myName)
console.log(myBoolean)
console.log(mySymbol)
console.log(myNull)
console.log(myBigInt)
console.log(myUndefined)

//5. Imprime por consola el tipo de todas las variables.
console.log(typeof myNum)
console.log(typeof myName)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myNull)
console.log(typeof myBigInt)
console.log(typeof myUndefined)

//6. A continuación, modifica los valores de las variables por otros del mismo tipo.
myNum = 24
myName = "cristian"
myBoolean = false
mySymbol = Symbol("mySymbo2")
myNull = null
myBigInt = BigInt(39248509809238509235)
myUndefined = undefined

//7. A continuación, modifica los valores de las variables por otros de distinto tipo.
myNum = "sara"
myName = 23
myBoolean = 24
mySymbol = 25
myNull = 34
myBigInt = "hola"
myUndefined = true
console.log("nuevos tipos")
console.log(typeof myNum)
console.log(typeof myName)
console.log(typeof myBoolean)
console.log(typeof mySymbol)
console.log(typeof myNull)
console.log(typeof myBigInt)
console.log(typeof myUndefined)

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const myNum2 = 23
const myName2 = "christian"
const myBoolean2 = true
const mySymbol2 = Symbol("mySymbol")
const myNull2 = null
const myBigInt2 = BigInt(39248509235809238509235)
const myUndefined2 = undefined

//9. A continuación, modifica los valores de las constantes.
//myNum2 = 43
//console.log(myNum2)

//10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.