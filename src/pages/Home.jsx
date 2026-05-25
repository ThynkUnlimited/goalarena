import { useEffect, useState, useMemo } from "react"

import MatchCard from "../components/MatchCard"

import Highlights from "../components/Highlights"

import {
  getLiveMatches,
  getUpcomingMatches,
  getFinishedMatches
} from "../services/footballApi"

import {
  requestNotificationPermission,
  showNotification
} from "../utils/notifications"

import { leagueData } from "../utils/leagues"

function Home() {

  const [matches, setMatches] =
    useState([])

  const [activeTab, setActiveTab] =
    useState("live")

  const [search, setSearch] =
    useState("")

  const [previousScores, setPreviousScores] =
    useState({})

  useEffect(() => {

    requestNotificationPermission()

    fetchMatches()

    const interval = setInterval(() => {

      fetchMatches()

    }, 60000)

    return () => clearInterval(interval)

  }, [activeTab])

  async function fetchMatches() {

    let data = []

    if (activeTab === "live") {
      data = await getLiveMatches()
    }

    if (activeTab === "upcoming") {
      data = await getUpcomingMatches()
    }

    if (activeTab === "finished") {
      data = await getFinishedMatches()
    }

    data.forEach((match) => {

      const fixtureId =
        match.fixture.id

      const currentScore =
        `${match.goals.home}-${match.goals.away}`

      if (
        previousScores[fixtureId] &&
        previousScores[fixtureId] !== currentScore
      ) {

        showNotification(
          "⚽ GoalArena Goal Alert",
          `${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}`
        )

      }

      previousScores[fixtureId] =
        currentScore

    })

    setPreviousScores({
      ...previousScores
    })

    setMatches(data)
  }

  const filteredMatches =
    useMemo(() => {

      return matches.filter((match) => {

        const home =
          match.teams.home.name.toLowerCase()

        const away =
          match.teams.away.name.toLowerCase()

        const league =
          match.league.name.toLowerCase()

        return (
          home.includes(search.toLowerCase()) ||
          away.includes(search.toLowerCase()) ||
          league.includes(search.toLowerCase())
        )

      })

    }, [matches, search])

  /* GROUP BY LEAGUE */

  const groupedMatches =
    filteredMatches.reduce(
      (acc, match) => {

        const league =
          match.league.name

        if (!acc[league]) {
          acc[league] = []
        }

        acc[league].push(match)

        return acc

      },
      {}
    )

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <div className="px-4 md:px-8 pt-8 pb-6 border-b border-slate-800">

        <h1 className="text-4xl font-bold text-green-500 mb-3">
          ⚽ GoalArena
        </h1>

        <p className="text-slate-400">
          Live Football Scores • Kenyan Time
        </p>

      </div>

      {/* SEARCH + TABS */}

      <div className="sticky top-[72px] z-40 bg-slate-950 border-b border-slate-800 px-4 md:px-8 py-4">

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search teams or leagues..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-[400px] bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white outline-none focus:border-green-500 mb-5"
        />

        {/* TABS */}

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() =>
              setActiveTab("live")
            }
            className={`px-5 py-2 rounded-lg font-bold transition ${
              activeTab === "live"
                ? "bg-red-500 text-white"
                : "bg-slate-800"
            }`}
          >
            🔴 LIVE
          </button>

          <button
            onClick={() =>
              setActiveTab("upcoming")
            }
            className={`px-5 py-2 rounded-lg font-bold transition ${
              activeTab === "upcoming"
                ? "bg-green-500 text-black"
                : "bg-slate-800"
            }`}
          >
            🕒 UPCOMING
          </button>

          <button
            onClick={() =>
              setActiveTab("finished")
            }
            className={`px-5 py-2 rounded-lg font-bold transition ${
              activeTab === "finished"
                ? "bg-blue-500 text-white"
                : "bg-slate-800"
            }`}
          >
            ✅ FINISHED
          </button>

        </div>

      </div>

      {/* MATCHES */}

      <div className="pb-20">

        {Object.keys(groupedMatches).length > 0 ? (

          Object.entries(groupedMatches).map(
            ([league, matches]) => {

              const info =
                leagueData[league] || {}

              return (

                <div
                  key={league}
                  className="mb-8"
                >

                  {/* LEAGUE HEADER */}

                  <div className="bg-slate-900 border-y border-slate-800 px-4 md:px-8 py-3 sticky top-[185px] z-30">

                    <div className="flex items-center gap-3">

                      <span className="text-2xl">
                        {info.flag}
                      </span>

                      <div>

                        <h2 className="font-bold text-lg">
                          {league}
                        </h2>

                        <p className="text-xs text-slate-400">
                          {info.country}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* MATCH ROWS */}

                  <div>

                    {matches.map((match) => (

                      <MatchCard
                        key={match.fixture.id}
                        match={match}
                        team1={
                          match.teams.home.name
                        }
                        team2={
                          match.teams.away.name
                        }
                        homeLogo={
                          match.teams.home.logo
                        }
                        awayLogo={
                          match.teams.away.logo
                        }
                        score={`${match.goals.home ?? 0}-${match.goals.away ?? 0}`}
                        time={new Date(
                          match.fixture.date
                        ).toLocaleTimeString(
                          "en-KE",
                          {
                            hour: "2-digit",
                            minute: "2-digit"
                          }
                        )}
                        stadium={
                          match.fixture.venue.name
                        }
                        league={
                          match.league.name
                        }
                        minute={
                          match.fixture.status.elapsed || 0
                        }
                        status={
                          match.fixture.status.short
                        }
                      />

                    ))}

                  </div>

                </div>

              )
            }
          )

        ) : (

          <div className="p-8 text-slate-400 text-xl">
            No matches found.
          </div>

        )}

      </div>

      {/* HIGHLIGHTS */}

      <div className="px-4 md:px-8 pb-20">

        <Highlights />

      </div>

    </div>
  )
}

export default Home