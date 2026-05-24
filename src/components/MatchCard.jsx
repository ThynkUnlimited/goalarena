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

  return (
    <div
      onClick={() => navigate("/match", { state: { match } })}
      className="bg-slate-800 p-5 rounded-2xl shadow-xl w-full sm:w-[340px] hover:scale-105 transition duration-300 cursor-pointer"
    >

      <div className="flex justify-between items-center mb-4">

        <p className="text-green-400 text-sm">
          {league}
        </p>

        <div className="bg-red-500 px-3 py-1 rounded-full text-xs md:text-sm font-bold">
          {status}
        </div>

      </div>

      <div className="flex items-center justify-between mb-6">

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

        <div className="text-center">

          <p className="text-3xl md:text-4xl font-bold text-green-400">
            {score}
          </p>

          <p className="text-yellow-400 font-bold text-lg md:text-xl mt-2">
            {minute}'
          </p>

        </div>

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