import type { VercelRequest, VercelResponse } from "@vercel/node";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const TRACK_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
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
    /**
     * Refresh Spotify access token.
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
      console.error("Spotify token error:", tokenData);

      return res.status(tokenResponse.status).json({
        error: "Unable to refresh Spotify access token.",
      });
    }

    /**
     * Get currently playing track.
     */
    const trackResponse = await fetch(TRACK_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    /**
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

      console.error("Spotify track error:", errorData);

      return res.status(trackResponse.status).json({
        error: "Unable to fetch currently playing track.",
      });
    }

    const data = await trackResponse.json();

    if (!data.item) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    return res.status(200).json({
      isPlaying: data.is_playing,

      track: {
        name: data.item.name,

        uri: data.item.uri,

        albumImage: data.item.album?.images?.[0]?.url ?? null,

        artists:
          data.item.artists?.map((artist: { name: string }) => artist.name) ??
          [],
      },
    });
  } catch (error) {
    console.error("Spotify API error:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
}
