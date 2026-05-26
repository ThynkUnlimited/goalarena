import { useNavigate } from "react-router-dom"

function LiveTicker() {

  const navigate = useNavigate()

  const liveMatches = [

    {
      id: 1,
      home: "Chelsea",
      away: "Arsenal",
      score: "2 - 1",
      minute: "78'"
    },

    {
      id: 2,
      home: "Liverpool",
      away: "Man City",
      score: "1 - 1",
      minute: "64'"
    },

    {
      id: 3,
      home: "Barcelona",
      away: "Real Madrid",
      score: "3 - 2",
      minute: "82'"
    },

    {
      id: 4,
      home: "PSG",
      away: "Lyon",
      score: "2 - 0",
      minute: "55'"
    }

  ]

  return (

    <div className="border-b border-zinc-800 bg-zinc-950 overflow-x-auto">

      <div className="flex items-center gap-3 px-4 py-3 min-w-max">

        {/* LIVE LABEL */}

        <div className="flex items-center gap-2 shrink-0">

          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

          <span className="text-xs font-bold tracking-wide text-red-500 uppercase">

            Live

          </span>

        </div>

        {/* MATCHES */}

        {liveMatches.map((match) => (

          <button
            key={match.id}
            onClick={() =>
              navigate(`/match/${match.id}`)
            }
            className="flex items-center gap-3 bg-black border border-zinc-800 hover:border-orange-500 hover:bg-zinc-900 transition rounded-2xl px-4 py-2 shrink-0"
          >

            {/* TEAMS */}

            <div className="flex items-center gap-2 text-sm">

              <span className="text-zinc-300">

                {match.home}

              </span>

              <span className="text-zinc-500">

                vs

              </span>

              <span className="text-zinc-300">

                {match.away}

              </span>

            </div>

            {/* SCORE */}

            <div className="text-sm font-bold text-white">

              {match.score}

            </div>

            {/* MINUTE */}

            <div className="text-xs font-semibold text-red-500">

              {match.minute}

            </div>

          </button>

        ))}

      </div>

    </div>
  )
}

export default LiveTicker