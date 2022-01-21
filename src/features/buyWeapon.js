import {createSlice} from "@reduxjs/toolkit";

export const buyWeaponSlice = createSlice({
    name: "buyWeapon",
    initialState: {
        value: [],
    },
    reducers: {
        setBuyWeapon: (state, {payload}) => {
            state.value=payload
        }
    }
})

export const {setBuyWeapon} = buyWeaponSlice.actions

export default buyWeaponSlice.reducer;