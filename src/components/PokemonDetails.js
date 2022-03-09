import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";

export default function PokemonDetails(props) {
  const { pokemon } = props;
  const { closeModal } = props;
  console.log(pokemon);
  return (
    <Dialog open={true} onClose={closeModal} maxWidth="sm">
      <DialogContent>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-imgmodal"
        />
        <div className="content"> 
        <h3>{pokemon.name}</h3>
        <p>Numero de pokemon: #{pokemon.id}</p>
        <div className="pokemon-type">
          <p>Tipo de pokemon: </p>
          {pokemon.types.map((type, idx) => {
            return (
              <div key={idx} className="pokemon-type-text">
                {type.type.name}
              </div>
            );
          })}
        </div>
        <p>Experiencia base: {pokemon.base_experience}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

PokemonDetails.propTypes = {
  closeModal: PropTypes.func,
  pokemon: PropTypes.object,
};
