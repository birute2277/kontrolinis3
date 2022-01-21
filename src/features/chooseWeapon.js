import {createSlice} from "@reduxjs/toolkit";

export const chooseWeaponSlice = createSlice({
    name: "chooseWeapon",
    initialState: {
        value: [],
    },
    reducers: {
    //     setChooseWeapon: (state, {payload}) => {
    //         const weaponPrice=payload
    //         state.value=[]
    //         for(let i=0; i<weaponNumber; i++){
    //             state.value.push("")
    //         for(let i=0; i<weaponNumber; i++){
    //             state.value.push("")
    //         }
    //     // addToCart: (state, action) => {
    //     //     state.value = [...state.value, action.payload]
    //     // },
    //     // removeFromCart: (state, action) => {
    //     //     const deleteIndex = action.payload
    //     //     const result = state.value.filter((x, index) => index !== deleteIndex)
    //     //     state.value = result
    //     // },
    //     // removeById: (state, action) => {
    //     //     const id = action.payload
    //     //     state.value = state.value.filter(x => x.id !== id)
    //     // }
    //     // }
     }
})

export const {setChooseWeapon} = chooseWeaponSlice.actions

export default chooseWeaponSlice.reducer;