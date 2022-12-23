const deadpool = {
    nombre: 'Wade',
    apellido: 'Willson',
    poder: 'Regenerarse',
    getNombre() {
        return `${this.nombre} ${this.apellido}`;
    }
}

function imprimirHeroe({ nombre, apellido, poder, edad = 90 }) {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

const heroes = ['Superman', 'Batman', 'Iron Man'];

// const h1 =  heroes[0];
// const h2 =  heroes[1];
// const h3 =  heroes[2];

const [h1, h2, h3] = heroes;

console.log(h1,h2,h3);