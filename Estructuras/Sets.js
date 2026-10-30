//sets
//declaracion
let mySet = new Set()

//inicializar
mySet = new Set(["patatas","huevos","salchichas"])
console.log(mySet)

//metodos comunes
//add y delete añaden y quitan del final la operacion retorna boolean de si ha podido borrar el elemento
mySet.add("cubiertos")
console.log(mySet)
mySet.delete("cubiertos")
console.log(mySet)
//has comprueba si existe devuelve boolean
console.log(mySet.has("patatas"))
//longitud size
console.log(mySet.size)
//convert set to array
let myArray5 = Array.from(mySet)
console.log(myArray5)
//al reves
mySet = new Set(myArray5)
console.log(mySet)


//metodos diferentes 
//el sets no permite duplicados pero permite guardar con un bit diferente(mayusculas o minusculas)