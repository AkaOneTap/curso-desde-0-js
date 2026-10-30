//array

//declaracion
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//inicializar
myArray = [3]
console.log(myArray)
myArray = [1,3,4]
console.log(myArray)
myArray = ["sara","laura","christian"]
console.log(myArray)
myArray[0] = "Christian"
myArray[1] = "Iria"
myArray[2] = "lili"
console.log(myArray)

//metodos comunes
myArray = []
myArray.push("juegos")
myArray.push("del")
myArray.push("hambre")
myArray.push("en llamas")
console.log(myArray)
myArray.push(3)
console.log(myArray)
myArray.pop() //elimina el ultimo y lo devuelve
console.log(myArray)
myArray.shift() //elimina el primer elemento y lo devuelve
myArray.unshift("brais", "mouredev") //añade eleemntos al principio
console.log(myArray)
console.log(myArray.length) // longitud del array sin () es una propiedad no un metodo
myArray = []   //formas de vaciarlo
myArray.length = 0  //alternativa no utilizar
myArray = [2,5,6,7,8,9]
console.log(myArray.slice(0,4)) //recorta segun posiciones en el array recorta antes del segundo valor devuelve 0 - 3
console.log(myArray.splice(2,4)) //se carga desde una posicion un numero fijo de elementos y te deja meter otro nuevo desde la coma
myArray = [2,5,6,7,8,9]
myArray.splice(1,3,9,9,9)
console.log(myArray)

