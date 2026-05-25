import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

import "./index.css"

import { getTheme } from "./utils/theme"

document.documentElement.className =
  getTheme()

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

)