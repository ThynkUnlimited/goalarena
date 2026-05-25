function MatchTimeline({ events }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">

      <h2 className="text-xl font-bold mb-6">
        Match Events
      </h2>

      <div className="space-y-4">

        {events.map((event, index) => (

          <div
            key={index}
            className="flex items-center gap-4 border-b border-slate-800 pb-4"
          >

            {/* MINUTE */}

            <div className="w-14 text-center">

              <span className="font-bold text-green-400">
                {event.minute}'
              </span>

            </div>

            {/* ICON */}

            <div className="text-2xl">

              {event.type === "goal" && "⚽"}

              {event.type === "yellow" && "🟨"}

              {event.type === "red" && "🟥"}

              {event.type === "sub" && "🔄"}

            </div>

            {/* INFO */}

            <div>

              <p className="font-semibold">
                {event.player}
              </p>

              <p className="text-sm text-slate-400">
                {event.team}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default MatchTimeline