//1. Crea una clase que reciba dos propiedades.
class Person{
    name
    age
    size

    constructor(name,age,size){
        this.name=name,
        this.age=age,
        this.size=size
    }
    //2. Añade un método a la clase que utilice las propiedades.
    saludar(){
      console.log(`${this.name} te saluda`)
    }
    //4. Añade un método estático a la primera clase.
    static andar(){
        console.log("andando")
    }
}
let myPerson = new Person("christian",24,185)
console.log(myPerson)

//3. Muestra los valores de las propiedades e invoca a la función.
console.log(myPerson.name)
console.log(myPerson.age)
myPerson.saludar()

//5. Haz uso del método estático.
Person.andar()
//6. Crea una clase que haga uso de herencia.
class Bro extends Person{}
let myBro = new Bro("noa",23,156)
console.log(myBro)
myBro.saludar()

//7. Crea una clase que haga uso de getters y setters.
class Animal{
    name
    age
    raza
    constructor(name,age,raza){
        this.name=name,
        this.age=age,
        this.raza=raza
    }
    sound(){
      console.log(`${this.name} te hace sonidos genericos`)
    }

    get name(){
        return this.name
    }
    set name(name){
        this.name=name
    }
}
//8. Modifica la clase con getters y setters para que use propiedades privadas.
class Pez{
    #name
    #age
    #raza
    constructor(name,age,raza){
        this.#name=name,
        this.#age=age,
        this.#raza=raza
    }
    sound(){
      console.log(`${this.name} te hace sonidos genericos`)
    }

    get name(){
        return this.#name
    }
    set name(name){
        this.#name=name
    }
    get age(){
        return this.#age
    }
    set age(age){
        this.#age=age
    }
    get raza(){
        return this.#raza
    }
    set raza(raza){
        this.#raza=raza
    }
}

//9. Utiliza los get y set y muestra sus valores.
let myPez = new Pez("fer",2,"marlo")
console.log(myPez.name)
console.log(myPez.raza)
console.log(myPez.age)
myPez.name = "car"
myPez.age = 4
myPez.raza = "payaso"
console.log(myPez.name)
console.log(myPez.raza)
console.log(myPez.age)

//10. Sobrescribe un método de una clase que utilice herencia.

class Pezespada extends Pez{
    sound(){
        console.log(`${this.raza} te mira fijamente`)
    }
}

let myPezEspada = new Pezespada("carlos", 24, "pezespada")
myPezEspada.sound()