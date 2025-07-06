import React from 'react';
import { PokemonDetail } from '../App';

interface CardProps {
  pokemon: PokemonDetail;
}

export const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="card">
      <div className='cardImg'>
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
      <h3>{pokemon.name}</h3>
      <div className='cardTypes'>
        {pokemon.types.map((type, i) => (
          <span key={i} className={`type-${type}`}>{type}</span>
        ))}
      </div>
      <div className='cardInfo'>
        <p className='title'>高さ: {pokemon.height / 10} m</p>
        <p className='title'>重さ: {pokemon.weight / 10} kg</p>
        <p className='title' style={{gridColumn: '1 / -1'}}>とくせい: {pokemon.ability}</p>
      </div>
    </div>
  );
};
