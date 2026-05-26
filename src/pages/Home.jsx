import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import MatchCard from "../components/MatchCard"

import RightPanel from "../components/RightPanel"

import { getLiveMatches } from "../services/footballApi"

function Home() {

  const [matches, setMatches] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [filter, setFilter] =
    useState("all")

  useEffect(() => {

    async function fetchMatches() {

      try {

        const data =
          await getLiveMatches()

        setMatches(data)

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)
      }
    }

    fetchMatches()

  }, [])

  function filteredMatches() {

    if (filter === "live") {

      return matches.filter((match) => {

        const status =
          match.fixture.status.short

        return [
          "1H",
          "2H",
          "HT",
          "ET",
          "BT",
          "LIVE"
        ].includes(status)
      })
    }

    if (filter === "upcoming") {

      return matches.filter((match) => {

        const status =
          match.fixture.status.short

        return [
          "NS",
          "TBD",
          "PST"
        ].includes(status)
      })
    }

    if (filter === "finished") {

      return matches.filter((match) => {

        const status =
          match.fixture.status.short

        return [
          "FT",
          "AET",
          "PEN"
        ].includes(status)
      })
    }

    return matches
  }

  function groupedMatches() {

    const grouped = {}

    filteredMatches().forEach((match) => {

      const league =
        match.league.name

      if (!grouped[league]) {

        grouped[league] = []
      }

      grouped[league].push(match)
    })

    return grouped
  }

  const grouped =
    groupedMatches()

  return (

    <div className="bg-black text-white min-h-screen flex">

      {/* MAIN */}

      <div className="flex-1 px-4 md:px-6 py-5 overflow-hidden">

        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-8">

          <button className="text-zinc-500 hover:text-white transition text-sm">

            ← Yesterday

          </button>

          <h1 className="text-3xl font-bold tracking-tight">

            Live Matches

          </h1>

          <button className="text-zinc-500 hover:text-white transition text-sm">

            Tomorrow →

          </button>

        </div>

        {/* FILTERS */}

        <div className="flex flex-wrap items-center gap-3 mb-8">

          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === "all"
                ? "bg-orange-500 text-black"
                : "bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            }`}
          >

            All

          </button>

          <button
            onClick={() => setFilter("live")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === "live"
                ? "bg-red-500 text-white"
                : "bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            }`}
          >

            Live

          </button>

          <button
            onClick={() => setFilter("upcoming")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === "upcoming"
                ? "bg-blue-500 text-white"
                : "bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            }`}
          >

            Upcoming

          </button>

          <button
            onClick={() => setFilter("finished")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === "finished"
                ? "bg-green-500 text-black"
                : "bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
            }`}
          >

            Finished

          </button>

        </div>

        {/* LOADING */}

        {loading ? (

          <div className="text-zinc-500">

            Loading matches...

          </div>

        ) : (

          <div className="space-y-8">

            {Object.entries(grouped).map(

              ([league, leagueMatches]) => (

                <div
                  key={league}
                  className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950"
                >

                  {/* LEAGUE HEADER */}

                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900">

                    <Link
                      to={`/league/${league}`}
                      className="text-lg font-bold tracking-tight hover:text-orange-500 transition"
                    >

                      {league}

                    </Link>

                    <span className="text-xs text-zinc-500">

                      {leagueMatches.length} matches

                    </span>

                  </div>

                  {/* MATCHES */}

                  <div>

                    {leagueMatches.map((match) => (

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
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                        stadium={
                          match.fixture.venue?.name ||
                          "Unknown Stadium"
                        }
                        league={match.league.name}
                        minute={match.fixture.status.elapsed}
                        status={match.fixture.status.short}
                      />
                    ))}

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

      {/* RIGHT PANEL */}

      <RightPanel />

    </div>
  )
}

export default Home