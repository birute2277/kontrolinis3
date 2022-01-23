import {createSlice} from "@reduxjs/toolkit";

export const itemToSlotSlice = createSlice({
    name: "itemToSlot",
    initialState: {
        value: [],
    },
    reducers: {
        setItemToSlot: (state, {payload}) => {
            const slotsNumber = payload
            state.value=[]
            for(let i=0; i<slotsNumber; i++){
                state.value.push(slotsNumber)
            }

        }
    }
})

export const {setItemToSlot} = itemToSlotSlice.actions

export default itemToSlotSlice.reducer;