import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
    
    return(
        <div className="w-48 pr-6">
        <img alt="img-poster-path" src={IMG_CDN +posterPath}/>
        </div>
    )
};

export default MovieCard;