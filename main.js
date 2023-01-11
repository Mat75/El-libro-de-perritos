var personajesTop = ["Goku","Bills","Vegeta"];
document.getElementById("declarar_arrays").innerHTML=personajesTop
//Cómo declarar un array. El id para referirnos al innerHTML es declarar_arrays
    
    //Cómo obtener el primer elemento de un array. El id para referirnos al innerHTML es acceder_primer_elemento
var personaje1 = personajesTop[0]
document.getElementById("acceder_primer_elemento").innerHTML=personaje1
    //Cómo obtener el segundo elemento de un array. El id para referirnos al innerHTML es acceder_segundo_elemento
    var personaje2 = personajesTop[1]
    document.getElementById("acceder_segundo_elemento").innerHTML=personaje2
    //Cómo obtener el tercer elemento de un array. El id para referirnos al innerHTML es acceder_tercer_elemento
    var personaje3 = personajesTop[2]
    document.getElementById("acceder_tercer_elemento").innerHTML=personaje3
    //Cómo obtener la longitud del array. El id para referirnos al innerHTML es ver_longitud_del_array
  var longitud = personajesTop.length
  document.getElementById("ver_longitud_del_array").innerHTML=longitud
    //Cómo crear un bucle del array. El id para referirnos al innerHTML es bucle_del_array
   var valor = ""
   for(i=0;i<longitud;i++){
    valor = valor + personajesTop[i] + "<br>"
   }
   document.getElementById("bucle_del_array").innerHTML=valor
    //Añadir un elemento al final de un array con el método push
    
    //Cómo añadir un elemento al final de un array. El id para referirnos al innerHTML es añadir_elemento_al_final_de_un_array
    personajesTop.push("Broly")
    document.getElementById("añadir_elemento_al_final_de_un_array").innerHTML=personajesTop
    //Cómo añadir más elementos al final de un array. El id para referirnos al innerHTML es añadir_más_elementos_al_final_de_un_array
    personajesTop.push("Freezer")
    document.getElementById("añadir_más_elementos_al_final_de_un_array").innerHTML=personajesTop
    //Cómo declarar un array con el alfabeto. El id para referirnos al innerHTML es ver_array_alfabeto
    var alfabeto = ["l" ,"a" , "e" , "j" , "b" , "g" , "f" , "h" , "c" , "d" , "i" , "k"];
    document.getElementById("ver_array_alfabeto").innerHTML=alfabeto
    //Cómo ordenar el array del alfabeto. El id para referirnos al innerHTML es ver_array_alfabeto_ordenado
    alfabeto.sort()
    document.getElementById("ver_array_alfabeto_ordenado").innerHTML=alfabeto
    //Cómo invertir el array. El id para referirnos al innerHTML es ver_array_invertido
    alfabeto.reverse()
    document.getElementById("ver_array_invertido").innerHTML=alfabeto
    //Cómo declarar un array con números. El id para referirnos al innerHTML es ver_array_num
    var numeros = ["5","15","17","57","27"];
    document.getElementById("ver_array_num").innerHTML=numeros
    //Cómo declarar un número con valor máximo del array con números. El id para referirnos al innerHTML es ver_num_max
  var maximo = Math.max.apply(Math,numeros)
  document.getElementById("ver_num_max").innerHTML=maximo
    //Cómo encontrar el número con valor mínimo del array con números. El id para referirnos al innerHTML es ver_num_min
    var minimo = Math.min.apply(Math,numeros)
    document.getElementById("ver_num_min").innerHTML=minimo

    console.log("ACTIVIDAD ADICIONAL");

    //Añadir un elemento al inicio de un array con el método unshift 
    
    //Cómo añadir un elemento al inicio de un array. El id para referirnos al innerHTML es añadir_elemento_al_inicio_del_array
    personajesTop.unshift("krillin")
    document.getElementById("añadir_elemento_al_inicio_del_array").innerHTML=personajesTop
    //How to more elements at the start of the array ? El id para referirnos al innerHTML es añadir_más_elementos_al_inicio_del_array
    personajesTop.unshift("Maestro Roshi")
    document.getElementById("añadir_más_elementos_al_inicio_del_array").innerHTML=personajesTop
    //Cómo remover un elemento al inicio de un array. El id para referirnos al innerHTML es remover_elemento_al_inicio_del_array
    personajesTop.shift()
    document.getElementById("remover_elemento_al_inicio_del_array").innerHTML=personajesTop
    //Cómo remover un elemento al final de un array. El id para referirnos al innerHTML es remover_elemento_al_final_del_array
    personajesTop.pop()
    document.getElementById("remover_elemento_al_final_del_array").innerHTML=personajesTop
    //Cómo declarar un array con países del primer mundo 
    var primerMundo = ["México","USA","Canada"];
    //Cómo declarar un array con países del primer mundo 
    var primerMundoV2 = ["Francia","Italia","Alemania"]
    //Cómo unir dos arrays. El id para referirnos al innerHTML es unir_dos_arrays
    var segundoMundo = primerMundo.concat(primerMundoV2);
    document.getElementById("unir_dos_arrays").innerHTML=segundoMundo