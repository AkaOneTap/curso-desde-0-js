//objects

//sintaxis
let persona ={
    name:"christian",
    age:29,
    alias:"akaonetap"
}
//acceso a propiedades

//por punto
persona.name = "sapo"
console.log(persona.name)
persona.name ="christian"

//notacion corchetes
console.log(persona["name"])

//modificacion se puede incluso cambiar el tipo de dato int->String por ejemplo
persona.name = "churu"

//eliminar propiedades
delete persona.age
console.log(persona)

//nueva porpiedad
persona.email = "christian@gmail.com"
console.log(persona)

persona.walk = function walk(){
    console.log("esta andando")
}
persona.walk()

persona.job = {
    name:"Programador",
    exp: 14,
    work(){
        console.log(`${this.name} is working`)
    }
}
persona.job.work()

//iteracion

for(let value in persona){
    console.log(value)
}
for(let key in persona){
    console.log(key + ": "+persona[key])
}