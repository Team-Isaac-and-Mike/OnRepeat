import React from 'react'


export function LoginButton() {
  async function clickLogin() {
    // Create a set of parameters for the URL.
    const params = new URLSearchParams({
      client_id: "a89620779d994eb7b01ff6ee1bb88940",
      response_type: 'code',
      redirect_uri: "http://localhost:3000/callback",
      scope: 'user-read-private user-read-email playlist-read-private user-top-read',
      state: 'random number',
    })
    const url = `https://accounts.spotify.com/authorize?${params}`

    window.location.assign(url)
  }

  return <button onClick={clickLogin}>Login</button>
}

export default LoginButton
