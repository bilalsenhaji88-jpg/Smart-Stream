import { state } from "./states.js";

export function selectionnerChannel(list, channels, preview) {

    list.addEventListener("click", (event) => {

        const button = event.target.closest("button");

        if (!button) return;

        const channel = channels.find(
            item => String(item.id) === button.dataset.id
        );

        if (!channel) return;

        state.selectedId = channel.id;

        afficherPreview(channel, preview);


        const buttons = list.querySelectorAll("button");

        buttons.forEach(btn => {
            btn.classList.remove("bg-blue-600");
            btn.classList.add("bg-[#1f2937]");
        });

        button.classList.remove("bg-[#1f2937]");
        button.classList.add("bg-blue-600");

    });

}


function afficherPreview(channel, preview) {

    preview.innerHTML = `
        <img
            src="${channel.previewImage}"
            alt="${channel.name}"
            class="w-full h-full object-cover"
        >
    `;

}