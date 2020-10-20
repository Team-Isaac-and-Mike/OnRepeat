import React, { useEffect, useState } from 'react'

export function CreateAPlaylist() {
  const [recommendation, setRecommendation] = useState([])
  const [chartArtistMonth, setChartArtistMonth] = useState([])
  const [chartTrackMonth, setChartTrackMonth] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')
  const [seedArtist, setSeedArtist] = useState([])
  const [seedTrack, setSeedTrack] = useState([])
  const [seedGenre, setSeedGenre] = useState([])

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchRecommendation() {
      const response = await fetch(
        // `https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=${seedArtist}&seed_genres=${seedGenre}&seed_tracks=${seedTrack}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setRecommendation(json.items)
      console.log(json)
    }

    fetchRecommendation()
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchChartArtistMonth() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartArtistMonth(json.items)

      console.log(json)
    }

    fetchChartArtistMonth()
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchChartTrackMonth() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartTrackMonth(json.items)
      console.log(json)
    }

    fetchChartTrackMonth()
  }, [accessToken])

  return (
    <div className="createPlaylist">
      <section className="creatorContainer">
        <form className="creator">
          <p>
            <label>Name your playlist:</label>
            <input type="text"></input>
          </p>
          <p>
            <label>Pick one of your Top Artists:</label>
            <select className="seedArtist">
              {chartArtistMonth.map((seedArtist) => (
                <option>{seedArtist.name}</option>
              ))}
            </select>
          </p>
          <p>
            <label>Pick one of your Top Tracks:</label>
            <select
              className="seedTrack"
              value="seedTrack"
              onChange={this.setSeedArtist}
            >
              {chartTrackMonth.map((seedTrack) => (
                <option>{seedTrack.name}</option>
              ))}
            </select>
          </p>
          <label>Pick one of your Top Genres</label>
          <select className="seedGenre">
            {chartArtistMonth.map((seedGenre) => (
              <option>{seedGenre.genres[0]}</option>
            ))}
          </select>
          <button>Create my playlist</button>
        </form>
      </section>
    </div>
  )
}
