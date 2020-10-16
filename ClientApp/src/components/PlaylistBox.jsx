import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export function Loading() {
  return (
    <div>
      <p>Loading</p>
    </div>
  )
}

export function PlayListsBox() {
  const [playlists, setPlaylists] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchPlaylists() {
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const json = await response.json()

      setPlaylists(json.items)
      console.log(json)
    }

    fetchPlaylists()
  }, [accessToken])

  if (!accessToken) {
    return <p>You aren't logged in</p>
  }

  return (
    <ul className="playlistContainer">
      {playlists.length > 0 &&
        playlists.map((playlist) => (
          <article className="PlaylistBox">
            <li key={playlist.name}>
              <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
            </li>
            <img src={playlist.images[0].url} height="400px" width="400px" />
          </article>
        ))}
      {playlists.length === 0 && <h1>LOADING...</h1>}
    </ul>
  )
}
