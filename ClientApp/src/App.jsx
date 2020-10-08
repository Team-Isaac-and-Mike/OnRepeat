import React from 'react'
import './custom.scss'
import { Link, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { MyPlaylists } from './pages/MyPlaylists'
import { MyCharts } from './pages/MyCharts'

export function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={MyPlaylists} />
        <Route exact path="/charts" component={MyCharts} />
      </Switch>
    </main>
  )
}
