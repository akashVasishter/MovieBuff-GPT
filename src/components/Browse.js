import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";



const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

   const showGptView = useSelector(store => store.gpt.showGptView);

    return(
        <div>
            <Header/>
         { showGptView ? <GptSearch/> : (
          <>
           <MainContainer/>
            <SecondaryContainer/>
          </>
         )
        }
           
           {/* 
              
             -Main Container
                - Video Background
                -Video Title
             - Secondary Container
                = Movies * n list             
           */}
        </div>
    )
};

export default Browse;







