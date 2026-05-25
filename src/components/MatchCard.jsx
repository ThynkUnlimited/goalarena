import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function MatchCard({
  match,
  team1,
  team2,
  homeLogo,
  awayLogo,
  score,
  time,
  stadium,
  league,
  minute,
  status
}) {
  const navigate = useNavigate()

  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || []

    if (
      favorites.includes(team1) ||
      favorites.includes(team2)
    ) {
      setFavorite(true)
    }
  }, [team1, team2])

  function toggleFavorite(e) {
    e.stopPropagation()

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || []

    if (favorite) {

      favorites = favorites.filter(
        (team) =>
          team !== team1 &&
          team !== team2
      )

      setFavorite(false)

    } else {

      favorites.push(team1)
      favorites.push(team2)

      setFavorite(true)
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }

  return (
    <div
      onClick={() =>
        navigate("/match", {
          state: { match }
        })
      }
      className="bg-slate-800 p-5 rounded-2xl shadow-xl w-full sm:w-[340px] hover:scale-105 hover:bg-slate-700 transition duration-300 cursor-pointer"
    >

      {/* TOP */}

      <div className="flex justify-between items-center mb-4">

        <div>

          <p className="text-green-400 text-sm">
            {league}
          </p>

        </div>

        <div className="flex items-center gap-3">

          {/* FAVORITE */}

          <button
            onClick={toggleFavorite}
            className="text-2xl hover:scale-125 transition"
          >
            {favorite ? "⭐" : "☆"}
          </button>

          {/* STATUS */}

          <div className="bg-red-500 px-3 py-1 rounded-full text-xs md:text-sm font-bold">
            {status}
          </div>

        </div>

      </div>

      {/* MATCH CONTENT */}

      <div className="flex items-center justify-between mb-6">

        {/* HOME TEAM */}

        <div className="flex flex-col items-center w-[90px]">

          <img
            src={homeLogo}
            alt={team1}
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          <p className="mt-2 text-center text-sm md:text-base font-semibold">
            {team1}
          </p>

        </div>

        {/* SCORE */}

        <div className="text-center">

          <p className="text-3xl md:text-4xl font-bold text-green-400">
            {score}
          </p>

          <p className="text-yellow-400 font-bold text-lg md:text-xl mt-2">
            {minute}'
          </p>

        </div>

        {/* AWAY TEAM */}

        <div className="flex flex-col items-center w-[90px]">

          <img
            src={awayLogo}
            alt={team2}
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          <p className="mt-2 text-center text-sm md:text-base font-semibold">
            {team2}
          </p>

        </div>

      </div>

      {/* MATCH INFO */}

      <div className="border-t border-slate-700 pt-4">

        <p className="text-sky-400 text-sm md:text-base mb-2">
          🕒 {time}
        </p>

        <p className="text-slate-300 text-sm md:text-base">
          🏟 {stadium}
        </p>

      </div>

    </div>
  )
}

export default MatchCard