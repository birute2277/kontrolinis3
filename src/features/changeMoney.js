import {createSlice} from "@reduxjs/toolkit";

export const changeMoneySlice = createSlice({
    name: "changeMoney",
    initialState: {
        value: [],
    },
    reducers: {
        setChangeMoney: (state, {payload}) => {
            // const slotsNumber=payload
            // state.value=[]
            // for(let i=0; i<slotsNumber; i++){
            //     state.value.push("")
            // }

        }
    }
})

export const {setChangeMoney} = changeMoneySlice.actions

export default changeMoneySlice.reducer;