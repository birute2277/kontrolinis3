import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import charactersInfoReducer from "./features/charactersInfo";
import chooseWeaponReducer from "./features/chooseWeapon";
import choosePotionsReducer from "./features/choosePotions";
import inventorySlotsReducer from "./features/inventorySlots";
import buyPotionsReducer from "./features/buyWeapon";
import buyWeaponReducer from "./features/buyWeapon";
import itemToSlotReducer from "./features/itemToSlot";
import changeMoneyReducer from "./features/changeMoney";


const store = configureStore({
    reducer: {
        charactersInfo: charactersInfoReducer,
        inventorySlots: inventorySlotsReducer,
        choosePotions: choosePotionsReducer,
        chooseWeapon: chooseWeaponReducer,
        buyPotions: buyPotionsReducer,
        buyWeapon: buyWeaponReducer,
        itemToSlot: itemToSlotReducer,
        changeMoney: changeMoneyReducer,

    }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
