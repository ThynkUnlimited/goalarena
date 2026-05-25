const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = "https://v3.football.api-sports.io"

const headers = {
  "x-apisports-key": API_KEY
}

/* LIVE MATCHES */

export async function getLiveMatches() {
  const response = await fetch(
    `${BASE_URL}/fixtures?live=all`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

/* UPCOMING MATCHES */

export async function getUpcomingMatches() {
  const today = new Date()

  const nextDate = new Date(
    today.setDate(today.getDate() + 1)
  )

  const formattedDate =
    nextDate.toISOString().split("T")[0]

  const response = await fetch(
    `${BASE_URL}/fixtures?date=${formattedDate}`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

/* FINISHED MATCHES */

export async function getFinishedMatches() {
  const today = new Date()

  const yesterday = new Date(
    today.setDate(today.getDate() - 1)
  )

  const formattedDate =
    yesterday.toISOString().split("T")[0]

  const response = await fetch(
    `${BASE_URL}/fixtures?date=${formattedDate}`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

/* MATCH STATISTICS */

export async function getMatchStatistics(fixtureId) {
  const response = await fetch(
    `${BASE_URL}/fixtures/statistics?fixture=${fixtureId}`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

/* MATCH LINEUPS */

export async function getMatchLineups(fixtureId) {
  const response = await fetch(
    `${BASE_URL}/fixtures/lineups?fixture=${fixtureId}`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

/* MATCH EVENTS */

export async function getMatchEvents(fixtureId) {
  const response = await fetch(
    `${BASE_URL}/fixtures/events?fixture=${fixtureId}`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}