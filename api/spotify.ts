import type { VercelRequest, VercelResponse } from "@vercel/node";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TRACK_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbumImage {
  url: string;
}

interface SpotifyTrackItem {
  name: string;
  uri: string;
  artists: SpotifyArtist[];
  album: {
    images: SpotifyAlbumImage[];
  };
}

interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  item?: SpotifyTrackItem | null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
    process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return res.status(500).json({
      error: "Spotify environment variables are not configured.",
    });
  }

  try {
    /*
     * 1. Get a fresh access token using the refresh token.
     */
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",

        Authorization:
          "Basic " +
          Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
            "base64",
          ),
      },

      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("Spotify token refresh failed:", tokenData);

      return res.status(tokenResponse.status).json({
        error: "Unable to refresh Spotify access token.",
      });
    }

    const { access_token }: SpotifyTokenResponse = tokenData;

    /*
     * 2. Ask Spotify what is currently playing.
     */
    const trackResponse = await fetch(TRACK_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    /*
     * Spotify returns 204 when nothing is playing.
     */
    if (trackResponse.status === 204) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    if (!trackResponse.ok) {
      const errorData = await trackResponse.text();

      console.error("Spotify currently-playing failed:", errorData);

      return res.status(trackResponse.status).json({
        error: "Unable to fetch currently playing track.",
      });
    }

    const data: SpotifyCurrentlyPlayingResponse = await trackResponse.json();

    /*
     * Nothing currently playing.
     */
    if (!data.is_playing || !data.item) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    /*
     * 3. Return only the information the frontend needs.
     */
    const track = data.item;

    return res.status(200).json({
      isPlaying: true,
      track: {
        name: track.name,
        uri: track.uri,
        albumImage: track.album?.images?.[0]?.url ?? null,
        artists: track.artists.map((artist) => artist.name),
      },
    });
  } catch (error) {
    console.error("Spotify API error:", error);

    return res.status(500).json({
      error: "Unexpected Spotify API error.",
    });
  }
}
