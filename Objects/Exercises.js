//1. Crea un objeto con 3 propiedades.
let persona = {
    name: "pedro",
    age:24,
    email:"pedro@gmail.com"
}
//2. Accede y muestra su valor.
console.log(persona)
console.log(persona.age)
console.log(persona.name)
console.log(persona.email)

//3. Agrega una nueva propiedad.
persona.trabajo = "programador"
console.log(persona)

//4. Elimina una de las 3 primeras propiedades.
delete persona.email
console.log(persona)
//5. Agrega una función e invócala.
persona.work = function work(){
    console.log("la persona esta andando")
}
persona.work()
//6. Itera las propiedades del objeto.
for(values in persona){
    console.log(values + ": " +persona[values])
}
//7. Crea un objeto anidado.
let mascota = {
    name: "lili",
    age: 2
}
persona.mascota = mascota
console.log(persona)
//8. Accede y muestra el valor de las propiedades anidadas.
console.log(persona.mascota.name)
console.log(persona.mascota.age)
//9. Comprueba si los dos objetos creados son iguales.
let persona1 = {
    name: "pedro",
    age:24,
    email:"pedro@gmail.com"
}
let persona2 = {
    name: "juan",
    age:24,
    email:"juan@gmail.com"
}
if(persona1.name == persona2.name){
    console.log("el nombre es igual")
} else if(persona1.age == persona2.age){
    console.log("la edad es la misma")
} else if (persona1.email == persona2.email){
    console.log("el email es igual")
}
//10. Comprueba si dos propiedades diferentes son iguales.

let myBoolean = (persona1.email == persona2.email)
console.log(myBoolean)