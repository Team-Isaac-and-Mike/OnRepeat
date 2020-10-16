import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Playlist() {
  const params = useParams()
  const id = params.id
  const [playlist, setPlaylist] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [playlistImage, setPlaylistImage] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

  async function fetchPlaylist() {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const json = await response.json()

    setPlaylist(json.items)
  }

  async function fetchPlaylists() {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()

    setPlaylists(json)
    console.log(json)
  }

  async function fetchPlaylistImage() {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${id}/images`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const json = await response.json()

    setPlaylistImage(json[1].url)
    console.log(json)
  }

  useEffect(() => {
    fetchPlaylist()
  }, [])
  console.log(playlist)

  useEffect(() => {
    fetchPlaylists()
  }, [])
  console.log(playlists)

  useEffect(() => {
    fetchPlaylistImage()
  }, [])
  console.log()

  return (
    <div className="onePlaylist">
      <section className="playlistSection">
        <article>
          <h2>{playlists.name}</h2>
          {/* {playlistImage.map((image) => ( */}
          {/* <img src={image.url} />
          ))} */}
          <div className="imageContainer">
            <img src={playlistImage} />
          </div>
          {playlist.map((track) => (
            <ul className="track">
              <li>{track.track.name}</li>
              {track.track.artists.map((artist) => (
                <li>{artist.name}</li>
              ))}
              <li>{track.track.album.name}</li>
            </ul>
          ))}
        </article>
      </section>
    </div>
  )
}
