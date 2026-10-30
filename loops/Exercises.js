//1. Crea un bucle que imprima los números del 1 al 20.
for(let i = 1;i <= 20; i++){
    console.log(i)
}
//2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
let myCount = 0
for(let i=1;i<=100;i++){
myCount += i
}
console.log(myCount)
//3. Crea un bucle que imprima todos los números pares entre 1 y 50.
for(let i = 1; i<=50; i++){
    if((i%2)==0){
        console.log(i)
    }
}
//4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
const myNames = ["paula","lucia","christian","iria"]
for(let valor of myNames){
    console.log(valor)
}
//5. Escribe un bucle que cuente el número de vocales en una cadena de texto.
let myString = "aaaaaaaaa"
const vocales ="aeiou"
let myCount1 = 0
for(let valor of myString){
    if(valor === "a"||
        valor === "e"||
        valor === "i"||
        valor === "o"||
        valor === "u"){myCount1 = myCount1+1}
}console.log(myCount1)
//6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
let myArray = [1,5,6,7,8,2,3]
let myResult = 1
for(let values of myArray){
    myResult = myResult * values
}console.log(myResult)
//7. Escribe un bucle que imprima la tabla de multiplicar del 5.
for(let i = 0; i<=10 ; i++){
    console.log(i*5)
}
//8. Usa un bucle para invertir una cadena de texto.
let myUser = "akas"
let myEvilUser = []
let timer = 0
for(let x = myUser.length-1; x >= 0 ; x--){
    myEvilUser[timer] = myUser[x]
    timer++
}console.log(myEvilUser)
//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)
//10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.
let myNumbers = [2,4,5,6,7,8,9,12,5,7,8,19]
let myBigNumbers = []
for(let values of myNumbers){
    if(values > 10){
        myBigNumbers.push(values)
    }
}
console.log(myBigNumbers)


