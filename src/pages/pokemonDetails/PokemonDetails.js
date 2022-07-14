import React from 'react'
import axios from 'axios'
import Logo_pokemon from "../../assets/Logo_Pokemon.png"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { imagem } from '../../constants/constants'
import Header from '../../components/header/Header'
import { Container, Loading, Details, Poke, Stats } from './Styles'

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
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Header onClick={() => navigate('/')} src={Logo_pokemon}/>
      <Container>
        {
          isLoading
          ? (<Loading>Carregando...</Loading>)
          : (
            <Details key={pokemonDetails && pokemonDetails.id}>
              <Poke>
                <h1>{pokemonDetails.name && pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.slice(1)} #0{pokemonDetails && pokemonDetails.id}</h1>
                <img src={`${pokemonDetails.id && imagem + pokemonDetails.id}.png`} alt={`Imagem ilustrativa do pokemon ${pokemonDetails.name}`} />
              </Poke>
              <Stats>
                <div>
                  <h2>Tipos:</h2>
                  <ul>
                    {pokemonDetails.types && pokemonDetails.types.map((type, i) => (
                      <li key={i}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h2>Características:</h2>
                  <ul>
                    <li>Peso: {pokemonDetails && Number(pokemonDetails.weight) / 10} kg</li>
                    <li>Altura: {pokemonDetails && Number(pokemonDetails.height) / 10} m</li>
                  </ul>
                </div>
                <div>
                  <h2>Estatísticas</h2>
                  {pokemonDetails.stats && pokemonDetails.stats.map((stat, i) => (
                      <h3 key={i}>{stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}%</h3>
                  ))}
                </div>
                <div>
                  <h2>Habilidades:</h2>
                  <ul>
                    {pokemonDetails.abilities && pokemonDetails.abilities.map((ability, i) => (
                      <li key={i}>{ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}</li>
                    ))}
                  </ul>
                </div>
              </Stats>
            </Details>
          )
        }
      </Container>
    </div>
  )
}

export default PokemonDetails