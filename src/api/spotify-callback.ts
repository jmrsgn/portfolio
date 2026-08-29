import type { VercelRequest, VercelResponse } from "@vercel/node";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = req.query.code;

  if (typeof code !== "string") {
    return res.status(400).send("Missing authorization code.");
  }

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    return res
      .status(500)
      .send("Spotify environment variables are not configured.");
  }

  const redirectUri =
    "https://marasiganjohnmartin.vercel.app/api/spotify-callback";

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
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
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Spotify token exchange failed:", data);

      return res.status(response.status).json({
        error: "Spotify authorization failed.",
      });
    }

    return res.status(200).send(`
      <html>
        <body style="font-family: sans-serif; padding: 40px;">
          <h1>Spotify Authorization Successful</h1>

          <p>Copy this refresh token into Vercel:</p>

          <textarea
            style="width: 100%; height: 120px;"
          >${data.refresh_token ?? ""}</textarea>

          <p>
            Environment variable:
            <strong>SPOTIFY_REFRESH_TOKEN</strong>
          </p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Spotify callback error:", error);

    return res
      .status(500)
      .send("Unexpected error during Spotify authorization.");
  }
}
