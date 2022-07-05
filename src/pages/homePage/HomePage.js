import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/header/Header'
import { useNavigate } from "react-router-dom"
import pokedex from "../../assets/pokedex.svg"
import { Div, Container } from './Styles';


const HomePage = () => {
  
  useEffect(()=>{
   cacarPokemon()
   
  
 
  }, [])


 const [pokemon, setPokemon ] = useState ([])

 const [ pokets, setPokets ] = useState([])

  const cacarPokemon = () => {
    let teste = []
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20")
    .then((response)=>{
      // console.log(response.data.results)
      const resposta = response.data.results
      const nomePokemon = resposta.map((nome)=>nome.name)
      // setPokemon(nomePokemon)
      for(const nome of nomePokemon) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((response)=>{
          teste.push(response.data)
          setPokemon(teste)
  
        }).catch((error)=>{
          console.log(error.response)
        })
      }
      
    }).catch((error)=>{
      console.log(error.response)
    })
  }
 
// console.log(pokets)
console.log(pokemon)

 const navigate = useNavigate()

  return (
    <Container>
      <Header onClick={() => navigate('/pokedex')} src={pokedex}/>
      <Div>    
        {pokemon && pokemon.map((bananinha)=>{
        return(
          <div key={bananinha.id}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${bananinha.id}.png`}/>
            <p>{bananinha.name}</p>
            <button>Capturar pokemón</button>
          </div>
        )
        })}
        </Div>
      
    </Container>
  )
}

export default HomePage