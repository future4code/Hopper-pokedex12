import React from 'react'
import { useNavigate } from "react-router-dom"

const Pokedex = () => {

  const navigate = useNavigate()

  return (
    <div>
      <p onClick={() => navigate("/")}>Clique em mim para voltar</p>
    </div>
  )
}

export default Pokedex