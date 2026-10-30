//1. Concatena dos cadenas de texto.
let myName = "christian"
let myLastName = "escaneo"
let myFullName = myName + " " + myLastName
//2. Muestra la longitud de una cadena de texto.
console.log(myName.length)
//3. Muestra el primer y último carácter de un string.
console.log(myName[0] + "," + myName.charAt(myName.length-1))
//4. Convierte a mayúsculas y minúsculas un string.
console.log(myName.toUpperCase)
console.log(myFullName.toLowerCase)
//5. Crea una cadena de texto en varias líneas.
let myText = `hola soy
un texto`
//6. Interpola el valor de una variable en un string.
console.log(`hola soy ${myFullName}`)
//7. Reemplaza todos los espacios en blanco de un string por guiones.
let myText2 = "hola soy un mago de exito entre todos los magos del mundo"
console.log(myText2.replaceAll(" ","-"))
//8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(myFullName.includes("christian"))
//9. Comprueba si dos strings son iguales.
console.log(myName == myLastName)
//10. Comprueba si dos strings tienen la misma longitud.
console.log(myName.length == myLastName.length)