import React, { useEffect } from "react";
import Header from "./Header";
import GetNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  useNowPlayingMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
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







