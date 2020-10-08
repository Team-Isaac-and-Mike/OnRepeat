import React from 'react'
import './custom.scss'
import { Header } from './components/Header'
import { Box } from './components/Box'

export function App() {
  return (
    <main>
      <Header />
      <section className="boxContainer">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </section>
    </main>
  )
}
