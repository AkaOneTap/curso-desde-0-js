//maps
//declaracion

let myMap = new Map()
//inicializacion
myMap = new Map([
    ["name","Christian"],
    ["email","christian@gmail.com"],
    ["edad", 56]
])
console.log(myMap)

//metodos y propiedades
//set
myMap.set("alias","akaonetap")
console.log(myMap)
myMap.set("alias", "aka")
console.log(myMap)
//get
let myName = myMap.get("name")
console.log(myName)
//has boolean
console.log(myMap.has("email"))
// delete
myMap.delete("edad")
console.log(myMap)
//clear
//myMap.clear()
//console.log(myMap)
//keys retorna las claves
console.log(myMap.keys())
//values
console.log(myMap.values())
//todo
console.log(myMap.entries())
//size
console.log(myMap.size)





