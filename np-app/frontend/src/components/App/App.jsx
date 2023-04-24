import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getData } from '../../../utils/api';
import Navbar from "../Navbar"
import HomePage from "../HomePage"
import AboutPage from "../AboutPage"
import Card from "../Card"
import './App.css'

function App() {
  const [parks, setParks] = useState([])

  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    getData(`https://developer.nps.gov/api/v1/parks?limit=468&api_key=${apiKey}`)
      .then(res => {
        setParks(res.data)
      })
  }, [])

  let parkContent = <p>Loading National Park information... </p>
  let fileredParks = parks.filter(park => park.designation === "National Park")
  if (parks.length > 0) {
    parkContent = fileredParks.map((park, i) => <Card key={i} parkData={park} />)
  }

  return (
    <>
      <Navbar />
      <h1>NP App</h1>
      <Routes>
        <Route path="/" element={
          <HomePage
            parkContent={parkContent}
          />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
