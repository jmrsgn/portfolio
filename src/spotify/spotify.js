import React, { useEffect, useState } from 'react';
import { Spotify } from '../components';

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const SCOPE = 'user-read-currently-playing user-read-playback-state';
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

export function SpotifyPlayer() {
    const [authCode, setAuthCode] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh_token'));
    const [track, setTrack] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code && !refreshToken) {
            setAuthCode(code);
        } else if (!refreshToken) {
            window.location.href = AUTH_URL;
        } else {
            refreshAccessToken();
        }
    }, [refreshToken]);

    const refreshAccessToken = async () => {
        if (refreshToken) {
            try {
                const response = await fetch(TOKEN_ENDPOINT, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
                    },
                    body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    setAccessToken(data.access_token);
                } else {
                    console.error("Error refreshing token:", data);
                }
            } catch (error) {
                console.error("Network error:", error);
            }
        }
    };

    useEffect(() => {
        if (authCode) {
            const fetchTokens = async () => {
                try {
                    const response = await fetch(TOKEN_ENDPOINT, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
                        },
                        body: new URLSearchParams({
                            grant_type: 'authorization_code',
                            code: authCode,
                            redirect_uri: REDIRECT_URI,
                        }),
                    });

                    const data = await response.json();
                    if (response.ok) {
                        setAccessToken(data.access_token);
                        setRefreshToken(data.refresh_token);
                        localStorage.setItem('refresh_token', data.refresh_token);
                        window.history.replaceState({}, document.title, "/"); // Remove the code from URL
                    } else {
                        console.error('Error fetching tokens:', data);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                }
            };

            fetchTokens();
        }
    }, [authCode]); // Include authCode as dependency

    useEffect(() => {
        if (accessToken) {
            const fetchCurrentlyPlayingTrack = async () => {
                try {
                    const response = await fetch(TRACK_ENDPOINT, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    });

                    if (response.status === 204) {
                        // No track is currently playing
                        return;
                    }

                    const data = await response.json();
                    setTrack(data);
                } catch (error) {
                    console.error('Error fetching currently playing track:', error);
                }
            };

            fetchCurrentlyPlayingTrack();
        }
    }, [accessToken]); // Include accessToken as dependency

    // Refresh access token periodically
    useEffect(() => {
        const interval = setInterval(refreshAccessToken, 3600 * 1000); // Refresh every hour
        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [refreshToken]); // Include refreshToken as dependency

    return (
        <>
            {track && (
                <Spotify>
                    <Spotify.Image src={track.item.album.images[0].url} alt="Album cover" />
                    <Spotify.TrackInfo>
                        <Spotify.TrackName>{track.item.name}</Spotify.TrackName>
                        <Spotify.TrackInfoText>{track.item.artists.map(artist => artist.name).join(', ')}</Spotify.TrackInfoText>
                    </Spotify.TrackInfo>
                </Spotify>
            )}
        </>
    );
};
  
