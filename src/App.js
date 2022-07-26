import Movie from './components/Movie';
import NavBar from './components/NavBar';
import React from 'react';
import { useEffect, useState} from 'react'; 
import Intro from './components/Intro';
import Trending from './components/Trending';


const TRENDING_API = "https://api.themoviedb.org/3/trending/movie/day"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=1724877ba30b7f7607d26baa5738a877&query="
const IMG_API = "https://image.tmdb.org/t/p/w500"
const BASE_URL="https://api.themoviedb.org/3"
const API_KEY="?api_key=1724877ba30b7f7607d26baa5738a877"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [trendmovies, setTrendMovies] = useState([]);
  
  useEffect(() => {
    {/* This get all movie list */}
    getMovies(`${BASE_URL}/discover/movie${API_KEY}`);
    getTrendingMovies(TRENDING_API+API_KEY);
  }, []);

  {/*Create Function to Adapt DRY Method*/}
  const getMovies = (API) => {
    fetch(API)
    .then((response)=> response.json())
    .then((data) => {
      setMovies(data.results);
    })
  };

  const getTrendingMovies = (API) => {
    fetch(API)
    .then((response)=> response.json())
    .then((data) => {
      setTrendMovies(data.results);
    })
  }
  
  const setVoteClass = (vote) => {
    if(vote >= 8){
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};


  return (
    <div className="App">

      <div className='header-gap' >
        <NavBar />
      </div>
      <div className='myBg'>
      <Intro 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      SEARCH_API={SEARCH_API}
      getMovies={getMovies}
      />
      </div>
      <h1 id='all'>MOVIES</h1>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) => (

          <Movie key={movie.id} {...movie} IMG_API={IMG_API} setVoteClass={setVoteClass}/>
        ))}
      </div>
      <div>
        <h1 id="trending">TRENDING MOVIES</h1>
        <div className='movie-container'>
          {trendmovies.length > 0 && trendmovies.map((movie) => (
            <Trending key={movie.id} {...movie} IMG_API={IMG_API} setVoteClass={setVoteClass} />
          ))}
        </div>
      </div>
    </div>
    );
    
}

export default App;
