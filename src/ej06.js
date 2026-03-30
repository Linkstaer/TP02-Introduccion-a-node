import { URL } from "url";

function parsearUrl(urlString) {
    try {
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

    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
    }
}

let objeto1 = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto1);

let objeto2 = parsearUrl("esto_no_es_una_url_valida");
console.log(objeto2);