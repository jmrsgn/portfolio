import React, { useEffect, useState } from 'react';
import { Spotify } from '../components';

import { FaSpotify } from "react-icons/fa";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export function SpotifyPlayer() {
    const [accessToken, setAccessToken] = useState(null);
    const [track, setTrack] = useState(null);
    const [error, setError] = useState(null);
    const [trackName, setTrackName] = useState('');

    const refreshAccessToken = async () => {
        try {
            const response = await fetch(TOKEN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
                },
                body: new URLSearchParams({
                    grant_type: 'refresh_token',
                    refresh_token: REFRESH_TOKEN,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setAccessToken(data.access_token);
            } else {
                setError(data.error_description || 'Error refreshing token');
                console.error('Error refreshing token:', data);
            }
        } catch (error) {
            setError('Network error');
            console.error('Network error:', error);
        }
    };

    useEffect(() => {
        refreshAccessToken();
        const interval = setInterval(refreshAccessToken, 3600 * 1000); // Refresh every hour
        return () => clearInterval(interval);
    }, []);

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
                    setTrackName(data.item.name.length > 15 ? data.item.name.substring(0, 15) + '...' : data.item.name);
                } catch (error) {
                    console.error('Error fetching currently playing track:', error);
                }
            };

            fetchCurrentlyPlayingTrack();
        }
    }, [accessToken]);

    return (
        <>
            {track && (
                <Spotify
                    onClick={() => alert("open spotify")}
                >
                    <Spotify.Image src={track.item.album.images[0].url} alt="Album cover" />
                    <Spotify.TrackInfo>
                        <Spotify.TrackName>{trackName}</Spotify.TrackName>
                        <Spotify.TrackInfoText>{track.item.artists.map(artist => artist.name).join(', ')}</Spotify.TrackInfoText>
                        <Spotify.Text>Currently Playing</Spotify.Text>
                    </Spotify.TrackInfo>

                    <FaSpotify size={30}/>
                </Spotify>
            )}
        </>
    );
};
  
