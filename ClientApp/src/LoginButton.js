import React from 'react'

export function LoginButton() {
  async function clickLogin() {
    // Create a set of parameters for the URL.
    const params = new URLSearchParams({
      client_id: 'a89620779d994eb7b01ff6ee1bb88940',
      response_type: 'code',
<<<<<<< HEAD
      redirect_uri: 'https://onrepeat-sdg.herokuapp.com//callback',
=======
      redirect_uri: 'https://on-repeat-sdg.herokuapp.com/callback',
>>>>>>> 183b21c70c94d9b9b0affef93a229d86199157e7
      scope:
        'user-read-private user-read-email playlist-read-private user-top-read',
      state: 'random number',
    })
    const url = `https://accounts.spotify.com/authorize?${params}`

    window.location.assign(url)
  }

  // TODO Check to see if refesh token is expired.
  const token = localStorage.getItem('SpotifyRefreshToken')

  if (token) {
    return null
  }

  return (
    <section className="login">
      <button onClick={clickLogin}>Login</button>
    </section>
  )
}

export default LoginButton
