import MovieCard from "./MovieCard";

const MovieList = ({movies,title}) => {

    console.log(movies);

//we are using this check after return because it takes some time to update and retrieve from the store so movies?.length can get type error null or undefined
    return( movies?.length && (

        <div className="py-4">
        <h1 className="text-2xl text-white py-2">{title}</h1>
        <div className="flex overflow-x-scroll">
         <div className="flex">
        {movies?.map((movie) =>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}   
        </div>   
        </div>
        </div>
    ))
};

export default MovieList;