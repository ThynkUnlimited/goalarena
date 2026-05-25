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
      className={`rounded-2xl p-6 w-full md:w-[360px] border transition shadow-lg hover:scale-[1.02] ${
        status === "LIVE"
          ? "bg-slate-900 border-red-500 shadow-red-500/20"
          : "bg-slate-900 border-slate-800 hover:border-green-500"
      }`}
    >

      {/* TOP */}

      <div className="flex items-center justify-between mb-5">

        {/* LEAGUE */}

        <div>

          <p className="text-green-400 text-sm font-bold">
            {league}
          </p>

          <p className="text-slate-400 text-xs">
            {leagueInfo.flag}
            {" "}
            {leagueInfo.country}
          </p>

        </div>

        {/* STATUS + FAVORITE */}

        <div className="flex items-center gap-3">

          <button
            onClick={toggleFavorite}
            className="text-2xl hover:scale-110 transition"
          >
            {favorite ? "⭐" : "☆"}
          </button>

          <div
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              status === "LIVE"
                ? "bg-red-500 text-white animate-pulse"
                : status === "FT"
                ? "bg-green-500 text-black"
                : "bg-slate-700 text-white"
            }`}
          >

            {status === "LIVE"
              ? `${liveMinute}' LIVE`
              : status}

          </div>

        </div>

      </div>

      {/* MATCH */}

      <div className="space-y-5">

        {/* HOME */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={homeLogo}
              alt={team1}
              className="w-12 h-12"
            />

            <h2 className="font-bold text-lg">
              {team1}
            </h2>

          </div>

          <span className="text-2xl font-bold text-green-400">
            {score.split("-")[0]}
          </span>

        </div>

        {/* AWAY */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={awayLogo}
              alt={team2}
              className="w-12 h-12"
            />

            <h2 className="font-bold text-lg">
              {team2}
            </h2>

          </div>

          <span className="text-2xl font-bold text-green-400">
            {score.split("-")[1]}
          </span>

        </div>

      </div>

      {/* AI PREDICTION */}

      <div className="mt-6 bg-slate-800 rounded-xl p-4 border border-slate-700">

        <p className="text-sm text-slate-400 mb-2">
          🧠 AI Prediction
        </p>

        <div className="flex items-center justify-between">

          <p className="font-bold text-green-400">
            {aiPrediction.prediction}
          </p>

          <span className="text-sm bg-green-500 text-black px-3 py-1 rounded-full font-bold">
            {aiPrediction.confidence}%
          </span>

        </div>

      </div>

      {/* FOOTER */}

      <div className="mt-6 border-t border-slate-800 pt-4 space-y-2">

        <p className="text-slate-300 text-sm">
          🕒 {time}
        </p>

        <p className="text-slate-400 text-sm">
          🏟️ {stadium}
        </p>

      </div>

    </Link>
  )
}

export default MatchCard