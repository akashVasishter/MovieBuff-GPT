import { createSlice  } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name:'movies',
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{

        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },

        addNowPlayingTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addNowPlayingTrailer} = movieSlice.actions;
export default movieSlice.reducer;