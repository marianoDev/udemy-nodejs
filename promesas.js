const empleados = [
    {
        id: 1,
        nombre: 'Fernandito'
    },
    {
        id: 2,
        nombre: 'Alvarito'
    },
    {
        id: 3,
        nombre: 'Menganito'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id ) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
    
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con id ${id}`)
        }
    });

    return promesa;

}

const getSalario = (id) => {
    const promesaSalario = new Promise( (resolve, reject) => {
        const salario = salarios.find( s => s.id === id )?.salario;

        if (salario) {
            resolve(salario);
        } else {
            reject(`No existe salario con el id ${id}`);
        }
    } );
    return promesaSalario;
}

const id = 2;

// getEmpleado(id) 
//     .then(empleado => console.log(empleado))
//     .catch( error => console.log(error));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(error => console.log(error));

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'recibe un salario de', salario))
    .catch( error => console.log(error));