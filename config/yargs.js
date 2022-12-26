const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Lista el contenido'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de tabla'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser number'
        }
        return true
    })
    .argv;


    module.exports = argv;