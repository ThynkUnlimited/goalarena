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

function App() {

  return (

    <BrowserRouter>

      <div className="bg-slate-950 min-h-screen text-white flex">

        {/* SIDEBAR */}

        <Sidebar />

        {/* MAIN */}

        <div className="flex-1">

          <Navbar />

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

      </div>

    </BrowserRouter>

  )
}

export default App