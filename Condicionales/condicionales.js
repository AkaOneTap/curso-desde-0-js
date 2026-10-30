//estructuras de control condicionales

//if else if else
let x = 100
if(x<100){
    console.log("es menos que 100")
}else if(x>100){
    console.log("es mayor que 100")
}else{
    console.log("es igual a 100")
}
// operador ternario
const equidad = x == 100 ?  "el numero es 100" : "el numero no es 100"
//switch
x = 0
switch(x){
case 0:
console.log("x es menor que 100") 
break
case 1:
console.log("x es mayor que 100")
break
case 2:
console.log("x es igual a 100")
break
default: console.log("te pasaste de listo")
}

