//1. Imprime por consola tu nombre si una variable toma su valor.
const myName = "christian"
if(myName == "christian"){
    console.log(myName)
}
//2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
const myUser = "pollito"
const myPassword = "pio"

if(myUser == "pollito" && myPassword == "pio"){
    console.log("Felicidades te has loggeao")
}
//3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let myNum = 0
if(myNum>0){
    console.log(`el numero ${myNum} es mayor que 0`)
}else if(myNum<0){
    console.log(`el numero ${myNum} es menor que 0`)
}else console.log("el numero es 0")

//4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let myAge = 12
if(myAge >= 18){
    console.log(myAge)
    console.log("puedes votar")
}else{
   let myAge2 = 18 - myAge
    console.log("eres menor y no puedes votar, te quedan " + myAge2+ " años para poder votar")
} 

//5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let myAge3 = 20
let isAdult
myAge3>=18 ? isAdult = true : isAdult = false
console.log(isAdult)

//6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".
let isMes = 11
switch(isMes){
case 0:{
    console.log("enero")
    break   
 }
case 1:{
    console.log("febrero")
    break   
}
case 2:{
    console.log("marzo")
    break   
}
case 3:{
    console.log("abril")
    break 
}
case 4:{
    console.log("mayo")
    break   
}
case 5:{
    console.log("junio")
    break   
 }
case 6:{
    console.log("julio")
    break   
}
case 7:{
    console.log("agosto")
    break   
}
case 8:{
    console.log("septiembre")
    break 
}
case 9:{
    console.log("octubre")
    break   
}
case 10:{
    console.log("noviembre")
    break   
 }
case 11:{
    console.log("diciembre")
    break   
}
}
//7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.
switch(isMes){
case 0:{
    console.log("31 dias")
    break   
 }
case 1:{
    console.log("28")
    break   
}
case 2:{
    console.log("31")
    break   
}
case 3:{
    console.log("30")
    break 
}
case 4:{
    console.log("31")
    break   
}
case 5:{
    console.log("30")
    break   
 }
case 6:{
    console.log("31")
    break   
}
case 7:{
    console.log("30")
    break   
}
case 8:{
    console.log("31")
    break 
}
case 9:{
    console.log("30")
    break   
}
case 10:{
    console.log("31")
    break   
 }
case 11:{
    console.log("31")
    break   
}
}