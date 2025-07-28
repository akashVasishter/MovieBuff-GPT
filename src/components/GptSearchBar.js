import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import GenAI from "../utils/GenAi";
import { API_OPTIONS } from "../utils/constants";
import { addGenAiMovies } from "../utils/gptSlice";


const GptSearchBar = () => {

    const dispatch = useDispatch(null);
    const langKey = useSelector((store) => store.config.language);
    const searchText = useRef(null);
    
// Search Movies with TMDB search API
    const searchMovies = async(movies) => {

        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movies + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const gptSearchHandler = async() => {
   
        console.log(searchText.current.value);
        //Make Api call to GenAI and get movie result

        const aiQuery = "Act like a movie Recommnedation system:" + searchText.current.value + "only give me names of five movies, comma seperated like the example result given ahead. Example Result: Godfather, Scarface, Equalizer, taxi driver, the Irishman";
        const genAiResults = await GenAI.models.generateContent({
                model: "gemini-2.5-flash",
                contents: aiQuery,
               });

        console.log(genAiResults?.text);

        if(!genAiResults?.text) return {
            //TODO:handle error component
        }
        const genaiMovies = genAiResults?.text.split(",");
        console.log(genaiMovies);
        //.split(") will give the result in arr seperated by commas ['Some Like It Hot', ' Duck Soup', ' Bringing Up Baby', " Singin' in the Rain", ' City Lights']

        // Passing each movie to fetch the movies with TMDB search api - will return 5 promises of Array as the searchMovies() is a async method
        const promiseArr = genaiMovies.map((movies) => searchMovies(movies));
     
       //we will resolve all 5 promise and return the response
       const tmdbResult = await Promise.all(promiseArr);
        console.log(tmdbResult);
        dispatch(addGenAiMovies({movieNames: genaiMovies, movieResults: tmdbResult}));
     };

    return(
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
         <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey]?.gptSearchPlaceholder}/>
            <button className="py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg" onClick={gptSearchHandler}>{lang[langKey]?.search}</button>
            </form>   
        </div>
    )
};

export default GptSearchBar;