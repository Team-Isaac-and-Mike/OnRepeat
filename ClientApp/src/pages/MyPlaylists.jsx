import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '../components/Box'

export function MyPlaylists() {
  return (
    <div>
      <section className="boxContainer">
        <article>
          <Link to="/create">Create a Playlist</Link>
        </article>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </section>
    </div>
  )
}
