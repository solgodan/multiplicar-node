const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Hacemos referencia ala posicion o del arreglo, donde estan los comandos de entrada
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo.green}`))
            //.then(archivo => console.log(`Archivo creado ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

// console.log(process.argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(argv.base);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${ archivo}`))
    .catch(e => console.log(e));
    */