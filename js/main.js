import {fetchdata} from "./api.js";
import {affichage} from "./channels.js";
import {filtrerChannels} from "./search.js";
import {selectionnerChannel} from "./preview.js";
import {afficherLoading, afficherErreur, afficherVide} from "./states.js";

async function main() {

    const container = document.getElementById("list");
    const searchInput = document.getElementById("search-input");
    const preview = document.getElementById("preview-container");
    const backBtn = document.getElementById("back-btn");

    afficherLoading(container);

    try {
        const channels = await fetchdata();

        let currentChannels = channels;

        function afficherPays() {
            const pays = [...new Set(channels.map(channel => channel.country))];

            container.innerHTML = pays.map(p => `
                <button data-country="${p}" class="w-full p-3 rounded-lg bg-[#1f2937] hover:bg-blue-600 text-left text-sm">
                    ${p}
                </button>
            `).join("");

            backBtn.classList.add("hidden");
        }

        afficherPays();

        container.addEventListener("click", (event) => {
            const btn = event.target.closest("button[data-country]");

            if (!btn) return;

            currentChannels = channels.filter(channel => channel.country === btn.dataset.country);
            affichage(currentChannels, container);
            backBtn.classList.remove("hidden");
        });

        backBtn.addEventListener("click", () => {
            currentChannels = channels;
            searchInput.value = "";
            afficherPays();
        });

        selectionnerChannel(container, channels, preview);

        searchInput.addEventListener("input", function () {

            const search = searchInput.value;

            if (search === "") {
                if (currentChannels === channels) {
                    afficherPays();
                } else {
                    affichage(currentChannels, container);
                }
                return;
            }

            const result = filtrerChannels(currentChannels, search);

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