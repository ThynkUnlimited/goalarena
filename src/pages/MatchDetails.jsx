import { useParams } from "react-router-dom"

function MatchDetails() {

  const { id } = useParams()

  const stats = [

    {
      label: "Possession",
      home: "61%",
      away: "39%"
    },

    {
      label: "Shots",
      home: 14,
      away: 7
    },

    {
      label: "Shots on Target",
      home: 6,
      away: 3
    },

    {
      label: "Corners",
      home: 8,
      away: 3
    },

    {
      label: "Yellow Cards",
      home: 2,
      away: 4
    }

  ]

  const timeline = [

    {
      minute: "12'",
      event: "⚽ Palmer Goal"
    },

    {
      minute: "31'",
      event: "🟨 Rice Yellow Card"
    },

    {
      minute: "57'",
      event: "⚽ Jackson Goal"
    },

    {
      minute: "74'",
      event: "🔄 Substitution"
    }

  ]

  const homeLineup = [

    "Sanchez",

    "James",
    "Disasi",
    "Silva",
    "Cucurella",

    "Caicedo",
    "Enzo",

    "Sterling",
    "Palmer",
    "Mudryk",

    "Jackson"

  ]

  const awayLineup = [

    "Raya",

    "White",
    "Saliba",
    "Gabriel",
    "Zinchenko",

    "Rice",
    "Odegaard",
    "Havertz",

    "Saka",
    "Martinelli",
    "Jesus"

  ]

  return (

    <div className="bg-black text-white min-h-screen px-4 md:px-6 py-5">

      {/* MATCH HEADER */}

      <div className="border border-zinc-800 rounded-2xl bg-zinc-950 p-6">

        {/* LEAGUE */}

        <div className="text-sm text-zinc-500 mb-5">

          Premier League • Live

        </div>

        {/* SCOREBOARD */}

        <div className="grid grid-cols-3 items-center">

          {/* HOME */}

          <div className="flex flex-col items-center text-center">

            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">

              ⚽

            </div>

            <h2 className="mt-3 text-lg font-semibold">

              Chelsea

            </h2>

          </div>

          {/* SCORE */}

          <div className="text-center">

            <div className="text-5xl font-bold tracking-tight">

              2 - 1

            </div>

            <div className="mt-3">

              <span className="bg-red-500/20 text-red-500 text-xs font-bold px-3 py-1 rounded-full">

                LIVE 78'

              </span>

            </div>

          </div>

          {/* AWAY */}

          <div className="flex flex-col items-center text-center">

            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">

              ⚽

            </div>

            <h2 className="mt-3 text-lg font-semibold">

              Arsenal

            </h2>

          </div>

        </div>

        {/* EXTRA INFO */}

        <div className="mt-6 pt-5 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

          <div>

            <p className="text-zinc-500">

              Stadium

            </p>

            <p className="mt-1 text-zinc-300">

              Stamford Bridge

            </p>

          </div>

          <div>

            <p className="text-zinc-500">

              Referee

            </p>

            <p className="mt-1 text-zinc-300">

              Michael Oliver

            </p>

          </div>

          <div>

            <p className="text-zinc-500">

              Attendance

            </p>

            <p className="mt-1 text-zinc-300">

              40,221

            </p>

          </div>

          <div>

            <p className="text-zinc-500">

              Match ID

            </p>

            <p className="mt-1 text-zinc-300">

              #{id}

            </p>

          </div>

        </div>

      </div>

      {/* MATCH STATS */}

      <div className="mt-6 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold">

          Match Statistics

        </div>

        {stats.map((stat, index) => (

          <div
            key={index}
            className="grid grid-cols-[60px_1fr_60px] items-center px-4 py-3 border-b border-zinc-800 text-sm"
          >

            <div className="text-left text-zinc-300 font-medium">

              {stat.home}

            </div>

            <div className="text-center text-zinc-500">

              {stat.label}

            </div>

            <div className="text-right text-zinc-300 font-medium">

              {stat.away}

            </div>

          </div>

        ))}

      </div>

      {/* MATCH TIMELINE */}

      <div className="mt-6 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold">

          Match Timeline

        </div>

        {timeline.map((event, index) => (

          <div
            key={index}
            className="flex items-center gap-4 px-4 py-3 border-b border-zinc-800 text-sm hover:bg-zinc-900 transition"
          >

            <div className="text-orange-500 font-semibold w-[45px]">

              {event.minute}

            </div>

            <div className="text-zinc-300">

              {event.event}

            </div>

          </div>

        ))}

      </div>

      {/* LINEUPS */}

      <div className="mt-6 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

        {/* HEADER */}

        <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">

          <h2 className="text-sm font-semibold">

            Starting Lineups

          </h2>

          <div className="flex items-center gap-4 text-xs text-zinc-500">

            <span>
              Chelsea • 4-2-3-1
            </span>

            <span>
              Arsenal • 4-3-3
            </span>

          </div>

        </div>

        {/* LINEUPS GRID */}

        <div className="grid md:grid-cols-2">

          {/* HOME */}

          <div className="border-b md:border-b-0 md:border-r border-zinc-800">

            <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold text-zinc-300">

              Chelsea XI

            </div>

            <div className="p-4 space-y-2">

              {homeLineup.map((player, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition"
                >

                  {player}

                </div>

              ))}

            </div>

          </div>

          {/* AWAY */}

          <div>

            <div className="px-4 py-3 border-b border-zinc-800 text-sm font-semibold text-zinc-300">

              Arsenal XI

            </div>

            <div className="p-4 space-y-2">

              {awayLineup.map((player, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition"
                >

                  {player}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default MatchDetails