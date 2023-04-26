import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getData } from '../../../utils/api';
import Navbar from "../Navbar"
import HomePage from "../HomePage"
import AboutPage from "../AboutPage"
import Card from "../Card"
import DetailsPage from "../DetailsPage"
import MyParksPage from "../MyParksPage"
import './App.css'
import NotFoundPage from "../NotFoundPage";

function App() {
  const [parks, setParks] = useState([])
  const [detailPage, setDetailPage] = useState()

  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    getData(`https://developer.nps.gov/api/v1/parks?limit=468&api_key=${apiKey}`)
      .then(res => {
        setParks(res.data)
      })
  }, [])

  let parkContent = <p className="m-24 text-xl">Loading National Park information... </p>
  let fileredParks = parks.filter(park => park.designation === "National Park")
  if (parks.length > 0) {
    parkContent = fileredParks.map((park, i) => <Card key={i} parkData={park} updateDetailPage={setDetailPage} />)
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <HomePage
              parkContent={parkContent}
            />} />
          <Route path='/details/:id' element={<DetailsPage parkData={detailPage} updatePark={setDetailPage} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-parks" element={<MyParksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </main>
    </>

  )
}

export default App
