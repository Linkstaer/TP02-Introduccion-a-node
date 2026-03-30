import { URL } from "url";

function parsearUrl(urlString) {
    const url = new URL(urlString);

    const parametros = {};
    url.searchParams.forEach((valor, clave) => {
        parametros[clave] = valor;
    });

    return {
        host: url.origin,
        pathname: url.pathname,
        parametros: parametros
    };
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

console.log(objeto);