import worldCupGroups from "../data/worldCupGroups"

function WorldCupPage() {

  return (

    <div className="bg-black text-white min-h-screen p-4 md:p-6">

      {/* HERO */}

      <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-r from-blue-950 via-black to-red-950 p-6 md:p-8">

        <div className="flex items-center gap-5">

          <div className="w-20 h-20 rounded-3xl bg-orange-500 flex items-center justify-center text-5xl">

            🏆

          </div>

          <div>

            <h1 className="text-4xl md:text-5xl font-bold">

              FIFA World Cup 2026

            </h1>

            <p className="text-zinc-400 mt-3 text-sm md:text-base">

              USA • Canada • Mexico

            </p>

            <p className="text-zinc-500 mt-2 text-sm">

              June 11 — July 19 • 48 Teams • 104 Matches

            </p>

          </div>

        </div>

      </div>

      {/* INFO */}

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm">

            Tournament Format

          </p>

          <p className="font-bold mt-3">

            12 Groups of 4 Teams

          </p>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm">

            Qualification

          </p>

          <p className="font-bold mt-3">

            Top 2 + Best 8 Third Teams

          </p>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm">

            Final Venue

          </p>

          <p className="font-bold mt-3">

            MetLife Stadium

          </p>

        </div>

      </div>

      {/* GROUPS */}

      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-6">

          Group Stage

        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">

          {Object.entries(worldCupGroups).map(

            ([groupName, teams]) => (

              <div
                key={groupName}
                className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950"
              >

                {/* GROUP HEADER */}

                <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900">

                  <h3 className="font-bold text-sm uppercase tracking-wide">

                    {groupName}

                  </h3>

                </div>

                {/* TABLE HEADER */}

                <div className="grid grid-cols-[1fr_28px_28px_28px_28px_40px_40px] text-[10px] uppercase text-zinc-500 px-3 py-2 border-b border-zinc-800">

                  <div>Team</div>

                  <div className="text-center">
                    P
                  </div>

                  <div className="text-center">
                    W
                  </div>

                  <div className="text-center">
                    D
                  </div>

                  <div className="text-center">
                    L
                  </div>

                  <div className="text-center">
                    GD
                  </div>

                  <div className="text-center font-bold text-white">
                    PTS
                  </div>

                </div>

                {/* TEAMS */}

                {teams.map((team, index) => (

                  <div
                    key={index}
                    className="grid grid-cols-[1fr_28px_28px_28px_28px_40px_40px] items-center text-[11px] px-3 py-3 border-b border-zinc-800 hover:bg-zinc-900 transition"
                  >

                    <div
                      className={`font-semibold truncate ${
                        index < 2
                          ? "text-green-400"
                          : index === 2
                          ? "text-yellow-400"
                          : "text-zinc-400"
                      }`}
                    >

                      {team.team}

                    </div>

                    <div className="text-center">
                      {team.p}
                    </div>

                    <div className="text-center text-green-400">
                      {team.w}
                    </div>

                    <div className="text-center text-yellow-400">
                      {team.d}
                    </div>

                    <div className="text-center text-red-400">
                      {team.l}
                    </div>

                    <div className="text-center">
                      {team.gd > 0
                        ? `+${team.gd}`
                        : team.gd}
                    </div>

                    <div className="text-center font-bold text-white">
                      {team.pts}
                    </div>

                  </div>

                ))}

              </div>

            )
          )}

        </div>

      </div>

      {/* KEY */}

      <div className="mt-8 border border-zinc-800 rounded-2xl bg-zinc-950 p-5">

        <h2 className="text-lg font-bold mb-4">

          Qualification Key

        </h2>

        <div className="space-y-3 text-sm">

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-green-500 rounded-full"></div>

            <span>
              Automatic Qualification
            </span>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-1 h-6 bg-yellow-500 rounded-full"></div>

            <span>
              Best Third-Placed Teams
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default WorldCupPage