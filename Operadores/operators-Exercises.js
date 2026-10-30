//1. Crea una variable para cada operación aritmética.
let mySum = 2+3
let myMult = 2*3
let myRest = 2-3
let myDiv = 4/2
let myMod = 4/2
let myExp = 3**2

//2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas.
let myNum = mySum
myNum += myDiv
myNum -= myMod

//3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.
console.log(34 < 100)
console.log(24 > 4)
console.log(22 >= 3)
console.log(33 <= 33)
console.log(true != false)

//4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.
console.log(34 > 100)
console.log(24 < 4)
console.log(22 <= 3)
console.log(!(33 >= 33))
console.log(true == false)

//5. Utiliza el operador lógico and.
let myVerdad = true
let myMentira = false
console.log(myVerdad != myMentira && !(myVerdad == myMentira))

//6. Utiliza el operador lógico or.
console.log(myVerdad != myMentira || myVerdad == myMentira)

//7. Combina ambos operadores lógicos.
console.log(myVerdad == myMentira || myVerdad != myMentira && myVerdad == true)

//8. Añade alguna negación.
console.log(!myVerdad)

//9. Utiliza el operador ternario.

let isRunning = true
isRunning ? console.log("corro") : console.log("no me corro")
isRunning = false
isRunning ? console.log("corro") : console.log("no me corro")

//10. Combina operadores aritméticos, de comparáción y lógicas.

let myAge = 26
let myHeight = 185
console.log(((myAge += 3)>20) && (myHeight -= 10)>170)