//funciones
//simple
function myFunt(){
    console.log("hola cabrones")
}
myFunt()

//con parametros
function myName(name){
    console.log("hola, chavalin " + name)
}
myName("christian")

//funciones anonimas
const myFunc2 =  function (name){
    console.log(`hola, ${name}`)
}
myFunc2("Christian Fraga")

//arrow functions
const myName2 = (name) => {
    console.log(`Hola, ${name}`)
}
myName2("christian")

