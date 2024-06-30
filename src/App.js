
import './App.scss';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import Searchbar from './components/Searchbar';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

  // Get pokemons
  const[pokemons, setPokemons] = useState([])
  const [loadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=200')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);



 // Get pokemons Details API
 useEffect(()=>{
  const getAllPokemons = async () => {
    try {
      const res = await fetch(loadPokemon)
      const data = await res.json()
   
      function createPokemonObject(results)  {
      results.forEach( async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data =  await res.json()
      setPokemons( currentList => [...currentList, data])
      await pokemons.sort((a, b) => a.id - b.id)
        })
      }
      createPokemonObject(data.results)
    } catch (error) {
      console.log(error)
    }
   }
   getAllPokemons();
 },[]);

// Start Search Section
// # API Search
 const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
//## On Page Search
 const [page, setPage] = useState(0);
 const [total, setTotal] = useState(0);
 const [loading, setLoading] = useState(true);
 const [notFound, setNotFound] = useState(false);
 const [searching, setSearching] = useState(false);
 useEffect(() => {
  if (!searching) {
    searchPokemon();
  }
}, [page]);

 const onSearch = async (pokemon) => {
  
  if (!pokemon) {
    return searchPokemon();
  }
  setLoading(true);
  setNotFound(false);
  setSearching(true);
  const result = await searchPokemon(pokemon);
  if (!result) {
    setNotFound(true);
    setLoading(false);
    return;
  } else {
    setPokemons([result]);
    setPage(0);
    setTotal(1);
  }
  setLoading(false);
  setSearching(false);
};

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

   // pageNumber Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  
  //  refreshPage  function
   function refreshPage() {
    window.location.reload(false);
   }
  return (
   <>
    <div className="container">
      <Searchbar onSearch={onSearch} />
            {notFound ? (
            <div className="not-found-text text-center">
              Not Found Pokemon
                
              <br/>
              <button class="btn btn-link" onClick={refreshPage}><i class="fa fa-refresh" aria-hidden="true"></i></button>
            </div>
            ) : (
            <PokemonList pokemons={currentPosts}/>
      )}
      <Pagination  postsPerPage={postsPerPage} totalPosts={pokemons.length} paginate={paginate} />
    </div>
    </>
   
  )
}

export default App
