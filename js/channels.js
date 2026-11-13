import { state } from "./states.js";

export function affichage(channels, container) {
    container.innerHTML = channels.map(channel => `
        <button data-id="${channel.id}" class="w-full  flex items-center gap-3 p-3 rounded-lg ${String(channel.id) === String(state.selectedId) ? "bg-blue-600" : "bg-[#1f2937]"}">
            <img
                src="${channel.logo}"
                alt="${channel.name}"
                class="w-20 h-10 object-contain"
            >
            <div >
                <p class="text-sm font-medium">${channel.name}</p>
                <p class="text-xs text-gray-400">${channel.channelNumber}</p>
            </div>
        </button>
    `).join("");
}