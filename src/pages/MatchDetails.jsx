import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  getMatchStatistics,
  getMatchLineups,
  getMatchEvents
} from "../services/footballApi"

function MatchDetails() {
  const { state } = useLocation()

  const match = state?.match

  const [stats, setStats] = useState([])
  const [lineups, setLineups] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchMatchData() {
      if (match?.fixture?.id) {

        const statisticsData =
          await getMatchStatistics(match.fixture.id)

        setStats(statisticsData)

        const lineupData =
          await getMatchLineups(match.fixture.id)

        setLineups(lineupData)

        const eventsData =
          await getMatchEvents(match.fixture.id)

        setEvents(eventsData)
      }
    }

    fetchMatchData()
  }, [match])

  if (!match) {
    return (
      <div className="text-white p-10">
        Match not found
      </div>
    )
  }

  const homeStats = stats[0]
  const awayStats = stats[1]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      {/* LEAGUE */}

      <p className="text-green-400 mb-4 text-lg">
        {match.league.name}
      </p>

      <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto">

        {/* SCORE SECTION */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* HOME */}

          <div className="flex flex-col items-center">

            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              className="w-28 h-28 object-contain"
            />

            <h2 className="text-2xl font-bold mt-4 text-center">
              {match.teams.home.name}
            </h2>

          </div>

          {/* SCORE */}

          <div className="text-center">

            <p className="text-6xl font-bold text-green-400">
              {match.goals.home} - {match.goals.away}
            </p>

            <p className="text-yellow-400 text-2xl font-bold mt-4">
              {match.fixture.status.elapsed || 0}'
            </p>

            <div className="bg-red-500 px-4 py-2 rounded-full mt-4 font-bold inline-block">
              {match.fixture.status.short}
            </div>

          </div>

          {/* AWAY */}

          <div className="flex flex-col items-center">

            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              className="w-28 h-28 object-contain"
            />

            <h2 className="text-2xl font-bold mt-4 text-center">
              {match.teams.away.name}
            </h2>

          </div>

        </div>

        {/* MATCH INFO */}

        <div className="border-t border-slate-700 mt-10 pt-6 space-y-4 text-slate-300">

          <p>
            🏟 Stadium: {match.fixture.venue.name}
          </p>

          <p>
            📍 City: {match.fixture.venue.city}
          </p>

          <p>
            🕒 Time:
            {" "}
            {new Date(match.fixture.date).toLocaleString("en-KE")}
          </p>

          <p>
            ⚽ Referee:
            {" "}
            {match.fixture.referee || "Unknown"}
          </p>

        </div>

        {/* STATISTICS */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-green-400 mb-8">
            📊 Match Statistics
          </h2>

          {homeStats && awayStats ? (

            <div className="space-y-5">

              {homeStats.statistics.map((stat, index) => (

                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-4"
                >

                  <div className="flex justify-between items-center gap-4">

                    <p className="font-bold text-green-400 w-[80px]">
                      {stat.value || 0}
                    </p>

                    <p className="text-slate-300 text-center flex-1">
                      {stat.type}
                    </p>

                    <p className="font-bold text-green-400 w-[80px] text-right">
                      {awayStats.statistics[index].value || 0}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-slate-400">
              Statistics unavailable.
            </p>

          )}

        </div>

        {/* LINEUPS */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-green-400 mb-8">
            📺 Team Lineups
          </h2>

          {lineups.length > 0 ? (

            <div className="grid md:grid-cols-2 gap-8">

              {lineups.map((team, index) => (

                <div
                  key={index}
                  className="bg-slate-800 rounded-2xl p-6"
                >

                  {/* TEAM HEADER */}

                  <div className="flex items-center gap-4 mb-6">

                    <img
                      src={team.team.logo}
                      alt={team.team.name}
                      className="w-14 h-14"
                    />

                    <div>

                      <h3 className="text-2xl font-bold">
                        {team.team.name}
                      </h3>

                      <p className="text-green-400">
                        Formation: {team.formation}
                      </p>

                    </div>

                  </div>

                  {/* STARTING XI */}

                  <div className="mb-8">

                    <h4 className="text-xl font-bold text-yellow-400 mb-4">
                      Starting XI
                    </h4>

                    <div className="space-y-3">

                      {team.startXI.map((player, idx) => (

                        <div
                          key={idx}
                          className="bg-slate-700 rounded-lg px-4 py-3 flex justify-between"
                        >

                          <p>
                            {player.player.number}.
                            {" "}
                            {player.player.name}
                          </p>

                          <p className="text-green-400">
                            {player.player.pos}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* SUBSTITUTES */}

                  <div>

                    <h4 className="text-xl font-bold text-sky-400 mb-4">
                      Substitutes
                    </h4>

                    <div className="space-y-3">

                      {team.substitutes.map((player, idx) => (

                        <div
                          key={idx}
                          className="bg-slate-700 rounded-lg px-4 py-3 flex justify-between"
                        >

                          <p>
                            {player.player.number}.
                            {" "}
                            {player.player.name}
                          </p>

                          <p className="text-green-400">
                            {player.player.pos}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-slate-400">
              Lineups unavailable.
            </p>

          )}

        </div>

        {/* MATCH EVENTS */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-green-400 mb-8">
            📈 Match Events
          </h2>

          {events.length > 0 ? (

            <div className="space-y-4">

              {events.map((event, index) => (

                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-5 flex items-center justify-between"
                >

                  <div>

                    <p className="text-yellow-400 font-bold">
                      {event.time.elapsed}'
                    </p>

                    <p className="text-white font-semibold">
                      {event.player.name}
                    </p>

                    <p className="text-slate-400 text-sm">
                      {event.team.name}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-green-400 font-bold">
                      {event.type}
                    </p>

                    <p className="text-slate-300 text-sm">
                      {event.detail}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-slate-400">
              No match events available.
            </p>

          )}

        </div>

      </div>

    </div>
  )
}

export default MatchDetails