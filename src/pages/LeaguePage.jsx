import { useParams } from "react-router-dom"

function LeaguePage() {

  const { leagueName } = useParams()

  const topScorers = [

    {
      player: "Haaland",
      goals: 27
    },

    {
      player: "Salah",
      goals: 20
    },

    {
      player: "Son",
      goals: 18
    }

  ]

  const fixtures = [

    {
      home: "Chelsea",
      away: "Arsenal",
      time: "20:00"
    },

    {
      home: "Liverpool",
      away: "Man City",
      time: "22:00"
    }

  ]

  return (

    <div className="bg-black text-white min-h-screen px-4 md:px-6 py-5">

      {/* HEADER */}

      <div className="border border-zinc-800 rounded-2xl bg-zinc-950 p-6">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl">

            🏆

          </div>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">

              {leagueName}

            </h1>

            <p className="text-zinc-500 mt-2">

              League Overview & Statistics

            </p>

          </div>

        </div>

      </div>

      {/* QUICK STATS */}

      <div className="grid md:grid-cols-4 gap-4 mt-6">

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-sm text-zinc-500">

            Clubs

          </p>

          <p className="text-3xl font-bold mt-3">

            20

          </p>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-sm text-zinc-500">

            Matches

          </p>

          <p className="text-3xl font-bold mt-3">

            380

          </p>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-sm text-zinc-500">

            Goals

          </p>

          <p className="text-3xl font-bold mt-3">

            1024

          </p>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-sm text-zinc-500">

            Avg Goals

          </p>

          <p className="text-3xl font-bold mt-3">

            2.7

          </p>

        </div>

      </div>

      {/* TOP SCORERS */}

      <div className="mt-6 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold">

          Top Scorers

        </div>

        {topScorers.map((player, index) => (

          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 hover:bg-zinc-900 transition"
          >

            <div className="flex items-center gap-3">

              <span className="text-zinc-500 text-sm">

                {index + 1}

              </span>

              <span className="text-zinc-300">

                {player.player}

              </span>

            </div>

            <span className="text-orange-500 font-bold">

              {player.goals}

            </span>

          </div>

        ))}

      </div>

      {/* FIXTURES */}

      <div className="mt-6 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold">

          Upcoming Fixtures

        </div>

        {fixtures.map((fixture, index) => (

          <div
            key={index}
            className="grid grid-cols-[1fr_80px] items-center px-4 py-3 border-b border-zinc-800 hover:bg-zinc-900 transition"
          >

            <div className="text-zinc-300">

              {fixture.home}

              {" vs "}

              {fixture.away}

            </div>

            <div className="text-right text-zinc-500 text-sm">

              {fixture.time}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default LeaguePage