export function affichage(channels, container) {
    container.innerHTML = channels.map(channel => `
        <div class="flex items-center gap-3 p-3 rounded-lg bg-[#1f2937]">
            <img
                src="${channel.logo}"
                alt="${channel.name}"
                class="w-10 h-10 object-contain"
            >

            <div>
                <p class="text-sm font-medium">${channel.name}</p>
                <p class="text-xs text-gray-400">${channel.channelNumber}</p>
            </div>
        </div>
    `).join("");
}