export function getFavorites() {

  const favorites =
    localStorage.getItem("favorites")

  return favorites
    ? JSON.parse(favorites)
    : []
}

export function addFavorite(team) {

  const favorites = getFavorites()

  if (!favorites.includes(team)) {

    favorites.push(team)

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }
}

export function removeFavorite(team) {

  const favorites =
    getFavorites().filter(
      (item) => item !== team
    )

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  )
}

export function isFavorite(team) {

  return getFavorites().includes(team)
}