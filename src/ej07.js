import { countries, currencies } from "country-data";

function obtenerMoneda(codigoPais) {
    const pais = countries[codigoPais];

    if (!pais) {
        return "País no encontrado";
    }

    const codigoMoneda = pais.currencies[0];

    const moneda = currencies[codigoMoneda];

    if (moneda && (moneda.name === "Argentine Peso" || moneda.name === "Argentine peso")) {
        return "Peso Argentino";
    }

    return moneda ? moneda.name : "Moneda no encontrada";
}

let moneda = obtenerMoneda("AR");

console.log(moneda);