import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">On Repeat</Link>
        </h1>
      </header>
      <nav>
        <ul className="navBar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playlists"> My Playlists </Link>
          </li>
          <li>
            <Link to="/charts">My Charts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
