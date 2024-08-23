// Quiero que trabajes con estructuras de control de flujo. Esta forma complicada de decirlo significa que, 
// al igual que en los juegos, la historia que desarrolles debe adaptarse a las respuestas dadas por quien está jugando.

//  Para ello, necesitarás algunas estructuras capaces de alterar el flujo de la aplicación, como for, while, if y else. 
//  Todas estas pueden cumplir con este objetivo, dada una cierta condición.

// Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

//  -Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
//  -Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, 
//  podrá aprender C# o aprender Java.
//  -Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose 
//  en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico 
//  para cada elección.

//  -Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
// Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** 
// a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que 
// complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la 
// tecnología ingresada.
 

// Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse 
// en el área de programación.

// Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
let area = prompt("Que área deseas seguir :  Front-End o seguir hacia el área de Back-End");
if(area.toLocaleLowerCase() == "front-end"){
    alert("Desear aprender React o aprender Vue");
}else if(area.toLowerCase() == "back-end"){
    alert("Desear prender C# o aprender Java");
}else {
let otraArea = prompt("independientemente de las elecciones anteriores, que otra área eligirias para convertirse en Fullstack");
alert(`Elegiste especializarte en ${otraArea} muy buena eleccion`);
}

let continuar = true;
while( continuar ){
    let tecnología = prompt(" qué tecnologías le gustaría especializarse o conocer");
    let tecnología2 = prompt("¿Hay alguna otra tecnología que te gustaría aprender ? Si / No");

    if (tecnología2.toLocaleLowerCase() === "si"){
      alert ((`${tecnología} es una tecnología interesante!`));
      continuar = true;
    }else if(tecnología2.toLocaleLowerCase() === "no"){
        alert ("Gracias por compartir tus intereses en tecnologías");
        continuar = false;
    }else{
        alert("Por favor, ingresa 'Si' o 'No'.");
    continuar = true; // Vuelve a preguntar si la respuesta no es válida
    }
}

