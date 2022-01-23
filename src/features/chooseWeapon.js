import {createSlice} from "@reduxjs/toolkit";

export const chooseWeaponSlice = createSlice({
    name: "chooseWeapon",
    initialState: {
        value: [],
    },
    reducers: {
    //     setChooseWeapon: (state, {payload}) => {
    //         const weaponPrice=payload
    //         state.value= [...state.value, action.payload]
    //         for(let i=0; i<weaponNumber; i++){
    //             state.value.push("")

// removeFromCart: (state, action) => {
    //     const deleteIndex = action.payload
    //     const result = state.value.filter((x, index) => index !== deleteIndex)
    //     state.value = result// },




     }
})

export const {setChooseWeapon} = chooseWeaponSlice.actions

export default chooseWeaponSlice.reducer;