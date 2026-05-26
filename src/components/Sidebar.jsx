import { Link } from "react-router-dom"

function Sidebar() {

  const favoriteTeams = [
    "Chelsea FC",
    "Manchester United",
    "Real Madrid",
    "Barcelona"
  ]

  const competitions = [

    {
      name: "Premier League",
      country: "England"
    },

    {
      name: "La Liga",
      country: "Spain"
    },

    {
      name: "Serie A",
      country: "Italy"
    },

    {
      name: "Bundesliga",
      country: "Germany"
    },

    {
      name: "Ligue 1",
      country: "France"
    }

  ]

  const regions = [

    "UEFA Champions League",
    "Europa League",
    "World Cup"

  ]

  return (

    <aside className="hidden lg:flex flex-col w-[260px] bg-black border-r border-zinc-800 min-h-screen sticky top-0 overflow-y-auto">

      {/* HEADER */}

      <div className="p-6 border-b border-zinc-800">

        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >

          ⚽ GoalArena

        </Link>

        <p className="text-zinc-500 text-sm mt-2">

          Live Football Dashboard

        </p>

      </div>

      {/* MAIN NAVIGATION */}

      <div className="p-4 border-b border-zinc-800">

        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">

          Navigation

        </h2>

        <div className="space-y-2">

          <Link
            to="/"
            className="block bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
          >

            <p className="text-sm font-semibold text-white">

              🏠 Home

            </p>

          </Link>

          <Link
            to="/standings"
            className="block bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
          >

            <p className="text-sm font-semibold text-white">

              📊 Standings

            </p>

          </Link>

        </div>

      </div>

      {/* FAVORITE TEAMS */}

      <div className="p-4 border-b border-zinc-800">

        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">

          Favorite Teams

        </h2>

        <div className="space-y-2">

          {favoriteTeams.map((team, index) => (

            <Link
              key={index}
              to={`/team/${team}`}
              className="block bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
            >

              <p className="text-sm font-semibold text-white">

                {team}

              </p>

            </Link>

          ))}

        </div>

      </div>

      {/* COMPETITIONS */}

      <div className="p-4 border-b border-zinc-800">

        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">

          Competitions

        </h2>

        <div className="space-y-2">

          {competitions.map((league, index) => (

            <Link
              key={index}
              to={`/league/${league.name}`}
              className="flex items-center justify-between bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
            >

              <div>

                <p className="text-sm font-semibold text-white">

                  {league.name}

                </p>

                <p className="text-xs text-zinc-500 mt-1">

                  {league.country}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* REGIONS & TOURNAMENTS */}

      <div className="p-4 border-b border-zinc-800">

        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">

          Regions & Tournaments

        </h2>

        <div className="space-y-2">

          {regions.map((item, index) => (

            item === "World Cup" ? (

              <Link
                key={index}
                to="/world-cup"
                className="block bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
              >

                <p className="text-sm font-semibold text-white">

                  🏆 World Cup 2026

                </p>

                <p className="text-xs text-zinc-500 mt-1">

                  USA • Canada • Mexico

                </p>

              </Link>

            ) : (

              <Link
                key={index}
                to={`/league/${item}`}
                className="block bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 transition"
              >

                <p className="text-sm font-semibold text-white">

                  {item}

                </p>

              </Link>

            )

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div className="p-4 mt-auto">

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

          <p className="text-xs text-zinc-500">

            GoalArena v2.0

          </p>

          <p className="text-xs text-zinc-600 mt-2">

            Live Scores • Fixtures • Statistics

          </p>

        </div>

      </div>

    </aside>
  )
}

export default Sidebar