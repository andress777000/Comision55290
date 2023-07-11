//** Edad y Genero **//


let edad = prompt("Ingrese su edad")
let genero = prompt ("Ingrese su genero con m para masculino y f para femenino")


//** Desayuno **//

var dgp = prompt ("Ingrese la cantidad en gramos de proteina")
var dgv = prompt ("Ingrese la cantidad en gramos de vegetales")
var dgc = prompt ("Ingrese la cantidad en gramos de carbohidratos")
var dgl = prompt ("Ingrese la cantidad en gramos de lipidos")

var cdgp = dgp * 4                  //**Calculo de kcal por gramo **/
var cdgv = dgv * 0.5
var cdgc = dgc * 4
var cdgl = dgl * 9

var tcd = cdgp + cdgv + cdgc + cdgl         //**Calculo total de kcal **/

console.log("El total de kilo calorias ingeridas en el desayuno es de" +' '+ tcd)


//** Almuerzo **//


var agp = prompt ("Ingrese la cantidad en gramos de proteina")
var agv = prompt ("Ingrese la cantidad en gramos de vegetales")
var agc = prompt ("Ingrese la cantidad en gramos de carbohidratos")
var agl = prompt ("Ingrese la cantidad en gramos de lipidos")

var cagp = agp * 4
var cagv = agv * 0.5
var cagc = agc * 4
var cagl = agl * 9

var tca = cagp + cagv + cagc + cagl

console.log("El total de kilo calorias ingeridas en el almuerzo es de" +' '+ tca)



 //** Merienda **//


 var mgp = prompt ("Ingrese la cantidad en gramos de proteina")
 var mgv = prompt ("Ingrese la cantidad en gramos de vegetales")
 var mgc = prompt ("Ingrese la cantidad en gramos de carbohidratos")
 var mgl = prompt ("Ingrese la cantidad en gramos de lipidos")
 
 var cmgp = mgp * 4
 var cmgv = mgv * 0.5
 var cmgc = mgc * 4
 var cmgl = mgl * 9
 
 var tcm = cmgp + cmgv + cmgc + cmgl
 
 console.log("El total de kilo calorias ingeridas en la merienda es de" +' '+ tcm)
 



//** Cena  **//



var cgp = prompt ("Ingrese la cantidad en gramos de proteina")
var cgv = prompt ("Ingrese la cantidad en gramos de vegetales")
var cgc = prompt ("Ingrese la cantidad en gramos de carbohidratos")
var cgl = prompt ("Ingrese la cantidad en gramos de lipidos")

var ccgp = cgp * 4
var ccgv = cgv * 0.5
var ccgc = cgc * 4
var ccgl = cgl * 9

var tcc = ccgp + ccgv + ccgc + ccgl

console.log("El total de kilo calorias ingeridas en la cena es de" +' '+ tcc)

//** Total de kcal **//

var totcal = tcd + tca + tcm + tcc

console.log("El total de kilo calorias ingeridas en el dia es de" + ' ' + totcal)



//** Determinacion por sexo y edad de regimen calorico**//


//** De 2 a 3 años masculino **//

if (genero == "m" && 2 <= edad && edad <= 3) {

    if (totcal < 1000) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1000kcal)")
    } else if (totcal == 1000) {
        console.log("Estas alimentandote correctamente (1000kcal) ")
    } else if (totcal > 1000) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1000kcal)")
    } 
}

//** De 4 a 8 años masculino **//

else if (genero == "m" && 4 <= edad && edad <= 8) {

    if (totcal < 1500) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1500kcal)")
    } else if (totcal == 1500) {
        console.log("Estas alimentandote correctamente (1500kcal) ")
    } else if (totcal > 1500) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1500kcal)")
    }  
}


//** De 9 a 13 años masculino **//

else if (genero == "m" && 9 <= edad && edad <= 13) {

    if (totcal < 2000) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2000kcal)")
    } else if (totcal == 2000) {
        console.log("Estas alimentandote correctamente (2000kcal) ")
    } else if (totcal > 2000) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2000kcal)")
    }
}


