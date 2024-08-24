// ¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? 
// Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!
// Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 
// para el número que vas a adivinar (por ejemplo, el 7).
// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, 
// te felicitará. Si te equivocas, te dará 2 intentos más.
// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
// Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

//  CONSEJO 

// Piensa muy bien en qué estructura de repetición utilizarás para hacer que tu programa se ejecute hasta que 
// se agoten las 3 oportunidades o hasta que la persona acierte el número.

//  Recuerda que siempre puedes personalizar tu programa como desees.
// No olvides compartirlo en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.
alert("HOY REGRESAREMOS A NUESTRA INFANCIA , ADIVINARAS EL NUMRO QUE ESTOY PENSANDO ");

let numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);
let intentos = 3
let i = 0;
while( i < intentos){
  let numeroUsuario = parseInt(prompt("Ingresa el numero"));
  if(numeroUsuario == numeroSecreto){
    alert(`Felicidades , acertaste; FELICIDADES CAMPEON`)
    break;
  }else{
    alert(`Perdiste; te quedan ${(intentos - i) - 1} ${i == 1 ? "intento" : "intentos"}`);
    //                               3  - 0    -   1 //    0 == 1       intents
    //                                       2        //     intentos
    
    //                               3  - 1    -   1 //    1 == 1        intento
    //                                       1        //    intento

    //                               3  - 2    -   1 //    2 == 1        intento
    //                                      0        //     intentos



  }
  i++
}
//let i = 0 ; i 


