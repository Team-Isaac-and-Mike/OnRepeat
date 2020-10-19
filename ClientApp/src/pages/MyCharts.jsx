import React, { useEffect, useState } from 'react'

export function MyCharts() {
  const [chartArtistMonth, setChartArtistMonth] = useState([])
  const [chartArtist6Month, setChartArtist6Month] = useState([])
  const [chartArtistAllTime, setChartArtistAllTime] = useState([])
  const [chartTrackMonth, setChartTrackMonth] = useState([])
  const [chartTrack6Month, setChartTrack6Month] = useState([])
  const [chartTrackAllTime, setChartTrackAllTime] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

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

    async function fetchChartArtist6Month() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartArtist6Month(json.items)
      console.log(json)
    }

    fetchChartArtist6Month()
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchChartArtistAllTime() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartArtistAllTime(json.items)
      console.log(json)
    }

    fetchChartArtistAllTime()
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
  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchChartTrack6Month() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartTrack6Month(json.items)
      console.log(json)
    }

    fetchChartTrack6Month()
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchChartTrackAllTime() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10&offset=5',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChartTrackAllTime(json.items)
      console.log(json)
    }

    fetchChartTrackAllTime()
  }, [accessToken])
  if (!accessToken) {
    return <p>You aren't logged in</p>
  }

  return (
    <div className="myCharts">
      <section className="chartsSection">
        <article className="topArticle">
          <h2> Top Artists</h2>
          <h3>PastMonth</h3>
          {chartArtistMonth.map((monthArtist) => (
            <ul className="topList">
              <li>{monthArtist.name}</li>
            </ul>
          ))}

          <h3>Six Months</h3>
          {chartArtist6Month.map((sixMonthArtist) => (
            <ul className="topList">
              <li>{sixMonthArtist.name}</li>
            </ul>
          ))}

          <h3>All Time</h3>
          {chartArtistAllTime.map((allTimeArtist) => (
            <ul className="topList">
              <li>{allTimeArtist.name}</li>
            </ul>
          ))}
        </article>

        <article className="topArticle">
          <h2>Top Tracks</h2>
          <h3>Month</h3>
          <ul className="topList">
            <li className="topItems">1. Kanye West</li>
            <li className="topItems">2. Juls</li>
            <li className="topItems">3. Kid Cudi</li>
            <li className="topItems">4. A$AP Rocky</li>
            <li className="topItems">5. Tyler the Creator</li>
            <li className="topItems">6. Mac Miller</li>
            <li className="topItems">7. Jay Cole</li>
            <li className="topItems">8. JID</li>
            <li className="topItems">9. Migos</li>
            <li className="topItems">10. WizKid</li>
          </ul>

          <h3>Six Months</h3>
          <ul className="topList">
            <li className="topItems">1. Kanye West</li>
            <li className="topItems">2. Juls</li>
            <li className="topItems">3. Kid Cudi</li>
            <li className="topItems">4. A$AP Rocky</li>
            <li className="topItems">5. Tyler the Creator</li>
            <li className="topItems">6. Mac Miller</li>
            <li className="topItems">7. Jay Cole</li>
            <li className="topItems">8. JID</li>
            <li className="topItems">9. Migos</li>
            <li className="topItems">10. WizKid</li>
          </ul>

          <h3>All Time</h3>
          <ul className="topList">
            <li className="topItems">1. Kanye West</li>
            <li className="topItems">2. Juls</li>
            <li className="topItems">3. Kid Cudi</li>
            <li className="topItems">4. A$AP Rocky</li>
            <li className="topItems">5. Tyler the Creator</li>
            <li className="topItems">6. Mac Miller</li>
            <li className="topItems">7. Jay Cole</li>
            <li className="topItems">8. JID</li>
            <li className="topItems">9. Migos</li>
            <li className="topItems">10. WizKid</li>
          </ul>
        </article>
      </section>
    </div>
  )
}
