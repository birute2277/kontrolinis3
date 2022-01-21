import {createSlice} from "@reduxjs/toolkit";

export const inventorySlotsSlice = createSlice({
    name: "inventorySlots",
    initialState: {
        value: [],
    },
    reducers: {
        setInventorySlots: (state, {payload}) => {
            const slotsNumber = payload
            state.value = []
            for (let i = 0; i < slotsNumber; i++) {
                state.value.push("")
            }
        },
            setItemToSlot:(state , action)=>{
                state.value=action.payload
            },

        }

})

export const {setInventorySlots, setItemToSlot} = inventorySlotsSlice.actions

export default inventorySlotsSlice.reducer;
