import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import Home from "./pages/Home"
import MatchDetails from "./pages/MatchDetails"
import Standings from "./pages/Standings"
import LeaguePage from "./pages/LeaguePage"
import TeamPage from "./pages/TeamPage"
import WorldCupPage from "./pages/WorldCupPage"

function App() {

  return (

    <BrowserRouter>

      <div className="bg-black min-h-screen text-white flex">

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN CONTENT */}

        <div className="flex-1 flex flex-col">

          {/* NAVBAR */}

          <Navbar />

          {/* PAGES */}

          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={<Home />}
            />

            {/* MATCH DETAILS */}

            <Route
              path="/match/:id"
              element={<MatchDetails />}
            />

            {/* STANDINGS */}

            <Route
              path="/standings"
              element={<Standings />}
            />

            {/* LEAGUE PAGE */}

            <Route
              path="/league/:leagueName"
              element={<LeaguePage />}
            />

            {/* TEAM PAGE */}

            <Route
              path="/team/:teamName"
              element={<TeamPage />}
            />

            {/* WORLD CUP */}

            <Route
              path="/world-cup"
              element={<WorldCupPage />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App