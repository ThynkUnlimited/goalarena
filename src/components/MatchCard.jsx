import { Link } from "react-router-dom"

import { useState } from "react"

import { leagueData } from "../utils/leagues"

import {
  addFavorite,
  removeFavorite,
  isFavorite
} from "../utils/favorites"

import {
  generatePrediction
} from "../utils/predictions"

import {
  getLiveMinute
} from "../utils/liveTime"

import {
  generateForm
} from "../utils/teamForm"

function MatchCard({
  match,
  team1,
  team2,
  homeLogo,
  awayLogo,
  score,
  time,
  stadium,
  league,
  minute,
  status
}) {

  const leagueInfo =
    leagueData[league] || {}

  const [favorite, setFavorite] =
    useState(
      isFavorite(team1)
    )

  const aiPrediction =
    generatePrediction(match)

  const liveMinute =
    getLiveMinute(minute)

  const homeForm =
    generateForm()

  const awayForm =
    generateForm()

  const isLive =
    ["1H", "2H", "HT", "LIVE"].includes(status)

  const isFinished =
    ["FT", "AET", "PEN"].includes(status)

  const isUpcoming =
    ["NS", "TBD", "PST"].includes(status)

  function toggleFavorite(e) {

    e.preventDefault()

    if (favorite) {

      removeFavorite(team1)

    } else {

      addFavorite(team1)
    }

    setFavorite(!favorite)
  }

  return (

    <Link
      to={`/match/${match.fixture.id}`}
      className="block bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900 transition px-4 py-4"
    >

      {/* TOP */}

      <div className="flex items-center justify-between mb-3">

        {/* LEAGUE */}

        <div className="flex items-center gap-2">

          <span className="text-lg">
            {leagueInfo.flag}
          </span>

          <span className="text-sm text-zinc-400 font-semibold">
            {league}
          </span>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* AI */}

          <div className="hidden md:flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded-full">

            <span className="text-xs">
              🧠
            </span>

            <span className="text-xs text-orange-500 font-bold">
              {aiPrediction.confidence}%
            </span>

          </div>

          {/* FAVORITE */}

          <button
            onClick={toggleFavorite}
            className="text-xl"
          >

            {favorite ? "⭐" : "☆"}

          </button>

          {/* STATUS */}

          <div
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              isLive
                ? "bg-red-500 text-white animate-pulse"
                : isFinished
                ? "bg-green-500 text-black"
                : isUpcoming
                ? "bg-blue-500 text-white"
                : "bg-zinc-700 text-white"
            }`}
          >

            {isLive
              ? `${liveMinute}'`
              : isFinished
              ? "Finished"
              : isUpcoming
              ? "Upcoming"
              : status}

          </div>

        </div>

      </div>

      {/* MATCH ROW */}

      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">

        {/* TEAMS */}

        <div className="space-y-4">

          {/* HOME */}

          <div className="flex items-center gap-3">

            <img
              src={homeLogo}
              alt={team1}
              className="w-7 h-7"
            />

            <div>

              <span className="font-semibold">
                {team1}
              </span>

              <div className="flex gap-1 mt-1">

                {homeForm.map((item, index) => (

                  <span
                    key={index}
                    className={`text-[10px] px-1 rounded ${
                      item === "W"
                        ? "bg-green-500 text-black"
                        : item === "L"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* AWAY */}

          <div className="flex items-center gap-3">

            <img
              src={awayLogo}
              alt={team2}
              className="w-7 h-7"
            />

            <div>

              <span className="font-semibold">
                {team2}
              </span>

              <div className="flex gap-1 mt-1">

                {awayForm.map((item, index) => (

                  <span
                    key={index}
                    className={`text-[10px] px-1 rounded ${
                      item === "W"
                        ? "bg-green-500 text-black"
                        : item === "L"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* SCORE */}

        <div className="text-right">

          <div className="text-2xl font-bold text-orange-500">

            <div>
              {score.split("-")[0]}
            </div>

            <div>
              {score.split("-")[1]}
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">

        <span>
          🕒 {time}
        </span>

        <span>
          🏟️ {stadium}
        </span>

      </div>

    </Link>
  )
}

export default MatchCard