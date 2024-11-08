import MovieItem from "./movieItem";//import MovieItem component from movieItem

const Movies = (props) => {
    return props.myMovies.map(//map over myMovies prop and return a movieItem component for each movie
        (movie)=>{
            //render each movieItem componenent 
            //pass myMovie to MovieItem  to access details about all the  movies stored in the movie objects
            //give each movieItem a unique identifier via key to helo render and update efficiently
            return <MovieItem myMovie={movie} key ={movie.imdbID}/>
        }
       
    );
  };
//export component for use in other areas of the program
export default Movies;
