

export async function fetchdata() {
    try {
        const response = await fetch("https://6af50467f6270fa08d67a425.mockapi.io/channels")

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }

        const channels = await response.json()

        return channels

    } catch (error) {
        console.error("Failed to fetch channels:", error)
        throw error
    }
}
