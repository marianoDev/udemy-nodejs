const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
try {
    
let salida = '';
let consola = '';

for( i = 1; i <= hasta; i++) {
salida += `${base} X ${i} = ${base * i}\n`;
consola += `${base} ${'X'.blue} ${i} ${'='.blue} ${base * i}\n`;
}
    
    if (listar) {
        console.log('================='.green);
        console.log(`   TABLA DEL ${base}`.blue);
        console.log('================='.green);    
        console.log(salida);
    }
    
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;

} catch (error) {
    throw error;          
}
}
module.exports = {
    crearArchivo: crearArchivo
};