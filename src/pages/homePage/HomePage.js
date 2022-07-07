import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/header/Header'
import { useNavigate } from "react-router-dom"
import pokedex from "../../assets/pokedex.svg"
import { Div, Container } from './Styles';
import { imagem } from '../../constants/constants';

const HomePage = () => {
  
  const navigate = useNavigate()
  
  const [pokemon, setPokemon ] = useState ([])
  const [isLoading, setIsLoading] = useState(false)
  const [pokemaos, setPokemaos] = useState([])

  useEffect(()=>{
    cacarPokemon()
    // eslint-disable-next-line 
  }, [])

  const cacarPokemon = () => {
    let getPokemon = []
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    .then((response)=>{
      setIsLoading(true)
      const resposta = response.data.results
      const nomePokemon = resposta.map((nome) => nome.name)
      for(const nome of nomePokemon) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then((response)=>{
          getPokemon.push(response.data)
          setPokemon(getPokemon)
          localStorage.setItem('pokemaos', JSON.stringify(pokemaos))
          setTimeout(() => {
            setIsLoading(false)
          }, 1500)
        }).catch((error)=>{
          console.log(error.response)
        })
      }
    }).catch((error)=>{
      console.log(error.response)
    })
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('pokemaos'))
    data && setPokemaos(data)
    console.log(data)
  }, [])

  const teste = (poke) => {
    setPokemaos([...pokemaos, poke])
    // localStorage.setItem('pokemaos', JSON.stringify(pokemaos))
  }

  useEffect(() => {
    localStorage.setItem('pokemaos', JSON.stringify(pokemaos))
  }, [pokemaos])

  return (
    <Container>
      <Header onClick={() => navigate('/pokedex')} src={pokedex}/>
      <Div>
        { isLoading 
          ? <p> Carregando ... </p>
          : pokemon && pokemon.map((poke)=>{
            return(
              <div key={poke.id}>
              <img src={`${imagem + poke.id}.png`} alt={`Imagem ilustrativa do pokemon ${poke.name}`}/>
                <p>{poke.name}</p>
                <button onClick={() => teste(poke)}>Capturar pokemón</button>
              </div>
            )
          })
        }
        </Div>
    </Container>
  )
}

export default HomePage;
