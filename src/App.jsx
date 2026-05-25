import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import MatchDetails from "./pages/MatchDetails"
import Standings from "./pages/Standings"

function App() {
  return (
    <BrowserRouter>

      <div className="bg-slate-950 min-h-screen">

        {/* NAVBAR */}

        <Navbar />

        {/* ROUTES */}

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/match/:id"
            element={<MatchDetails />}
          />

          <Route
            path="/standings"
            element={<Standings />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App