import {
  Link,
  useLocation
} from "react-router-dom"

import { useEffect, useState } from "react"

import {
  getTheme,
  setTheme
} from "../utils/theme"

function Navbar() {

  const location = useLocation()

  const [theme, setThemeState] =
    useState("dark")

  useEffect(() => {

    setThemeState(
      getTheme()
    )

  }, [])

  function toggleTheme() {

    const newTheme =
      theme === "dark"
        ? "light"
        : "dark"

    setTheme(newTheme)

    setThemeState(newTheme)
  }

  function active(path) {

    return location.pathname === path
      ? "text-green-400"
      : theme === "dark"
      ? "text-white"
      : "text-slate-900"
  }

  return (

    <nav className={`border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 ${
      theme === "dark"
        ? "bg-slate-900 border-slate-800"
        : "bg-white border-slate-300"
    }`}>

      {/* LOGO */}

      <Link
        to="/"
        className="text-3xl font-bold text-green-500"
      >
        ⚽ GoalArena
      </Link>

      {/* LINKS */}

      <div className="flex items-center gap-6 text-lg font-semibold">

        <Link
          to="/"
          className={`${active("/")} hover:text-green-400 transition`}
        >
          Home
        </Link>

        <Link
          to="/standings"
          className={`${active("/standings")} hover:text-green-400 transition`}
        >
          Standings
        </Link>

        {/* THEME BUTTON */}

        <button
          onClick={toggleTheme}
          className="text-2xl"
        >

          {theme === "dark"
            ? "🌙"
            : "☀️"}

        </button>

      </div>

    </nav>
  )
}

export default Navbar