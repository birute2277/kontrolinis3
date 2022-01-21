import {createSlice} from "@reduxjs/toolkit";

export const choosePotionsSlice = createSlice({
    name: "choosePotions",
    initialState: {
        value: [],
    },
    reducers: {
        setChoosePotions: (state, {payload}) => {
            const weaponPrice=payload
            state.value=[]
            // for(let i=0; i<weaponNumber; i++){
            //     state.value.push("")
            // for(let i=0; i<weaponNumber; i++){
            //     state.value.push("")
        }

    }

})

export const {setChoosePotions} = choosePotionsSlice.actions

export default choosePotionsSlice.reducer;