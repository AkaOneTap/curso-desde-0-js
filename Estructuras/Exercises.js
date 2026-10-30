//1. Crea un array que almacene cinco animales.
let myAnimals = ["perro","gato","sabandija","iguana","lagarto"]
console.log(myAnimals)
//2. Añade dos más. Uno al principio y otro al final.
myAnimals.unshift("zorro")
myAnimals.push("canario")
console.log(myAnimals)
//3. Elimina el que se encuentra en tercera posición.
myAnimals[2] = null
console.log(myAnimals)
//4. Crea un set que almacene cinco libros.
let mySet = new Set(["matilda","juegos del hambre","ESDLA","caillu"])
//5. Añade dos más. Uno de ellos repetido.
mySet.add("iria")
mySet.add("iria")
console.log(mySet)
//6. Elimina uno concreto a tu elección.
mySet.delete("caillu")
console.log(mySet)
//7. Crea un mapa que asocie el número del mes a su nombre.
let myMap = new Map([
    [1 ,"enero"],
    [2 ,"febrero"],
    [3 ,"marzo"],
    [4 ,"abril"],
    [5 ,"mayo"],
    [6 ,"junio"],
    [7 ,"julio"],
    [8 ,"agosto"],
    [9 ,"septiembre"],
    [10 ,"octubre"],
    [11 ,"noviembre"],
    [12 ,"diciembre"]
])
console.log(myMap)
//8. Comprueba si el mes número 5 existe en el map e imprime su valor.
if(myMap.has(5)){
    console.log(myMap.get(5))
}
//9. Añade al mapa una clave con un array que almacene los meses de verano.
myMap.set("verano", ["junio","julio","agosto"])
console.log(myMap)

//10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

let myArray1 = ["patatas", "brabas", "caramelos"]
let mySet1 = new Set(myArray1)
console.log(mySet1)
let myMap1 = new Map([
    ["comida", mySet1]
])
console.log(myMap1)