import React from 'react';
import { Container, Image, ProgressBar, TrackInfo, TrackInfoText, TrackName } from './styles/spotify';

export default function Spotify({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Spotify.Image = function SpotifyImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}

Spotify.TrackInfo = function SpotifyTrackInfo({ children, ...restProps }) {
    return <TrackInfo {...restProps}>{children}</TrackInfo>
}

Spotify.ProgressBar = function SpotifyProgressBar({ children, ...restProps }) {
    return <ProgressBar {...restProps}>{children}</ProgressBar>
}

Spotify.TrackName = function SpotifyTrackName({ children, ...restProps }) {
    return <TrackName {...restProps}>{children}</TrackName>
}

Spotify.TrackInfoText = function SpotifyTrackInfoText({ children, ...restProps }) {
    return <TrackInfoText {...restProps}>{children}</TrackInfoText>
}