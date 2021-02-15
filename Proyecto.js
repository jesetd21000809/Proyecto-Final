//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000
var ciclo = 1
 
//Valores de los recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var recargo_edad
var recargo_conyuge
var recargo_hijos
var cantidad
//Recargo
var recargo = 0
var recargo_total = 0

//Precio final
var precio_final = 0
while (ciclo == 1 ){
//Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if (edad < 18) {
  alert("Necesita ser mayor de edad para obtener el seguro")
  .close()
}

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
//convirtiendo las edades ingresadas a números
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
if ("NO"== casado.toUpperCase()){
  var edad_conyuge_numero =0;
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene?")
}

//convirtiendo las edades ingresadas a números
var cantidad_numero = parseInt(cantidad)
var cantidad_hijos_numero = 0
//convirtiendo la cantidad de hijos si tiene
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}

/**
 * 1. convierta la cantidad de hijos a numero
 */
var propiedad = prompt("Ingrese el número de propiedades que tiene")
var recargo_propiedad = 0.35
var recargo_propiedad_total
recargo_propiedad_total=(precio_base*recargo_propiedad)*propiedad

var salario = prompt("Ingrese su salario en numeros")
var recargo_salario=0.05
var recargo_salario_total=salario*recargo_salario

//Aquí debe calcular el recargo total basado en las respuestas ingresadas
if(edad>=18 && edad<25){
  recargo_edad=precio_base*edad_18
}else if(edad>=25 && edad<50){
  recargo_edad=precio_base*edad_25
}else if(edad>=50){
  recargo_edad=precio_base*edad_50
}

/**
 * 2. Recargo por la edad del conyuge
 */if (edad_conyuge_numero>=18 && edad_conyuge_numero<25){
   recargo_conyuge=precio_base*casado_18
 }else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
   recargo_conyuge=precio_base*casado_25
 }else if (edad_conyuge_numero>=50){
   recargo_conyuge=precio_base*casado_50
 }else if (edad_conyuge_numero===0){
   recago_conyuge=0
 }

/**
 * 3. Recargo por la cantidad de hijos
 */recargo_hijos=(precio_base*hijos_recargo)*cantidad_hijos_numero
 
 
//Aquí es donde debe de calcular los recargos y el valor final
 recargo_total= recargo_edad+recargo_conyuge+recargo_hijos+recargo_propiedad_total+recargo_salario_total
precio_final = precio_base + recargo_total

//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

var ciclo= prompt("Desea realizar otra cotización 1=SI 0=NO")
}
