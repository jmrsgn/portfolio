import type {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
} from "react";

import {
  Container,
  ContainerTrackInfo,
  BoxSpotifyIcon,
  Image,
  TextNowPlaying,
  TextTrackInfo,
  TextTrackName,
} from "./styles/spotify";

interface SpotifyProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

type SpotifyPartProps = HTMLAttributes<HTMLDivElement>;

interface SpotifyComponent extends FC<SpotifyProps> {
  ContainerTrackInfo: FC<SpotifyPartProps>;
  BoxSpotifyIcon: FC<SpotifyPartProps>;
  Image: FC<ImgHTMLAttributes<HTMLImageElement>>;
  TextNowPlaying: FC<SpotifyPartProps>;
  TextTrackInfo: FC<SpotifyPartProps>;
  TextTrackName: FC<SpotifyPartProps>;
}

const SpotifyRoot: FC<SpotifyProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const Spotify = SpotifyRoot as SpotifyComponent;

Spotify.ContainerTrackInfo = ({ children, ...restProps }) => {
  return <ContainerTrackInfo {...restProps}>{children}</ContainerTrackInfo>;
};

Spotify.BoxSpotifyIcon = ({ children, ...restProps }) => {
  return <BoxSpotifyIcon {...restProps}>{children}</BoxSpotifyIcon>;
};

Spotify.Image = ({ src, ...restProps }) => {
  return <Image src={src} {...restProps} />;
};

Spotify.TextNowPlaying = ({ children, ...restProps }) => {
  return <TextNowPlaying {...restProps}>{children}</TextNowPlaying>;
};

Spotify.TextTrackInfo = ({ children, ...restProps }) => {
  return <TextTrackInfo {...restProps}>{children}</TextTrackInfo>;
};

Spotify.TextTrackName = ({ children, ...restProps }) => {
  return <TextTrackName {...restProps}>{children}</TextTrackName>;
};

export default Spotify;
