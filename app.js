import {} from 'dotenv/config';

import { inquirerMenu, leerInput, listarLugares, pausa } from './helpers/inquirer.js';
import Busquedas from './models/busquedas.js';

// console.log(process.env.MAPBOX_KEY);

const main = async () => {
    let optMenu;

    // Nueva instancia de la class Busquedas
    const busquedas = new Busquedas();

    // bucle que me permite levantar las opciones del menú.
    do {

        optMenu = await inquirerMenu();
        
        switch (optMenu) {
            case 1:
                // Si la optMenu es 1, mostrar mensaje para que pueda escribir
                const termino = await leerInput('Ciudad: ');
                
                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSelec = lugares.find( l => l.id === id);

                // Guardar en DB
                busquedas.agregarHistorial(lugarSelec.nombre);
                
                // Datos de clima
                const clima = await busquedas.climaLugar(lugarSelec.lat, lugarSelec.lng);

                // Mostrar resultados
                console.clear();
                console.log('\nInfo de la ciudad\n'.green);
                console.log('Ciudad:', lugarSelec.nombre);
                console.log('Lat:', lugarSelec.lat);
                console.log('Lng:', lugarSelec.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);
            break;

            case 2:
            
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })

            break;
        
        }

        if (optMenu !== 0) await pausa();

    } while ( optMenu !== 0 )

}

main();