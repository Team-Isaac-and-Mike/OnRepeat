import React from 'react'
import { Link } from 'react-router-dom'
import { PlayListsBox } from '../components/PlaylistBox'

export function MyPlaylists() {
  return (
    <div className="myPlaylists">
      <section className="boxContainer">
        <article className="createArticle">
          <Link to="/create">Create a Playlist</Link>
        </article>
        <PlayListsBox />
        
      </section>
    </div>
  )
}
