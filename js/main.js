import { fetchdata } from "./api.js";
import { affichage } from "./channels.js";

async function main() {
    try {
        const channels = await fetchdata();

        const container = document.getElementById("list");

        affichage(channels, container);

    } catch (error) {
         console.error("Erreur lors du chargement des chaînes :", error);
    }
}

main();