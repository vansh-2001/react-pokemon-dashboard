import React, { useEffect, useState } from 'react'

const PokemonDetails = ({match}) => {

  const [singlepoke, setSinglepoke] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [numberOfGame, setNumberOfGame] = useState([]);
  const [image, setImage] = useState(null);

  // PokemonDetails APi width
  useEffect(()=>{
    const fetchSinglePost = ()=>{
      fetch(`https://pokeapi.co/api/v2${match.url}`)
      .then(singlepoke =>{
        return singlepoke.json()
      })
      .then(data=>{
        console.log(data)
        setSinglepoke(data)
        setPokemonType(data.types[0].type.name)
        setNumberOfGame(data.game_indices)
        setImage(data.sprites["front_default"])
      })
    }
    fetchSinglePost();
  
  }, [])


  return (
    <div className="app-container">
        <div className="card_single_container">
              <div className="card card_single" >
              <a className='btn btn-link w-10' href={`/`}> <i class="fa fa-angle-double-left"></i> </a>
                <div className="img_single">
                   <img src={image} alt={singlepoke.name} className="card-img-top" />  
                </div>
                <div className="card-body">
                  <h5 className="card-title">Name : {singlepoke.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> Type : {pokemonType} </li>
                  <li className="list-group-item"> Height : {singlepoke.height } </li>
                  <li className="list-group-item"> Length : {numberOfGame.length} </li>
                  <li className="list-group-item"> Ordre : {singlepoke.order }</li>
                </ul>    
           </div>
         </div>
    </div>
  );
}

export default PokemonDetails;