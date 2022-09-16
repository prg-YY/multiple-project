import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Converter from "./pages/Converter"
import Home from "./pages/Home"
import Modal from "./pages/Modal"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </>
  )
}

export default App
