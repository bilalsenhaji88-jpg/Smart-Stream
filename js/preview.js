import { state } from "./states.js";

let hls = null;

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

    if (hls) {
        hls.destroy();
        hls = null;
    }

    preview.innerHTML = `
        <video id="player" controls autoplay class="w-full h-full rounded-xl bg-black"></video>
    `;

    const video = preview.querySelector("#player");
    const url = channel.streamUrl;

    if (url.includes(".m3u8") && Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.ERROR, (event, data) => {
            console.log(channel.name, data.type, data.details, data.response?.code);
        });
    } else {
        video.src = url;
    }
}