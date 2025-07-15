import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GptSearch = () => {

    return(
        <div>
        <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMG} alt="netflix-bg-img"/>
            </div>
        <GptSearchBar/>
        <GptSuggestions/>
        </div>
    )
};


export default GptSearch;