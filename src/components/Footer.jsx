const API_KEY = "24b62d753d65ba27c1974e9a28d0039dI_KEY"

const BASE_URL = "https://v3.football.api-sports.io"

export async function getLiveMatches() {
  const response = await fetch(`${BASE_URL}/fixtures?live=all`, {
    method: "GET",
    headers: {
      "x-apisports-key": API_KEY
    }
  })

  const data = await response.json()

  return data.response
}