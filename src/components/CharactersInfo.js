import React from 'react';
import {useSelector} from "react-redux";

const CharactersInfo = () => {

    const user = useSelector(state => state.charactersInfo.value)

    return (
        <div className="character-info">
            <div><h1>Character info</h1></div>

            <div className="info d-flex  a-center j-center">

                <img src={user.image} alt=""/>
                <div className=" d-flex column a-center j-center">
                <h1><b> {user.race}</b></h1>
                <h2><b>Damage:</b> {user.damage}</h2>
                <h2><b>Health:</b> {user.health}</h2>
                <h2><b>Energy:</b> {user.energy}</h2>
                <h2><b>Stamina:</b> {user.stamina}</h2>
                <h2><b>Strength:</b> {user.strength}</h2>
                <h2><b>Slots:</b> {user.inventorySlots }</h2>
                <h2><b>Gold:</b> {user.gold }</h2>
                </div>

            </div>
<div className="d-flex space-around  a-center j-center">
    <button className="start-button choose-weapon-slot ">

    </button>
</div>

    </div>
    );
};

export default CharactersInfo;