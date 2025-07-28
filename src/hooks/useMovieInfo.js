import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesInfo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieInfo = (id) => {

    const dispatch = useDispatch();

    const useMovieInfo = async() => {

        const response = await fetch("https://api.themoviedb.org/3/movie/"+ id + "?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addMoviesInfo(data));
    }
    useEffect(() => {

    useMovieInfo();

    },[])
};


export default useMovieInfo;