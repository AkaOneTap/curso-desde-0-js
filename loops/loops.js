//loops o bucles
//for
for(let i = 1; i <= 5; i++){
    console.log(`hola ${i}`)
}
const numbers = [2,3,4,5,6,7,8]
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i])
}

//while
let i = 0
while( i < 5){
    console.log("hola")
    i++
}
i = 0
//do while
do{
    console.log("adios")
    i++
}while(i<5)

//for of 
myArray = [1,3,4]
mySet = new Set(["patatas","huevos","salchichas"])
let myMap = new Map([
    ["name","Christian"],
    ["email","christian@gmail.com"],
    ["edad", 56]])
for (let valor of myArray) {
    console.log(valor)
}
for(let valor of mySet){
    console.log(valor)
}
for(let valor of myMap){
    console.log(valor)
}
let myString = "hola me llamo christian"
for(let valor of myString){
    console.log(valor)
}

//buenas practicas
//no bucles infinitos continue ignora esa iteracion y va a la siguiente y break sale del bucle por completo

console.clear()
let puntuacion = 0;
let actividad = 1;
// COMPLETAR EL BUCLE WHILE

while (actividad<=5) {

    puntuacion = puntuacion + 10;

    actividad++;

}

console.log("Puntuación total: " + puntuacion);