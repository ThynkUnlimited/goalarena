import { leagueData } from "../utils/leagues"

function Sidebar() {

  const leagues = [
    "Premier League",
    "La Liga",
    "Serie A",
    "Bundesliga",
    "Ligue 1",
    "UEFA Champions League"
  ]

  return (

    <aside className="hidden lg:block w-[260px] bg-slate-900 border-r border-slate-800 h-screen sticky top-0 overflow-y-auto">

      {/* HEADER */}

      <div className="p-6 border-b border-slate-800">

        <h2 className="text-2xl font-bold text-green-500">
          ⚽ GoalArena
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Football Dashboard
        </p>

      </div>

      {/* LEAGUES */}

      <div className="p-4">

        <p className="text-slate-500 text-xs uppercase mb-4 font-bold">
          Top Competitions
        </p>

        <div className="space-y-2">

          {leagues.map((league) => {

            const info =
              leagueData[league] || {}

            return (

              <button
                key={league}
                className="w-full flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition rounded-xl px-4 py-3 text-left"
              >

                <span className="text-xl">
                  {info.flag}
                </span>

                <div>

                  <p className="font-semibold text-white">
                    {league}
                  </p>

                  <p className="text-xs text-slate-400">
                    {info.country}
                  </p>

                </div>

              </button>

            )
          })}

        </div>

      </div>

      {/* FOOTER */}

      <div className="p-4 border-t border-slate-800 mt-6">

        <p className="text-xs text-slate-500">
          GoalArena v1.0
        </p>

      </div>

    </aside>
  )
}

export default Sidebar