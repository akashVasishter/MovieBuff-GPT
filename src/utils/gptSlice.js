import { createSlice } from "@reduxjs/toolkit";



const gptSlice = createSlice({

    name: "gpt",
    initialState: {

        showGptView: false,
        movieNames:null,
        movieResult:null
    },

    reducers:{

    toggleGptView : (state) => {

       state.showGptView = !state.showGptView
    },
    
    addGenAiMovies : (state,action) => {

        const { movieNames, movieResults } = action.payload;
          
        state.movieNames = movieNames;
        state.movieResult = movieResults;
    },

    }
});

export const {toggleGptView,addGenAiMovies} = gptSlice.actions;
export default gptSlice.reducer;