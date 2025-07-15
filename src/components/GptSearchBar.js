import { useSelector } from "react-redux";
import lang from "../utils/langConstants";



const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.language);

    return(
        <div className="pt-[10%] flex justify-center">
         <form className="w-1/2 bg-black grid grid-cols-12">
            <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey]?.gptSearchPlaceholder}/>
            <button className="py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg">{lang[langKey]?.search}</button>
            </form>   
        </div>
    )
};


export default GptSearchBar;