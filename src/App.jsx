import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import MatchDetails from "./pages/MatchDetails"

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/match"
          element={<MatchDetails />}
        />

      </Routes>

    </div>
  )
}

export default App