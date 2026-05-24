const API_KEY = "24b62d753d65ba27c1974e9a28d0039d"

const BASE_URL = "https://v3.football.api-sports.io"

const headers = {
  "x-apisports-key": API_KEY
}

// LIVE MATCHES
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

// UPCOMING MATCHES
export async function getUpcomingMatches() {
  const response = await fetch(
    `${BASE_URL}/fixtures?next=10`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}

// FINISHED MATCHES
export async function getFinishedMatches() {
  const response = await fetch(
    `${BASE_URL}/fixtures?last=10`,
    {
      method: "GET",
      headers
    }
  )

  const data = await response.json()

  return data.response
}
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