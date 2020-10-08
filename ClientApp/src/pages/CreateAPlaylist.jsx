import React from 'react'

export function CreateAPlaylist() {
  return (
    <div>
      <section className="creatorContainer">
        <article className="creator">
          <p>
            <label>Name your playlist:</label>
            <input type="text"></input>
          </p>
          <p>
            <label>What kind of genre is this playlist:</label>
            <select name="genre">
              <option value="Rap">Rap</option>
              <option value="Pop">Pop</option>
              <option value="Jazz">Jazz</option>
            </select>
          </p>
          <p>
            <label>What kind of playlist is this:</label>
            <select name="gerne">
              <option value="Upbeat">Upbeat</option>S
              <option value="Instrumental">Instrumental</option>
              <option value="Live">Live</option>
              <option value="Danceable">Danceable</option>
            </select>
          </p>
          <button>Create my playlist</button>
        </article>
      </section>
    </div>
  )
}
