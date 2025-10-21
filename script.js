let nombre;

do {
nombre = prompt("¿Cómo te llamas?");

} while (nombre === null || nombre.trim() === "");

alert ("hola " + nombre);


