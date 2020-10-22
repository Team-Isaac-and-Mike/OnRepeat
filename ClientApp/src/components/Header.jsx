import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [userInfo, setUserInfo] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

  async function fetchUserInfo() {
    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()

    setUserInfo(json.items)
  }

  console.log(userInfo)

  return (
    <div className="header">
      <header>
        <h1>
          <Link to="/">OnRepeat</Link>
        </h1>
      </header>
      <nav>
        <ul className="navBar">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/playlists"> My Playlists </Link>
          </li>
          <li className="navItem">
            <Link to="/charts">My Charts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
