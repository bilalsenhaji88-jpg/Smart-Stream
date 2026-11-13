export const state = {
    selectedId: null
};

export function afficherLoading(container) {
    container.innerHTML = Array.from({ length: 6 }, () => `
        <div class="h-16 rounded-lg bg-[#1f2937] animate-pulse"></div>
    `).join("");
}

export function afficherErreur(container, message) {
    container.innerHTML = `
        <div class="p-4 rounded-lg bg-red-900/40 text-sm">
            <p class="mb-3">${message}</p>
            <button id="retry-btn" class="px-3 py-2 rounded bg-blue-600">
                Réessayer
            </button>
        </div>
    `;

    container.querySelector("#retry-btn")
        .addEventListener("click", () => location.reload());
}

export function afficherVide(container, search) {
    container.innerHTML = `
        <p class="p-4 text-sm text-gray-400">
            Aucune chaîne trouvée pour « <span id="empty-search"></span> »
        </p>
    `;

    container.querySelector("#empty-search").textContent = search;
}