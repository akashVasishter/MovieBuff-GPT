import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    console.log(movies);

    //movies.nowPlayingMovies check to avoid errors as the redux store takes some time to update and fetch with selector it might give type error null or undefined
    return(
        movies.nowPlayingMovies && 
        (<div className="bg-black">
            <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
          <MovieList title={"Trending"} movies = {movies?.popularMovies}/>
          <MovieList title={"Blockbuster"} movies = {movies.topRatedMovies}/>
          <MovieList title={"Upcoming"} movies = {movies.upcomingMovies}/>
          <MovieCard/>  
        </div>
        </div>)
    )
};

export default SecondaryContainer;