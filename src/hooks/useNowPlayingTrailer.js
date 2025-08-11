import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addNowPlayingTrailer } from "../utils/movieSlice";


const useNowPlayingTrailer = (videoId) => {

    //fetching movies and Displaying Movies 

      const dispatch = useDispatch();
      const trailerVideo = useSelector(store => store.movies.trailerVideo);
      const fetchTrailer = async () => {
        
        const data = await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((data) => data.type === "Trailer");
        console.log(filterData);
        const trailerData = filterData.length ? filterData[0] : json.results[0];
        console.log(trailerData);
        //if you assign directly trailerKey value in the embed url it will give undefined error assign it to a state or fetch from store
        dispatch(addNowPlayingTrailer(trailerData));
      }
    
       useEffect(() => {

       !trailerVideo && fetchTrailer();
          
    },[])
};
    
   
    export default useNowPlayingTrailer;