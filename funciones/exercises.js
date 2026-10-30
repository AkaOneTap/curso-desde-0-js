//1. Crea una función que reciba dos números y devuelva susuma.
function mySuma(a,b){
    return a+b
}
//2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
function myUpNumberArray(myArray){
    let myNumber = 0
    for(let values of myArray){
        if(values >= myNumber){
        myNumber = values
        }
    }
    return myNumber
}
 let myArray = [2,15,6,8,10]
 console.log(myUpNumberArray(myArray))
//3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
function myVocals(frase){
    let cont = 0
    const vocals = "aeiou"
    for(let letra of frase){
        if(vocals.includes(letra)){
            cont++
        }
    }
    return cont
}
console.log(myVocals("hola como"))
//4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
 function toCase(names){
    for(let i = 0; i <names.length; i++){
    names[i] = names[i].toUpperCase()
    }
 return names
 }
let myArrayOfNames = ["christian", "pablo", "iria"]
console.log(toCase(myArrayOfNames))
//5. Crea una función que reciba un número y devuelva true sies primo, y false en caso contrario.
function isPrimo(a){
    let cont = 0
    for(let i = 1; i<=a ;i++){
    if(a%i == 0){
        cont++
    }
    }
    if(cont<=2){
        return true
    }else return false
}
console.log(isPrimo(79))
//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entreambos.
function myComunes(a,b){
    let myArray = []
    for(let i = 0; i < a.length ; i++){
        for(let x = 0; x < b.length ; x++ ){
            if(a[i] == b[x]){
                myArray.push(a[i])
            }
        }
    }
    return myArray
}
console.log(myComunes([100,4,80,8,90],[2,5,6,9,10]))

//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
function sumEvenNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    return sum
}
//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado alcuadrado.
function squareNumbers(numbers) {
    let squaredNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i])
    }
    return squaredNumbers
}
//9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function reverseWords(sentence) {
    let words = sentence.split(" ")
    let reversedWords = []
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i])
    }
    return reversedWords.join(" ")
}
//10. Crea una función que calcule el factorial de un número dado.
function myFactorial(a){
    let factorial = 1
    for(let i = 1; i <= a; i++){
    factorial =  factorial * i
    }

    return factorial
}
console.log(myFactorial(9))