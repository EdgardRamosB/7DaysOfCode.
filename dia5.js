// Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".


// A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

// let comida = ["papa,leche,huevi"];
// console.log(comida);
// comida.push("arroz");
// console.log(comida);

// Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.
// Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

//  Si añades a tu lista:

// banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
// El programa debería imprimir, por ejemplo:
// Lista de compras:

// Frutas: banana, tomate, manzana, uva, aguacate

// Lácteos: leche vegetal, leche de vaca, leche en polvo

// Congelados: 

// Dulces: chicle y gominola

let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let agregarMas = prompt("deseas agregar un alimento a tu lista de compras Si / No");

while ( agregarMas.toLowerCase() === "si" ){

    let comida = prompt("Quué alimento deseas agregar"); //uva
    let categoria = prompt("Qué categoría crees encaja ese alimento: frutas, lacteos, congelados dulces");//frutas

    if (categoria.toLowerCase() == "frutas"){
        frutas.push(comida);
    }else if (categoria.toLowerCase() == "lacteos"){
        lacteos.push(comida);
    }else if(categoria.toLowerCase() == "congelados"){
        congelados.push(comida);
    }else if(categoria.toLowerCase() == "dulces"){
        dulces.push(comida);
    }else{
        alert("Opcion no valida");
    }
 agregarMas = prompt("Desea agregar algun otro alimento Si / No");
 
}

alert(`FRUTAS : ${frutas} \nLACTEOS :  ${lacteos} \nCONGELADOS : ${congelados} \nDULCES : ${dulces} `);