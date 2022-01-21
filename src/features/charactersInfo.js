import {createSlice} from "@reduxjs/toolkit";

export const charactersInfoSlice = createSlice({
    name: "charactersInfo",
    initialState: {
        value: [],
    },
    reducers: {
        setCharactersInfo: (state, {payload}) => {
            state.value=payload
        }
    }
})

export const {setCharactersInfo} = charactersInfoSlice.actions

export default charactersInfoSlice.reducer;
