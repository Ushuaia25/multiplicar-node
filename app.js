const argv = require('./config/yargs.js').argv;

const multiplicar = require('./multiplicar.js');

const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listado:');
        multiplicar.listarTabla(argv.base, argv.limite)
            .then(listado => console.log(`${listado}`.green))
            .catch(error => console.log(error));
        break;

    case 'crear':
        console.log('Crear');
        multiplicar.crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado:`, ` ${archivo}`.green))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido'.red);
}