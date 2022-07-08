import React from 'react'
import axios from 'axios'
import Logo_pokemon from "../../assets/Logo_Pokemon.png"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { imagem } from '../../constants/constants'
import Header from '../../components/header/Header'

const PokemonDetails = () => {

  const navigate = useNavigate()
  const { name } = useParams()
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response)=>{
      setPokemonDetails(response.data)
    }).catch((error)=>{
      console.log(error.response)
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    })
  }, [])

  return (
    <div>
      <Header onClick={() => navigate('/')} src={Logo_pokemon}/>
      {
        isLoading
        ? (<p>Carregando...</p>)
        : (
          <div key={pokemonDetails && pokemonDetails.id}>
            <h1>{pokemonDetails.name && pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1)} #0{pokemonDetails && pokemonDetails.id}</h1>
            <img src={`${pokemonDetails.id && imagem + pokemonDetails.id}.png`} alt={`Imagem ilustrativa do pokemon ${pokemonDetails.name}`} />
            <div>
              <h2>Tipos:</h2>
              {pokemonDetails.types && pokemonDetails.types.map((type, i) => (
                <h3 key={i}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</h3>
                ))}
            </div>
            <div>
              <h2>Peso: {pokemonDetails && Number(pokemonDetails.weight) / 10} kg</h2>
            </div>
            <div>
              <h2>Altura: {pokemonDetails && Number(pokemonDetails.height) / 10} m</h2>
            </div>
            {pokemonDetails.stats && pokemonDetails.stats.map((stat, i) => (
              <div key={i}>
                <h2>{stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}%</h2>
              </div>
            ))}
            {pokemonDetails.abilities && pokemonDetails.abilities.map((ability, i) => (
              <h2 key={i}>{ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}</h2>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default PokemonDetails