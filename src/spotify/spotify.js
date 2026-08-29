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
    const [trackUri, setTrackUri] = useState(null);
    const [trackName, setTrackName] = useState('');
    const [isHidden, setIsHidden] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    const openSpotify = () => {
        window.location.href = trackUri;
    }

    // Refresh token
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
                    setTrackUri(data.item.uri);
                } catch (error) {
                    console.error('Error fetching currently playing track:', error);
                }
            };

            fetchCurrentlyPlayingTrack();
            const trackInterval = setInterval(fetchCurrentlyPlayingTrack, 60 * 1000); // Fetch track every 1 minute
            return () => clearInterval(trackInterval);
        }
    }, [accessToken]);

    // Detect swipe for mobile (touch) events
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX - endX < -100) {
            setIsHidden(true);
        }
    };

    // Detect swipe for desktop (mouse) events
    const handleMouseDown = (e) => {
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        setEndX(e.clientX);
    };

    const handleMouseUp = () => {
        if (startX - endX < -100) {
            setIsHidden(true);
        }
    };

    return (
        <>
            {track && (
                <Spotify
                    onClick={() => openSpotify()}
                    // onTouchStart={handleTouchStart}
                    // onTouchMove={handleTouchMove}
                    // onTouchEnd={handleTouchEnd}
                    // onMouseDown={handleMouseDown}
                    // onMouseMove={handleMouseMove}
                    // onMouseUp={handleMouseUp}
                    // isHidden={isHidden}
                >
                    <Spotify.Image src={track.item.album.images[0].url} alt="Album cover" />
                    <Spotify.ContainerTrackInfo>
                        <Spotify.TextTrackName>{trackName}</Spotify.TextTrackName>
                        <Spotify.TextTrackInfo>{track.item.artists.map(artist => artist.name).join(', ')}</Spotify.TextTrackInfo>
                        <Spotify.TextNowPlaying>Now Playing</Spotify.TextNowPlaying>
                    </Spotify.ContainerTrackInfo>

                    <Spotify.BoxSpotifyIcon>
                        <FaSpotify />
                    </Spotify.BoxSpotifyIcon>
                </Spotify>
            )}
        </>
    );
};
  
