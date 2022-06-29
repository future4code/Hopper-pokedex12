import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import HomePage from "../pages/HomePage";
import Pokedex from "../pages/Pokedex";
import PokemonDetails from "../pages/PokemonDetails";

const Router = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/pokedex'} element={<Pokedex />} />
          <Route path={'/pokemon/:name'} element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router