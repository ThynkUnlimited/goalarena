import { useState } from "react"

import { Link } from "react-router-dom"

import standingsData from "../data/standingsData"

function Standings() {

  const leagues = [
    "Premier League",
    "La Liga",
    "Serie A",
    "Bundesliga",
    "Ligue 1"
  ]

  const [selectedLeague, setSelectedLeague] =
    useState("Premier League")

  const table =
    standingsData[selectedLeague] || []

  return (

    <div className="bg-black text-white min-h-screen p-4 md:p-6">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold">

          League Standings

        </h1>

        <p className="text-zinc-500 mt-2">

          Top European Football Competitions

        </p>

      </div>

      {/* LEAGUE BUTTONS */}

      <div className="flex flex-wrap gap-3 mb-8">

        {leagues.map((league) => (

          <button
            key={league}
            onClick={() =>
              setSelectedLeague(league)
            }
            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
              selectedLeague === league
                ? "bg-orange-500 text-black"
                : "bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            }`}
          >

            {league}

          </button>

        ))}

      </div>

      {/* TABLE */}

      <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        {/* HEADER */}

        <div className="grid grid-cols-[40px_1fr_40px_40px_40px_40px_50px_60px] items-center px-3 py-3 border-b border-zinc-800 bg-zinc-900 text-[11px] md:text-xs font-bold text-zinc-400 uppercase">

          <div>#</div>

          <div>Team</div>

          <div className="text-center">

            P

          </div>

          <div className="text-center">

            W

          </div>

          <div className="text-center">

            D

          </div>

          <div className="text-center">

            L

          </div>

          <div className="text-center">

            GD

          </div>

          <div className="text-center font-extrabold text-white">

            PTS

          </div>

        </div>

        {/* TEAMS */}

        {table.map((team, index) => (

          <div
            key={index}
            className="grid grid-cols-[40px_1fr_40px_40px_40px_40px_50px_60px] items-center px-3 py-3 border-b border-zinc-800 hover:bg-zinc-900 transition text-[11px] md:text-sm"
          >

            {/* POSITION */}

            <div
              className={`font-bold ${
                index < 4
                  ? "text-blue-400"
                  : index >= table.length - 3
                  ? "text-red-400"
                  : "text-zinc-400"
              }`}
            >

              {index + 1}

            </div>

            {/* TEAM */}

            <Link
              to={`/team/${team.team}`}
              className="font-semibold truncate hover:text-orange-500 transition"
            >

              {team.team}

            </Link>

            {/* PLAYED */}

            <div className="text-center text-zinc-300">

              {team.p}

            </div>

            {/* WINS */}

            <div className="text-center text-green-400">

              {team.w}

            </div>

            {/* DRAWS */}

            <div className="text-center text-yellow-400">

              {team.d}

            </div>

            {/* LOSSES */}

            <div className="text-center text-red-400">

              {team.l}

            </div>

            {/* GOAL DIFFERENCE */}

            <div className="text-center text-zinc-300">

              {team.gd > 0
                ? `+${team.gd}`
                : team.gd}

            </div>

            {/* POINTS */}

            <div className="text-center font-extrabold text-white">

              {team.pts}

            </div>

          </div>

        ))}

      </div>

      {/* KEY */}

      <div className="mt-8 border border-zinc-800 rounded-2xl bg-zinc-950 p-5">

        <h2 className="text-lg font-bold mb-4">

          Key

        </h2>

        <div className="space-y-3 text-sm">

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>

            <span>

              Champions League

            </span>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-orange-500 rounded-full"></div>

            <span>

              Europa League

            </span>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-green-500 rounded-full"></div>

            <span>

              Europa Conference League

            </span>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-red-500 rounded-full"></div>

            <span>

              Relegation

            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Standings