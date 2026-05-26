import { Link } from "react-router-dom"

import SearchBar from "./SearchBar"

function Navbar() {

  return (

    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 px-4 md:px-6 py-4">

      <div className="flex items-center justify-between gap-4">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
        >

          <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-black font-black text-lg">

            ⚽

          </div>

          <div>

            <h1 className="text-lg font-bold tracking-tight text-white">

              GoalArena

            </h1>

            <p className="text-[11px] text-zinc-500">

              Live Football Hub

            </p>

          </div>

        </Link>

        {/* SEARCH */}

        <div className="flex-1 flex justify-center">

          <SearchBar />

        </div>

        {/* RIGHT ACTIONS */}

        <div className="flex items-center gap-3 shrink-0">

          <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition px-4 py-2 rounded-2xl text-sm text-zinc-300">

            Login

          </button>

        </div>

      </div>

    </header>
  )
}

export default Navbar