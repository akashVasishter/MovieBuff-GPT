import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BG_IMG } from "../utils/constants";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {

    return(
        <div>
        <div className="fixed -z-10">
        <img src={NETFLIX_BG_IMG} alt="Netflix bg_IMG"/>    
        </div>
        <GptSearchBar/>
        <GptSuggestions/>
        </div>
    )
};


export default GptSearch;