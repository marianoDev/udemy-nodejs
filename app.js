import colors from 'colors';

import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput, listadoBorrar, confirmar, listadoChecklist } from './helpers/inquirer.js';
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) { // Establecer tareas
        tareas.cargarTareasArray(tareasDB);
      }
    
    do {
        // Imprime el menú
        opt = await inquirerMenu();        
        
        // Listar tareas
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion:')
                tareas.crearTarea(desc);
            break;

            case '2':
                // listar opciones
                tareas.listadoCompleto();
            break;

            case '3':
                // listarCompletadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                // listarPendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                // Completar Tareas
                const ids = await listadoChecklist(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                // borrarTareas
                const id = await listadoBorrar(tareas.listadoArray);
                if (id != '0') {
                    const ok =  await confirmar('Esta seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada')
                    }
                }
            break;
            
        }

        guardarDB(tareas.listadoArray);

        await pausa();

    } while( opt !== '0' )
}

main();