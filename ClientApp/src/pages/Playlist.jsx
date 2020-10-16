import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Playlist() {
  const params = useParams()
  const id = params.id
  const [playlist, setPlaylist] = useState([])

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

  useEffect(() => {
    fetchPlaylist()
  }, [])
  console.log(playlist)
  return (
    <div className="onePlaylist">
      <section className="playlistSection">
        <article>
          <h2>playlist</h2>

          {playlist.map((track) => (
            <div className="track">
              <h3>{track.track.name}</h3>
              {track.track.artists.map((artist) => (
                <h3>{artist.name}</h3>
              ))}
              <h3>{track.track.album.name}</h3>
            </div>
          ))}
        </article>
      </section>
    </div>
  )
}
