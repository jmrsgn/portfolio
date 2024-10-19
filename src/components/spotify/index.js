import React from 'react';
import { Container, 
         ContainerTrackInfo,
         BoxSpotifyIcon,
         Image, 
         TextNowPlaying, 
         TextTrackInfo, 
         TextTrackName } from './styles/spotify';

export default function Spotify({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

/**
 * * Containers
 */

Spotify.ContainerTrackInfo = function SpotifyContainerTrackInfo({ children, ...restProps }) {
    return <ContainerTrackInfo {...restProps}>{children}</ContainerTrackInfo>
}

/**
 * * Boxes
 */

Spotify.BoxSpotifyIcon = function SpotifyBoxSpotifyIcon({ children, ...restProps }) {
    return <BoxSpotifyIcon {...restProps}>{children}</BoxSpotifyIcon>
}

/**
 * * Images
 */

Spotify.Image = function SpotifyImage({ src, ...restProps }) {
    return <Image src={src} {...restProps} />
}

/**
 * * Texts
 */

Spotify.TextNowPlaying = function SpotifyTextNowPlaying({ children, ...restProps }) {
    return <TextNowPlaying {...restProps}>{children}</TextNowPlaying>
}

Spotify.TextTrackInfo = function SpotifyTextTrackInfo({ children, ...restProps }) {
    return <TextTrackInfo {...restProps}>{children}</TextTrackInfo>
} 

Spotify.TextTrackName = function SpotifyTextTrackName({ children, ...restProps }) {
    return <TextTrackName {...restProps}>{children}</TextTrackName>
}