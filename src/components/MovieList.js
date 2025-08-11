import MovieCard from "./MovieCard";
import { Link } from "react-router";

const MovieList = ({movies,title}) => {


//we are using this check after return because it takes some time to update and retrieve from the store so movies?.length can get type error null or undefined
    return( movies?.length && (

        <div className="py-4">
        <h1 className="text-lg md:text-2xl text-white py-2">{title}</h1>
        <div className="flex overflow-x-scroll">
         <div className="flex">
        {movies?.map((movie) =>(
            
            <Link key={movie?.id} to={"/movieinfo/"+movie?.id}>
           <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            </Link>
           ))}   
        </div>   
        </div>
        </div>
    ))
};

export default MovieList;