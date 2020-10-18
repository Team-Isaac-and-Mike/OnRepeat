import React, { useEffect, useState } from 'react'

export function MyCharts() {
  const [chart, setChart] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchCharts() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/top/artists',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const json = await response.json()

      setChart(json.items)
      console.log(json)
    }

    fetchCharts()
  }, [accessToken])

  if (!accessToken) {
    return <p>You aren't logged in</p>
  }

  return (
    <div className="myCharts">
      <section className="chartsSection">
        <article className="topArticle">
          <h2> Top Artists</h2>
          <h3>Month</h3>
          <ul className="topList"></ul>

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
