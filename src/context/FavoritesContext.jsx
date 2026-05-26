import {
  createContext,
  useContext,
  useState
} from "react"

const FavoritesContext =
  createContext()

export function FavoritesProvider({
  children
}) {

  const [favorites, setFavorites] =
    useState([])

  function toggleFavorite(team) {

    setFavorites((prev) => {

      if (prev.includes(team)) {

        return prev.filter(
          (t) => t !== team
        )
      }

      return [...prev, team]
    })
  }

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite
      }}
    >

      {children}

    </FavoritesContext.Provider>
  )
}

export function useFavorites() {

  return useContext(FavoritesContext)
}