import { useState } from "react"

import { Link } from "react-router-dom"

function SearchBar() {

  const [query, setQuery] =
    useState("")

  const teams = [

    "Chelsea",
    "Arsenal",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Tottenham",
    "Barcelona",
    "Real Madrid",
    "Bayern Munich",
    "PSG"

  ]

  const filteredTeams = teams.filter((team) =>

    team
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (

    <div className="relative w-full max-w-md">

      {/* INPUT */}

      <input
        type="text"
        placeholder="Search teams..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500"
      />

      {/* RESULTS */}

      {query.length > 0 && (

        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-50">

          {filteredTeams.length > 0 ? (

            filteredTeams.map((team, index) => (

              <Link
                key={index}
                to={`/team/${team}`}
                className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-orange-500 transition border-b border-zinc-800 last:border-none"
              >

                {team}

              </Link>

            ))

          ) : (

            <div className="px-4 py-3 text-sm text-zinc-500">

              No teams found

            </div>

          )}

        </div>

      )}

    </div>
  )
}

export default SearchBar