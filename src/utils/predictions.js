export function generatePrediction(match) {

  const homeGoals =
    match.goals.home ?? 0

  const awayGoals =
    match.goals.away ?? 0

  const random =
    Math.floor(Math.random() * 100)

  let prediction = ""
  let confidence = 0

  if (homeGoals > awayGoals) {

    prediction =
      `${match.teams.home.name} Win`

    confidence = 70 + Math.floor(Math.random() * 20)

  } else if (awayGoals > homeGoals) {

    prediction =
      `${match.teams.away.name} Win`

    confidence = 70 + Math.floor(Math.random() * 20)

  } else {

    if (random > 50) {

      prediction =
        `${match.teams.home.name} Slight Edge`

    } else {

      prediction =
        `${match.teams.away.name} Slight Edge`
    }

    confidence =
      50 + Math.floor(Math.random() * 20)
  }

  return {
    prediction,
    confidence
  }
}