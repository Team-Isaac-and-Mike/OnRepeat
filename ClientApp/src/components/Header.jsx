import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  async function PlayListsBox() {
    const [userInfo, setUserInfo] = useState([])
    const accessToken = localStorage.getItem('SpotifyAccessToken')
  }

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
