import React, { useContext, useState, useCallback } from "react"
import FavoriteContext from "../context/favoriteContext"
import PokemonDetails from "./PokemonDetails"
import Button from "@mui/material/Button"
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { green } from "@mui/material/colors"
import Icon from "@mui/material/Icon"

const Pokemon = (props) => {
  const { pokemon } = props
  const [open, setOpen] = useState(false)
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext)

  const redHeart = "❤️"
  const blackHeart = "🖤"
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart

  const clickHeart = (e) => {
    e.preventDefault()
    updateFavoritePokemons(pokemon.name)
  }

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [open])
  const openModal = useCallback(() => {
    setOpen(true)
  }, [open])

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <Button
            className="fa-plus-circle"
            sx={{ color: green[500] }}
            onClick={openModal}
          >
            <AddCircleIcon />
          </Button>
        </div>
        <div className="card-bottom">
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
      {open && (
        <PokemonDetails
          pokemon={pokemon}
          closeModal={closeModal}
        ></PokemonDetails>
      )}
    </div>
  )
}

export default Pokemon
