// 1. Usa desestructuracion para extraer los dos primeros elementos de un array.
let myArray = [1,2,3,4]

let [myValue0, myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)

// 2. Usa desestructuracion en un array y asigna un valor predeterminado a una variable.
let [myValue4 = 0, myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0] = myArray
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)

// 3. Usa desestructuracion para extraer dos propiedades de un objeto.
let person = {
    name: "christian",
    age: 25,
    email: "christian@gmail.com",
    mascota: {
        mascotaName: "lili",
        mascotaAge: 2,
    }
}
let person2 = {
    name2: "christian",
    age2: 25,
    email2: "christian@gmail.com",
    mascota2: {
        mascotaName2: "lili",
        mascotaAge2: 2,
    }
}

let {name , age} = person
console.log(name)
console.log(age)

// 4. Usa desestructuracion para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables con nombres diferentes.
let {name4 = name, age4 = age} = person
console.log(name4)
console.log(age4)

// 5. Usa desestructuracion para extraer dos propiedades de un objeto anidado.
let {mascota:{mascotaName}, mascota:{mascotaAge}} = person
console.log(mascotaName)
console.log(mascotaAge)

// 6. Usa propagacion para combinar dos arrays en uno nuevo.
let myArray1 = [1,2,3,4]
let myArray2 = [5,6,7,8]
let myArray3 = [...myArray1,...myArray2]
console.log(myArray3)

// 7. Usa propagacion para crear una copia de un array.
let myArray4 = [...myArray3]
console.log(myArray4)

// 8. Usa propagacion para combinar dos objetos en uno nuevo.
let newPerson = {...person, ...person2}
console.log(newPerson)

// 9. Usa propagacion para crear una copia de un objeto.
let person1 = {...person}
console.log(person)
console.log(person1)

// 10. Combina desestructuracion y propagacion.
let myArray5 = [1,2,3,4]
let myArray6 = [5,6,7,8]
let myArray7 = [...myArray5,...myArray6]
let [p1,p2,p3,p4,p5,p6,p7,p8] = myArray7
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p6)
console.log(p7)
console.log(p8)