//** De 14 a 18 años masculino **//

else if (genero == "m" && 14 <= edad && edad <= 18) {

    if (totcal < 2600) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2600kcal)")
    } else if (totcal == 2600) {
        console.log("Estas alimentandote correctamente (2600kcal) ")
    } else if (totcal > 2600) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2600kcal)")
    }
}


//** De 19 a 30 años masculino **//

else if (genero == "m" && 19 <= edad && edad <= 30) {

    if (totcal < 2700) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2700kcal)")
    } else if (totcal == 2700) {
        console.log("Estas alimentandote correctamente (2700kcal) ")
    } else if (totcal > 2700) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2700kcal)")
    }
}


//** De 31 a 50 años masculino **//

else if (genero == "m" && 31 <= edad && edad < 50) {

    if (totcal < 2500) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2500kcal)")
    } else if (totcal == 2500) {
        console.log("Estas alimentandote correctamente (2500kcal) ")
    } else if (totcal > 2500) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2500kcal)")
    }
}


//** Mayores de 50 años masculino **//

else if (genero == "m" && edad >= 50) {

    if (totcal < 2300) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2300kcal)")
    } else if (totcal == 2300) {
        console.log("Estas alimentandote correctamente (2300kcal) ")
    } else if (totcal > 2300) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2300kcal)")
    }
}


//**  **//


//** De 2 a 3 años femenino **//

else if (genero == "f" && 2 <= edad && edad <= 3) {

    if (totcal < 1000) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1000kcal)")
    } else if (totcal == 1000) {
        console.log("Estas alimentandote correctamente (1000kcal) ")
    } else if (totcal > 1000) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1000kcal)")
    }
}

//** De 4 a 8 años femenino **//

else if (genero == "f" && 4 <= edad && edad <= 8) {

    if (totcal < 1500) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1500kcal)")
    } else if (totcal == 1500) {
        console.log("Estas alimentandote correctamente (1500kcal) ")
    } else if (totcal > 1500) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1500kcal)")
    }
}


//** De 9 a 13 años femenino **//

else if (genero == "f" && 9 <= edad && edad <= 13) {

    if (totcal < 1800) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1800kcal)")
    } else if (totcal == 1800) {
        console.log("Estas alimentandote correctamente (1800kcal) ")
    } else if (totcal > 1800) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1800kcal)")
    }
}


//** De 14 a 18 años femenino **//

else if (genero == "f" && 14 <= edad && edad <= 18) {

    if (totcal < 2000) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2000kcal)")
    } else if (totcal == 2000) {
        console.log("Estas alimentandote correctamente (2000kcal) ")
    } else if (totcal > 2000) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2000kcal)")
    }
}


//** De 19 a 30 años femenino **//

else if (genero == "f" && 19 <= edad && edad <= 30) {

    if (totcal < 2100) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2100kcal)")
    } else if (totcal == 2100) {
        console.log("Estas alimentandote correctamente (2100kcal) ")
    } else if (totcal > 2100) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2100kcal)")
    }
}


//** De 31 a 50 años femenino **//

else if (genero == "f" && 31 <= edad && edad < 50) {

    if (totcal < 2000) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 2000kcal)")
    } else if (totcal == 2000) {
        console.log("Estas alimentandote correctamente (2000kcal) ")
    } else if (totcal > 2000) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 2000kcal)")
    }
}


//** Mayores de 50 años femenino **//

else if (genero == "f" && edad >= 50) {

    if (totcal < 1800) {
        console.log("Estas alimentandote por debajo de lo recomendado (menos de 1800kcal)")
    } else if (totcal == 1800) {
        console.log("Estas alimentandote correctamente (1800kcal) ")
    } else if (totcal > 1800) {
        console.log("Estas alimentandote por encima de lo recomendado (mas de 1800kcal)")
    }
}








