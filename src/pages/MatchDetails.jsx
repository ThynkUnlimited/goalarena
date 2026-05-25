import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import {
  getMatchStatistics,
  getMatchLineups,
  getMatchEvents
} from "../services/footballApi"

function MatchDetails() {

  const { id } = useParams()

  const [stats, setStats] = useState([])
  const [lineups, setLineups] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {

    async function fetchData() {

      const statsData =
        await getMatchStatistics(id)

      const lineupData =
        await getMatchLineups(id)

      const eventsData =
        await getMatchEvents(id)

      setStats(statsData)
      setLineups(lineupData)
      setEvents(eventsData)
    }

    fetchData()

  }, [id])

  function getEventIcon(type) {

    if (type === "Goal") return "⚽"

    if (type === "Card") return "🟨"

    if (type === "subst") return "🔄"

    if (type === "Var") return "📺"

    return "🔥"
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-green-500 mb-2">
          ⚽ Match Center
        </h1>

        <p className="text-slate-400">
          Live statistics, events & team lineups
        </p>

      </div>

      {/* TOP GRID */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* LEFT SIDE */}

        <div className="xl:col-span-2 space-y-6">

          {/* MATCH EVENTS */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold text-green-400">
                🔥 Match Timeline
              </h2>

              <div className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                LIVE
              </div>

            </div>

            {events.length > 0 ? (

              <div className="space-y-4">

                {events.map((event, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 transition rounded-2xl p-4"
                  >

                    {/* MINUTE */}

                    <div className="min-w-[55px] text-center">

                      <span className="text-green-400 font-bold text-lg">
                        {event.time.elapsed}'
                      </span>

                    </div>

                    {/* ICON */}

                    <div className="text-2xl">

                      {getEventIcon(event.type)}

                    </div>

                    {/* DETAILS */}

                    <div className="flex-1">

                      <p className="font-bold text-white">
                        {event.player?.name || "Unknown Player"}
                      </p>

                      <p className="text-sm text-slate-400">
                        {event.team?.name}
                      </p>

                    </div>

                    {/* EVENT TYPE */}

                    <div className="text-right">

                      <p className="text-sm font-bold text-green-400">
                        {event.type}
                      </p>

                      <p className="text-xs text-slate-500">
                        {event.detail}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="bg-slate-800 rounded-2xl p-8 text-center">

                <p className="text-slate-400">
                  No live events available.
                </p>

              </div>

            )}

          </div>

          {/* MATCH STATISTICS */}

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              📊 Match Statistics
            </h2>

            {stats.length > 1 ? (

              <div className="space-y-5">

                {stats[0].statistics.map((item, index) => {

                  const homeValue =
                    item.value ?? 0

                  const awayValue =
                    stats[1]?.statistics[index]?.value ?? 0

                  return (

                    <div
                      key={index}
                      className="bg-slate-800 rounded-2xl p-4"
                    >

                      {/* LABEL */}

                      <div className="flex justify-between mb-3">

                        <span className="text-green-400 font-bold">
                          {homeValue}
                        </span>

                        <span className="text-slate-300 font-semibold">
                          {item.type}
                        </span>

                        <span className="text-blue-400 font-bold">
                          {awayValue}
                        </span>

                      </div>

                      {/* BAR */}

                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden flex">

                        <div
                          className="bg-green-500 h-3"
                          style={{
                            width: `${parseInt(homeValue) || 50}%`
                          }}
                        />

                        <div
                          className="bg-blue-500 h-3"
                          style={{
                            width: `${parseInt(awayValue) || 50}%`
                          }}
                        />

                      </div>

                    </div>

                  )
                })}

              </div>

            ) : (

              <div className="bg-slate-800 rounded-2xl p-8 text-center">

                <p className="text-slate-400">
                  No statistics available.
                </p>

              </div>

            )}

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sticky top-4">

            <h2 className="text-2xl font-bold mb-6 text-green-400">
              👥 Team Lineups
            </h2>

            {lineups.length > 0 ? (

              <div className="space-y-8">

                {lineups.map((team, index) => (

                  <div
                    key={index}
                    className="bg-slate-800 rounded-2xl p-5"
                  >

                    {/* TEAM */}

                    <div className="flex items-center gap-4 mb-5">

                      <img
                        src={team.team.logo}
                        alt={team.team.name}
                        className="w-12 h-12"
                      />

                      <div>

                        <h3 className="text-lg font-bold">
                          {team.team.name}
                        </h3>

                        <p className="text-slate-400 text-sm">
                          Formation: {team.formation}
                        </p>

                      </div>

                    </div>

                    {/* PLAYERS */}

                    <div className="space-y-2">

                      {team.startXI.map((player, idx) => (

                        <div
                          key={idx}
                          className="flex justify-between items-center border-b border-slate-700 pb-2 text-sm"
                        >

                          <span className="font-medium">

                            {player.player.number}.
                            {" "}
                            {player.player.name}

                          </span>

                          <span className="text-slate-400">

                            {player.player.pos}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="bg-slate-800 rounded-2xl p-8 text-center">

                <p className="text-slate-400">
                  No lineups available.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default MatchDetails