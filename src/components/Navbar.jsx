function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-10 py-5 bg-slate-900 border-b border-slate-800 gap-4">

      <h1 className="text-3xl md:text-4xl font-bold text-green-500">
        ⚽ GoalArena
      </h1>

      <div className="flex flex-wrap gap-4 md:gap-8 text-slate-300 text-sm md:text-lg">

        <p className="hover:text-green-400 cursor-pointer transition">
          Home
        </p>

        <p className="hover:text-green-400 cursor-pointer transition">
          Live Matches
        </p>

        <p className="hover:text-green-400 cursor-pointer transition">
          Fixtures
        </p>

        <p className="hover:text-green-400 cursor-pointer transition">
          World Cup
        </p>

      </div>

    </nav>
  )
}

export default Navbar