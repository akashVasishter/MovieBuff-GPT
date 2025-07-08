import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
   if(!movies) return;
    
    const mainMovie = movies[0];
    console.log(mainMovie);
//consoling the mainMovie this will crash because the store wont be updated yet it will be in null state 
//handle it with early return like above so that it wont go ahead

const {id,original_title,overview} = mainMovie;

    return(
     <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground videoId = {id}/>
        
     </div>
    )
};


export default MainContainer;