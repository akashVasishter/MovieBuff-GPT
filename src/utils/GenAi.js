import { GEMINI_API_Key } from "./constants";
import {GoogleGenAI} from '@google/genai';


const GenAI = new GoogleGenAI({
    apiKey: process.env.REACT_APP_GEMINI_API_KEY,
    dangerouslyAllowBrowser: true 
});


export default GenAI;