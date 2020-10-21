import Table from 'react-bootstrap/Table'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import playlistDefaultImage from '../images/playlist.jpg'

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

    if (json[1]) {
      setPlaylistImage(json[1].url)
    } else if (json[0]) {
      setPlaylistImage(json[0].url)
    } else {
      setPlaylistImage(playlistDefaultImage)
    }
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
  console.log(playlist)

  return (
    <div className="onePlaylist">
      <section className="playlistSection">
        <article>
          <h2>{playlists.name}</h2>

          <div className="imageContainer">
            <img src={playlistImage} />
          </div>
          <div className="tableContainer">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr className="categoryList">
                  <th className="trackCategory">Track</th>
                  <th className="artistCategory">Artist</th>
                  <th className="albumCategory">Album</th>
                </tr>
              </thead>
              {playlist.map((track) => (
                <tbody>
                  <tr className="track">
                    <td>{track.track.name}</td>

                    <td>
                      {track.track.artists.map((artist) => (
                        <span>{artist.name + ' '} </span>
                      ))}
                    </td>

                    <td>{track.track.album.name}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </article>
      </section>
    </div>
  )
}
