import { useCallback, useEffect, useState } from "react";

import { Spotify } from "../components";

import { FaSpotify } from "react-icons/fa";

const TRACK_INTERVAL = 60 * 1000;

interface SpotifyTrack {
  name: string;
  uri: string;
  albumImage: string | null;
  artists: string[];
}

interface SpotifyResponse {
  isPlaying: boolean;
  track: SpotifyTrack | null;
}

export function SpotifyPlayer() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);

  const fetchCurrentlyPlaying = useCallback(async () => {
    try {
      const response = await fetch("/api/spotify");

      if (!response.ok) {
        throw new Error("Unable to fetch Spotify track.");
      }

      const data: SpotifyResponse = await response.json();

      if (!data.isPlaying || !data.track) {
        setTrack(null);
        return;
      }

      setTrack(data.track);
    } catch (error) {
      console.error("Error fetching Spotify track:", error);

      setTrack(null);
    }
  }, []);

  useEffect(() => {
    fetchCurrentlyPlaying();

    const interval = window.setInterval(fetchCurrentlyPlaying, TRACK_INTERVAL);

    return () => {
      window.clearInterval(interval);
    };
  }, [fetchCurrentlyPlaying]);

  const openSpotify = () => {
    if (!track?.uri) {
      return;
    }

    window.location.href = track.uri;
  };

  if (!track) {
    return null;
  }

  const trackName =
    track.name.length > 15 ? `${track.name.substring(0, 15)}...` : track.name;

  return (
    <Spotify onClick={openSpotify}>
      {track.albumImage && (
        <Spotify.Image src={track.albumImage} alt="Album cover" />
      )}

      <Spotify.ContainerTrackInfo>
        <Spotify.TextTrackName>{trackName}</Spotify.TextTrackName>

        <Spotify.TextTrackInfo>
          {track.artists.join(", ")}
        </Spotify.TextTrackInfo>

        <Spotify.TextNowPlaying>Now Playing</Spotify.TextNowPlaying>
      </Spotify.ContainerTrackInfo>

      <Spotify.BoxSpotifyIcon>
        <FaSpotify />
      </Spotify.BoxSpotifyIcon>
    </Spotify>
  );
}
