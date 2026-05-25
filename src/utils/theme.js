export function getTheme() {

  return (
    localStorage.getItem("theme") ||
    "dark"
  )
}

export function setTheme(theme) {

  localStorage.setItem(
    "theme",
    theme
  )

  document.documentElement.className =
    theme
}