
let edad = prompt("Ingrese su edad")
let genero = prompt ("Ingrese su genero con m para masculino y f para femenino")

var dgp = prompt ("Ingrese la cantidad en gramos de proteina")
var dgv = prompt ("Ingrese la cantidad en gramos de vegetales")
var dgc = prompt ("Ingrese la cantidad en gramos de carbohidratos")
var dgl = prompt ("Ingrese la cantidad en gramos de lipidos")

var cdgp = dgp * 4
var cdgv = dgv * 0.5
var cdgc = dgc * 4
var cdgl = dgl * 9

var tca = cdgp + cdgv + cdgc + cdgl

console.log("El total de kilo calorias ingeridas en el almuerzo es de" +' '+ tca)

