import { Link } from "react-router-dom"

function RightPanel() {

  const trendingMatches = [

    {
      id: 1,
      home: "Chelsea",
      away: "Arsenal",
      score: "2 - 1"
    },

    {
      id: 2,
      home: "Barcelona",
      away: "Real Madrid",
      score: "3 - 2"
    },

    {
      id: 3,
      home: "Liverpool",
      away: "Man City",
      score: "1 - 1"
    }

  ]

  const topScorers = [

    {
      player: "Haaland",
      goals: 27
    },

    {
      player: "Kane",
      goals: 24
    },

    {
      player: "Mbappé",
      goals: 22
    },

    {
      player: "Salah",
      goals: 20
    }

  ]

  return (

    <aside className="hidden xl:flex flex-col w-[320px] border-l border-zinc-800 bg-black min-h-screen sticky top-0">

      {/* HEADER */}

      <div className="px-5 py-5 border-b border-zinc-800">

        <h2 className="text-lg font-bold text-white">

          Match Center

        </h2>

        <p className="text-xs text-zinc-500 mt-1">

          Live football insights

        </p>

      </div>

      {/* TRENDING MATCHES */}

      <div className="px-4 py-5">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-sm font-semibold text-white">

            Trending Matches

          </h3>

          <span className="text-xs text-zinc-500">

            Live
          </span>

        </div>

        <div className="space-y-3">

          {trendingMatches.map((match) => (

            <Link
              key={match.id}
              to={`/match/${match.id}`}
              className="block border border-zinc-800 rounded-2xl p-4 hover:bg-zinc-900 hover:border-orange-500 transition"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-zinc-300">

                    {match.home}

                  </p>

                  <p className="text-sm text-zinc-300 mt-1">

                    {match.away}

                  </p>

                </div>

                <div className="text-lg font-bold text-white">

                  {match.score}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* TOP SCORERS */}

      <div className="px-4 py-5 border-t border-zinc-800">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-sm font-semibold text-white">

            Top Scorers

          </h3>

          <span className="text-xs text-zinc-500">

            Season
          </span>

        </div>

        <div className="space-y-2">

          {topScorers.map((player, index) => (

            <div
              key={index}
              className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-3 hover:bg-zinc-900 transition"
            >

              <div className="flex items-center gap-3">

                <span className="text-xs text-zinc-500 w-4">

                  {index + 1}

                </span>

                <span className="text-sm text-zinc-300">

                  {player.player}

                </span>

              </div>

              <span className="text-sm font-bold text-orange-500">

                {player.goals}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* QUICK STATS */}

      <div className="px-4 py-5 border-t border-zinc-800">

        <h3 className="text-sm font-semibold text-white mb-4">

          Quick Stats

        </h3>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

            <p className="text-xs text-zinc-500">

              Live Matches

            </p>

            <p className="text-2xl font-bold text-white mt-2">

              24

            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

            <p className="text-xs text-zinc-500">

              Goals Today

            </p>

            <p className="text-2xl font-bold text-white mt-2">

              67

            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

            <p className="text-xs text-zinc-500">

              Competitions

            </p>

            <p className="text-2xl font-bold text-white mt-2">

              18

            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4">

            <p className="text-xs text-zinc-500">

              Players

            </p>

            <p className="text-2xl font-bold text-white mt-2">

              540

            </p>

          </div>

        </div>

      </div>

    </aside>
  )
}

export default RightPanel