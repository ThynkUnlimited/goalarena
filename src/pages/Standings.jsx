import { useEffect, useState } from "react"

import {
  getLeagueStandings
} from "../services/footballApi"

function Standings() {

  const [table, setTable] = useState([])

  const [league, setLeague] =
    useState("39")

  useEffect(() => {

    async function fetchStandings() {

      const data =
        await getLeagueStandings(league)

      setTable(
        data[0]?.league?.standings[0] || []
      )
    }

    fetchStandings()

  }, [league])

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold text-green-500 mb-8">
        🏆 League Standings
      </h1>

      {/* LEAGUE SELECT */}

      <select
        value={league}
        onChange={(e) =>
          setLeague(e.target.value)
        }
        className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 mb-8"
      >

        <option value="39">
          Premier League
        </option>

        <option value="140">
          La Liga
        </option>

        <option value="135">
          Serie A
        </option>

        <option value="78">
          Bundesliga
        </option>

      </select>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="w-full bg-slate-900 rounded-2xl overflow-hidden">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left">
                #
              </th>

              <th className="p-4 text-left">
                Team
              </th>

              <th className="p-4">
                MP
              </th>

              <th className="p-4">
                W
              </th>

              <th className="p-4">
                D
              </th>

              <th className="p-4">
                L
              </th>

              <th className="p-4">
                GD
              </th>

              <th className="p-4">
                PTS
              </th>

            </tr>

          </thead>

          <tbody>

            {table.map((team) => (

              <tr
                key={team.team.id}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >

                <td className="p-4 font-bold">
                  {team.rank}
                </td>

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <img
                      src={team.team.logo}
                      alt={team.team.name}
                      className="w-8 h-8"
                    />

                    <span>
                      {team.team.name}
                    </span>

                  </div>

                </td>

                <td className="p-4 text-center">
                  {team.all.played}
                </td>

                <td className="p-4 text-center">
                  {team.all.win}
                </td>

                <td className="p-4 text-center">
                  {team.all.draw}
                </td>

                <td className="p-4 text-center">
                  {team.all.lose}
                </td>

                <td className="p-4 text-center">
                  {team.goalsDiff}
                </td>

                <td className="p-4 text-center font-bold text-green-400">
                  {team.points}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Standings