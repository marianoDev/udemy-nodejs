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



const getInfoUsuario = async(id) => {

    
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
        
    } catch (error) {
        throw error;
    }
}

const id = 1;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN!')
        console.log(msg) 
    })
    .catch( err => {
        console.log('TODO MAL!')
        console.log( err ) 
    });
