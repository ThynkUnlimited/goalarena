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

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold text-green-500 mb-8">
        ⚽ Match Details
      </h1>

      {/* STATISTICS */}

      <div className="bg-slate-900 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6 text-green-400">
          📊 Match Statistics
        </h2>

        {stats.length > 0 ? (

          <div className="space-y-4">

            {stats[0].statistics.map((item, index) => (

              <div
                key={index}
                className="flex justify-between items-center border-b border-slate-800 pb-3"
              >

                <span className="font-semibold text-slate-300">
                  {item.type}
                </span>

                <div className="flex gap-10">

                  <span className="text-green-400 font-bold">
                    {item.value ?? 0}
                  </span>

                  <span className="text-slate-500">
                    vs
                  </span>

                  <span className="text-blue-400 font-bold">
                    {stats[1]?.statistics[index]?.value ?? 0}
                  </span>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <p className="text-slate-400">
            No statistics available.
          </p>

        )}

      </div>

      {/* EVENTS */}

      <div className="bg-slate-900 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6 text-green-400">
          🔥 Match Events
        </h2>

        {events.length > 0 ? (

          <div className="space-y-4">

            {events.map((event, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 flex justify-between items-center"
              >

                <div>

                  <p className="font-bold">
                    {event.player.name}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {event.team.name}
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-bold text-green-400">
                    {event.type}
                  </p>

                  <p className="text-slate-400 text-sm">
                    {event.time.elapsed}'
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <p className="text-slate-400">
            No events available.
          </p>

        )}

      </div>

      {/* LINEUPS */}

      <div className="bg-slate-900 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6 text-green-400">
          👥 Team Lineups
        </h2>

        {lineups.length > 0 ? (

          <div className="grid md:grid-cols-2 gap-8">

            {lineups.map((team, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-xl p-5"
              >

                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    className="w-12 h-12"
                  />

                  <div>

                    <h3 className="text-xl font-bold">
                      {team.team.name}
                    </h3>

                    <p className="text-slate-400">
                      Formation: {team.formation}
                    </p>

                  </div>

                </div>

                <div className="space-y-2">

                  {team.startXI.map((player, idx) => (

                    <div
                      key={idx}
                      className="flex justify-between border-b border-slate-700 pb-2"
                    >

                      <span>
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

          <p className="text-slate-400">
            No lineups available.
          </p>

        )}

      </div>

    </div>
  )
}

export default MatchDetails