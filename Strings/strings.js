//String
let myUpperName = "CHRISTIAN"
let myLowerName = "christian"
let mySaludo = "soy" 
let mySaludoEnd = "como estas?"

//concatenacion
console.log(mySaludo + " "+ myLowerName +" " + mySaludoEnd)

//longitud
console.log(myUpperName.length)

//acceso cadena de texto
console.log(myLowerName[2])

//mayuscula minuscula
console.log(myUpperName.toLowerCase())
console.log(myLowerName.toUpperCase())

//index -1 es que no encontro elemento
console.log(myLowerName.indexOf("tian"))

//include
console.log(myUpperName.includes("TIAN"))

//slice
console.log(myLowerName.slice(0,4))

//replace
console.log(myLowerName.replace("tian", "TIAN"))


//TEMPLATE LITERALS (plantillas literales)

let mensaje = `hola este 
es mi texto`

console.log(mensaje)
console.log(`hola, ${mySaludo} ${myLowerName} ${mySaludoEnd}`)