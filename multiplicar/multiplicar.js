//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==============================='.bgMagenta);
    console.log(`Tabla del ${base}`.bgMagenta);
    console.log('==============================='.bgMagenta);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)

    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el dato ${base} no es un nùmero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt `)

        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}