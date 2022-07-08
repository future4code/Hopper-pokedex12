import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { imagem } from '../../constants/constants';
import Header from '../../components/header/Header'
import Logo_pokemon from "../../assets/Logo_Pokemon.png"
import { Container, Div } from '../pokedex/Styles';


const Pokedex = () => {
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    colocaNoStorage()
  }, [])

  const colocaNoStorage = () => {
    setPokemons(JSON.parse(localStorage.getItem('pokemaos')))
  }

  const removeDaPokedex = (id) => {
    let novaPokedex = []
    pokemons.map(pokemon => {
      if(pokemon.id !== id) {
        novaPokedex.push(pokemon)
        setPokemons(novaPokedex)
        localStorage.setItem('pokemaos', JSON.stringify(novaPokedex))
      } else { 
        novaPokedex.length === 0 && window.localStorage.clear('pokemaos')
        setPokemons(novaPokedex)
      }
      return novaPokedex
    })
  }

  console.log(pokemons)
  pokemons.sort((anterior, novo) => anterior.id - novo.id)

  return (
    <Container>
      <Header onClick={() => navigate('/')} src={Logo_pokemon}/>
      <Div>
        {pokemons && pokemons.map((poke) => (
          <div key={poke.id}>
            <img src={`${imagem + poke.id}.png`} alt={`Imagem ilustrativa do pokemon ${poke.name}`} />
            <p>{poke.name}</p>
            <button onClick={() => removeDaPokedex(poke.id)}>Retirar da Pokédex</button>
          </div>
        ))}
      </Div>
    </Container>
  )
}

export default Pokedex