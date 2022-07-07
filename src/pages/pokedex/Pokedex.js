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
    teste()
  }, [])

  const teste = () => {
    setPokemons(JSON.parse(localStorage.getItem('pokemaos')))
  }

  return (
    <Container>
      <Header onClick={() => navigate('/')} src={Logo_pokemon}/>
      <Div>
        {pokemons && pokemons.map((poke) => (
          <div key={poke.id}>
            <img src={`${imagem + poke.id}.png`} alt={`Imagem ilustrativa do pokemon ${poke.name}`} />
            <p>{poke.name}</p>
            <button>Retirar da Pokédex</button>
          </div>
        ))}
      </Div>
    </Container>
  )
}

export default Pokedex