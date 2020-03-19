const fs = require('fs');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let buffer = '';

        for (let i = 0; i <= limite; i++) {
            buffer += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, buffer, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tablas/tabla${base}.txt`);

        });

    });

}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let buffer = '';

        for (let i = 0; i <= limite; i++) {
            buffer += `${base} * ${i} = ${base*i} \n`;
        }

        resolve(buffer);
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}