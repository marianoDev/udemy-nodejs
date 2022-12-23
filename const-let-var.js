// let y const crea variables de scope
// var solo crea en global

const nombre = 'Wolverine';

if (true) {
    const nombre = 'Magneto';

    console.log(nombre);
}

console.log(nombre);