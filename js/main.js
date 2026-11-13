import {fetchdata} from "./api.js";
import {affichage} from "./channels.js";
import {filtrerChannels} from "./search.js";
import {selectionnerChannel} from "./preview.js";
import {afficherLoading, afficherErreur, afficherVide} from "./states.js";

async function main() {

    const container = document.getElementById("list");
    const searchInput = document.getElementById("search-input");
    const preview = document.getElementById("preview-container");

    afficherLoading(container);

    try {
        const channels = await fetchdata();

        affichage(channels, container);

        selectionnerChannel(container, channels, preview);

        searchInput.addEventListener("input", function () {

            const search = searchInput.value;

            const result = filtrerChannels(channels, search);

            if (result.length === 0) {
                afficherVide(container, search);
            } else {
                affichage(result, container);
            }

        });

    } catch (error) {
        console.error("Erreur lors du chargement des chaînes :", error);
        afficherErreur(container, "Impossible de charger les chaînes. Vérifie ta connexion.");
    }
}

main();