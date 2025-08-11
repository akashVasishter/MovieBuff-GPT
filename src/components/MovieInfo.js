import Header from "./Header";
import { useParams } from "react-router";
import useMovieInfo from "../hooks/useMovieInfo.js";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import VideoTitle from "./VideoTitle";

const MovieInfo = () => {

   const {id} = useParams();
   console.log(id);
   useMovieInfo(id);
   
   const info = useSelector(store => store.movies.moviesInfo);
   console.log(info);
   if(!info) return null;
   
   const{original_title,overview} = info;

    return(
        <div className=""> 
         <img className="w-screen" src={IMG_CDN +info?.backdrop_path} alt="movie_backdrop"/>
        <div className="w-screen aspect-video mt-[-40%] px-6">
        <h1 className="text-2xl text-rose-100 md:text-6xl font-bold">{original_title}</h1>
       <p className="hidden text-slate-200 md:inline-block py-6 text-lg w-1/4">{overview}</p>
        </div>
        </div>
    )
};


export default MovieInfo;