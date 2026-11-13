export async function fetchdata() {
    try {
        const response = await fetch("https://api.npoint.io/f67e0908726797472791")

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