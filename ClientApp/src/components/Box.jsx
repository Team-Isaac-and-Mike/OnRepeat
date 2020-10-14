import React from 'react'
import playlists from '../playlists.json'

export function Box() {
  return (
    <div>
        {playlists.data.map((playlists)=>(
          <article className="boxArticle">
          <figure>
          <img
            src={playlists.image}
            />
          <figcaption>
            {playlists.name}
          </figcaption>
        </figure>
      </article>
        ))}
        
    </div>
  )
}