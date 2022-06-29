import React from 'react'
import Header from '../components/Header'
import { useNavigate } from "react-router-dom"
import pokedex from "../assets/pokedex.svg"

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Header onClick={() => navigate('/pokedex')} src={pokedex}/>
      <p>Clique em mim</p>
    </div>
  )
}

export default HomePage