import React from "react"
import { CustomButton } from "./components/Atoms/Button/Button"

function App() {
  return (
    <CustomButton
      label='Typescript React'
      primary
      onClick={() => {
        alert('Funcion que ejecuta el evento Dom')
      }}
    />
  )
}

export default App
