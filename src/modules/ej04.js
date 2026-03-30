import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaEntrada = path.join(__dirname, "../../entrada.txt");
const rutaSalida = path.join(__dirname, "../../salida.txt");

function copiar(rutaEntrada, rutaSalida) {
    fs.readFile(rutaEntrada, "utf-8", (error, data) => {
        if (error) {
            console.error("Error al leer el archivo:", error.message);
            return;
        }

        fs.writeFile(rutaSalida, data, (error) => {
            if (error) {
                console.error("Error al escribir el archivo:", error.message);
                return;
            }

            console.log("Archivo copiado correctamente");
        });
    });
}

copiar(rutaEntrada, rutaSalida);