import React from 'react'
import Pokemon from './Pokemon'

const PokemonList = ({pokemons}) => {
    return (
        <>
            <div className="container">
            <div className='row justify-content-center'>
                {
                    pokemons.map( (pokemon, i) =>(   
                   <Pokemon 
                        key={i} 
                        id={pokemon.id} 
                        image={pokemon.sprites.other.dream_world.front_default} 
                        name={pokemon.name} 
                        type={pokemon.types[0].type.name}
                    />
                    ))                      
                }
                </div>
            </div>
        </>
    )
}

export default PokemonList
