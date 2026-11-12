
export function filtrerChannels(channels, search) {

    return channels.filter(channel => {

        const matchName = channel.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchNumber = String(channel.channelNumber)
            .includes(search);

        return matchName || matchNumber;
    });
}
