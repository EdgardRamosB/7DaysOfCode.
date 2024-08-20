function tarea (){
let nombre = prompt("Cual es tu nombre");
let edad = prompt("Cual es tu edad");
let lenguajeProgramacion = prompt("Que lenguaje estas estudiando");
// Al final, el sistema mostrará el mensaje:
// "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramacion}`);
// Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:
// ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
// Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
let gusto = prompt(`te gusta estudiar ${lenguajeProgramacion} Responde con el número 1 para SÍ o 2 para NO`);
if (gusto == 1){
alert("Muy bien! Sigue estudiando y tendrás mucho éxito.");
}else if(gusto == 2){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes");
}else{
    alert("Seleciona una opcion correcta");
}
}
tarea();