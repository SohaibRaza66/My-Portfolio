import React from 'react'
import {BrowserRouter , Route ,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Componenets/Navbar'
import Footer from './Componenets/Footer'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App