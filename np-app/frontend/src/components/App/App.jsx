import { Routes, Route, Link } from "react-router-dom"
import { useState } from 'react'
import Navbar from "../Navbar"
import HomePage from "../HomePage"
import AboutPage from "../AboutPage"


import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <h1>NP App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
