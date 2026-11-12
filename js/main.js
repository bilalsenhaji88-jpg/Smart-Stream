
import { fetchdata } from "./api.js";
import { affichage } from "./channels.js";
import { filtrerChannels } from "./search.js";

async function main() {
    try {
        const channels = await fetchdata();

        const container = document.getElementById("list");
        const searchInput = document.getElementById("search-input");

        affichage(channels, container);

        searchInput.addEventListener("input", function () {

            const search = searchInput.value;

            const result = filtrerChannels(channels, search);

            affichage(result, container);

        });

    } catch (error) {
        console.error("Erreur lors du chargement des chaînes :", error);
    }
}

main();
