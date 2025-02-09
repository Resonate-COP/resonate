import axios from "axios";

const API_BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = "549e01c17ff94def9160c3d8d1df92c3";
const CLIENT_SECRET = "4668a9d08f71422c8789a8a5e0e8e0a6";

let accessToken = null;
let tokenExpiresAt = 0; // Timestamp to track token expiry

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiresAt) {
        console.log("Using cached token");
        return accessToken; // Use cached token if still valid
    }

    console.log("Fetching new token...");
    const url = "https://accounts.spotify.com/api/token";
    
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    };
    
    const body = new URLSearchParams({ grant_type: "client_credentials" }).toString();

    try {
        const response = await axios.post(url, body, { headers });
        accessToken = response.data.access_token;
        tokenExpiresAt = Date.now() + response.data.expires_in * 1000; // Convert expiry time to timestamp
        return accessToken;
    } catch (error) {
        console.error("Error fetching access token:", error.response?.data || error.message);
        throw error;
    }
}
export const searchSong = async (song) => {
    const token = await getAccessToken(); // Ensure we await the token
    console.log(token);
    const url = `${API_BASE_URL}/search?q=${encodeURIComponent(song)}&type=track&limit=10`;

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.tracks.items;
    } catch (error) {
        console.error("Error fetching song:", error.response?.data || error.message);
        throw error;
    }
};

export const getTopHits = async () => {
    const token = await getAccessToken();
    const url = "https://api.spotify.com/v1/playlists/3EdeHJAsy74r3hqw8Vwrta";

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}`}
        });
        return response.data.tracks.items;
    } catch (error) {
        console.log("Error fetching: " + error);
        throw error;
    }

}