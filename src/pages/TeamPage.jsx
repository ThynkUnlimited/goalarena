import { useParams } from "react-router-dom"

function TeamPage() {

  const { teamName } = useParams()

  const upcomingFixtures = [

    {
      opponent: "Chelsea",
      date: "12 Aug",
      time: "20:00"
    },

    {
      opponent: "Liverpool",
      date: "18 Aug",
      time: "18:30"
    },

    {
      opponent: "Tottenham",
      date: "22 Aug",
      time: "17:00"
    }

  ]

  const results = [

    {
      opponent: "Barcelona",
      score: "2 - 1",
      result: "W"
    },

    {
      opponent: "Man City",
      score: "1 - 3",
      result: "L"
    },

    {
      opponent: "Tottenham",
      score: "2 - 2",
      result: "D"
    },

    {
      opponent: "Newcastle",
      score: "4 - 1",
      result: "W"
    }

  ]

  const squad = [

    "David Raya",
    "Aaron Ramsdale",
    "Ben White",
    "William Saliba",
    "Gabriel",
    "Oleksandr Zinchenko",
    "Declan Rice",
    "Martin Ødegaard",
    "Kai Havertz",
    "Bukayo Saka",
    "Gabriel Martinelli",
    "Gabriel Jesus"
  ]

  return (

    <div className="bg-black text-white min-h-screen p-4 md:p-6">

      {/* HEADER */}

      <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-r from-red-950 to-zinc-900 p-6">

        <div className="flex items-center gap-5">

          <div className="w-20 h-20 rounded-2xl bg-red-600 flex items-center justify-center text-4xl">

            ⚽

          </div>

          <div>

            <h1 className="text-3xl md:text-4xl font-bold">

              {teamName}

            </h1>

            <p className="text-zinc-400 mt-2 text-sm">

              Team Overview

            </p>

          </div>

        </div>

      </div>

      {/* 3 COLUMN LAYOUT */}

      <div className="grid lg:grid-cols-3 gap-5 mt-8">

        {/* FIXTURES */}

        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

          <div className="px-4 py-4 border-b border-zinc-800 bg-zinc-900">

            <h2 className="text-sm font-bold uppercase tracking-wide">

              Fixtures

            </h2>

          </div>

          <div>

            {upcomingFixtures.map((fixture, index) => (

              <div
                key={index}
                className="flex items-center justify-between px-4 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition text-sm"
              >

                <div>

                  <p className="font-semibold">

                    vs {fixture.opponent}

                  </p>

                </div>

                <div className="text-right text-xs text-zinc-500">

                  <p>{fixture.date}</p>

                  <p>{fixture.time}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RESULTS */}

        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

          <div className="px-4 py-4 border-b border-zinc-800 bg-zinc-900">

            <h2 className="text-sm font-bold uppercase tracking-wide">

              Results

            </h2>

          </div>

          <div>

            {results.map((match, index) => (

              <div
                key={index}
                className="flex items-center justify-between px-4 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition text-sm"
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      match.result === "W"
                        ? "bg-green-500 text-black"
                        : match.result === "L"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >

                    {match.result}

                  </div>

                  <div>

                    <p className="font-semibold">

                      vs {match.opponent}

                    </p>

                  </div>

                </div>

                <div className="font-bold text-sm">

                  {match.score}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* SQUAD */}

        <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950">

          <div className="px-4 py-4 border-b border-zinc-800 bg-zinc-900">

            <h2 className="text-sm font-bold uppercase tracking-wide">

              Squad

            </h2>

          </div>

          <div>

            {squad.map((player, index) => (

              <div
                key={index}
                className="px-4 py-3 border-b border-zinc-800 hover:bg-zinc-900 transition text-sm"
              >

                {player}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default TeamPage