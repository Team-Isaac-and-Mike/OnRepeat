import React, { useEffect, useState } from 'react'
export function Loading() {
  return(
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
    }

    fetchPlaylists()
  }, [accessToken])

  if (!accessToken) {
    return <p>You aren't logged in</p>
  }
console.log(playlists)
  return (
    <ul className="playlistContainer">

      {playlists.length > 0 && playlists.map(playlist => (
        <article>
          <li key={playlist.name}>{playlist.name}</li>
          <img src={playlist.images[0].url}
            height="400px"
            width="400px" />
        </article>
        
        
      ))}
      {playlists.length === 0 && <h1>FUCK</h1>}
    </ul>
  )
}

