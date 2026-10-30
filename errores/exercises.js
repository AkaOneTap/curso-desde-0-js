//1. Captura una excepción utilizando try-catch.
let myArray = [2.3]
try{
    console.log(myArray[a])
}catch(error){console.log(error.message)}

//2. Captura una excepción utilizando try-catch y finally.
let person = {
        name:"pablo",
        age:25
}
try{
console.log(person.email)
}catch(error){
      console.log(error.message)
}finally{
    console.log("el intento de acceso a mail de persona ha concluido")
}
//3. Lanza una excepción genérica.
try{
    function accesoArray(a,myArray){
    if(a>=myArray.length){
        throw new Error("El array se te va de indice")
    }
}
accesoArray(4,myArray)
}catch(error){
    console.log(error.message)
}
//4. Crea una excepción personalizada.
class myAccesoArrayError extends Error{
    constructor(message){
        super(message)
    }
}
//5. Lanza una excepción personalizada.
try{
    function accesoArray(a,myArray){
    if(a>=myArray.length){
        throw new myAccesoArrayError("El array se te va de indice")
    }
}
accesoArray(4,myArray)
}catch(error){
    console.log(error.message)
}

//6 y 7. Lanza varias excepciones según una lógica definida y Captura varias excepciones en un mismo try-catch.
function positiveNumberPar(a){
    try{
        if(a<0){
            throw new Error("el numero es menor que 0")
        }else if((a%2) != 0){
            throw new Error("el numero no es par")
        }else return console.log("es par")

    }catch(error){
         console.log(error.message)
    }
}
console.log("----------------------------------------")
//8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.
function numberToFloat10(a){
    for(let i = 0; i < a.length; i++){
        try{
            if(!isNaN(a[i])){
                a[i] = parseFloat(a[i])
            }else throw new Error(`${a[i]} no es un numero no puedes pasarlo a float`)
            }catch(error){
            console.log(error.message)
        }
        }
    }
let myArray2 = [2,"pablo","2",6,"sara",8]
numberToFloat10(myArray2)
let [v1,v2,v3,v4,v5,v6] = myArray2
console.log(typeof v1)
console.log(typeof v2)
console.log(typeof v3)
console.log(typeof v4)
console.log(typeof v5)
console.log(typeof v6)
console.log("----------------------------------------")

//9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.

function emailPersona(persona){
    class emailError extends Error{
        constructor(message){
            super(message)
        }
    }
    try{
        if(!(persona.hasOwnProperty("email"))){
            throw new emailError("la persona no tiene email")
        }else console.log("la persona tiene email")
    }catch(error){
        console.log(error.message)
    }
}
let persona1 ={
    name:"christian",
    age:29,
    alias:"akaonetap"
}
emailPersona(persona1)
console.log("-----------------------------------")
//10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.
function emailPersona10(persona){
    
    class emailError extends Error{
        constructor(message){
            super(message)
        }
    }
    for(let i = 0; i<10 ; i++){
    try{
        if(!(persona.hasOwnProperty("email"))){
            throw new emailError("la persona no tiene email")
        }else {
            console.log("la persona tiene email")
            break
        }
    }catch(error){
        console.log(error.message)
    }
    }
}
emailPersona10(persona1)
