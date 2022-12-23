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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario= (id, callback) => {

    const salario = salarios.find( s => s.id === id )?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }

}

const id = 10;

getEmpleado( id, (error, empleado) => {
    
    if (error) {
        console.log('ERROR!');
        return console.log(error);
    }

    console.log(empleado.nombre);
})

getSalario(id, (error, salario) => {
    
    if (error) {
        return console.log(error);
    }

    console.log('El empleado:', empleado, 'tiene un salario de:', salario )
}) 