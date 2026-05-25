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

function Home() {

  const [matches, setMatches] = useState([])

  const [activeTab, setActiveTab] =
    useState("live")

  const [search, setSearch] =
    useState("")

  const [selectedLeague, setSelectedLeague] =
    useState("all")

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

  const leagues = [
    "all",
    ...new Set(
      matches.map(
        (match) => match.league.name
      )
    )
  ]

  const filteredMatches = useMemo(() => {

    return matches.filter((match) => {

      const home =
        match.teams.home.name.toLowerCase()

      const away =
        match.teams.away.name.toLowerCase()

      const league =
        match.league.name.toLowerCase()

      const matchesSearch =
        home.includes(search.toLowerCase()) ||
        away.includes(search.toLowerCase()) ||
        league.includes(search.toLowerCase())

      const matchesLeague =
        selectedLeague === "all" ||
        match.league.name === selectedLeague

      return matchesSearch && matchesLeague

    })

  }, [
    matches,
    search,
    selectedLeague
  ])

  return (

    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-green-500 mb-3">
          ⚽ GoalArena
        </h1>

        <p className="text-slate-300 text-xl">
          Live Football Scores in Kenyan Time
        </p>

      </div>

      {/* SEARCH */}

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search teams or leagues..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-[400px] bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-white outline-none focus:border-green-500"
        />

      </div>

      {/* LEAGUE FILTER */}

      <div className="mb-10">

        <select
          value={selectedLeague}
          onChange={(e) =>
            setSelectedLeague(
              e.target.value
            )
          }
          className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-white outline-none focus:border-green-500"
        >

          {leagues.map((league) => (

            <option
              key={league}
              value={league}
            >

              {league === "all"
                ? "All Leagues"
                : league}

            </option>

          ))}

        </select>

      </div>

      {/* TABS */}

      <div className="flex flex-wrap gap-4 mb-10">

        <button
          onClick={() =>
            setActiveTab("live")
          }
          className={`px-6 py-3 rounded-xl font-bold transition ${
            activeTab === "live"
              ? "bg-green-500 text-black"
              : "bg-slate-800 text-white"
          }`}
        >
          🔴 Live
        </button>

        <button
          onClick={() =>
            setActiveTab("upcoming")
          }
          className={`px-6 py-3 rounded-xl font-bold transition ${
            activeTab === "upcoming"
              ? "bg-green-500 text-black"
              : "bg-slate-800 text-white"
          }`}
        >
          🕒 Upcoming
        </button>

        <button
          onClick={() =>
            setActiveTab("finished")
          }
          className={`px-6 py-3 rounded-xl font-bold transition ${
            activeTab === "finished"
              ? "bg-green-500 text-black"
              : "bg-slate-800 text-white"
          }`}
        >
          ✅ Finished
        </button>

      </div>

      {/* MATCHES */}

      <div className="flex flex-wrap gap-6">

        {filteredMatches.length > 0 ? (

          filteredMatches.map((match) => (

            <MatchCard
              key={match.fixture.id}
              match={match}
              team1={match.teams.home.name}
              team2={match.teams.away.name}
              homeLogo={match.teams.home.logo}
              awayLogo={match.teams.away.logo}
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
              league={match.league.name}
              minute={
                match.fixture.status.elapsed || 0
              }
              status={
                match.fixture.status.short
              }
            />

          ))

        ) : (

          <div className="text-slate-400 text-xl">
            No matches found.
          </div>

        )}

      </div>

      {/* HIGHLIGHTS */}

      <Highlights />

    </div>
  )
}

export default Home