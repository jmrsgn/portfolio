import queryString from "query-string";
import { Buffer } from "buffer";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret
        })
    }

    fetch(TOKEN_ENDPOINT, options)
    .then((response) => {
        console.log(response.json());

        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        console.log(data.json());
    })
};

export const getNowPlaying = async () => {
    const access_token = await getAccessToken();

    console.log(access_token);
    // return fetch(NOW_PLAYING_ENDPOINT, {
    //     headers: {
    //         Authorization: `Bearer ${access_token}`,
    //     },
    // });
};

export default async function getNowPlayingItem() {
    const response = await getNowPlaying();
    // if (response.status === 204 || response.status > 400) {
    //     return false;
    // }
    // const song = await response.json();
    // const albumImageUrl = song.item.album.images[0].url;
    // const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    // const isPlaying = song.is_playing;
    // const songUrl = song.item.external_urls.spotify;
    // const title = song.item.name;

    console.log("executing [getNowPlayingItem]");
    
    // return {
    //     albumImageUrl,
    //     artist,
    //     isPlaying,
    //     songUrl,
    //     title,
    // };
}