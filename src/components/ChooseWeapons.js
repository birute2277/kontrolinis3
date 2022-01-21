

import React from 'react';
import {useDispatch} from "react-redux";
import {setCharactersInfo} from "../features/charactersInfo";
import {setInventorySlots} from "../features/inventorySlots";
import {useNavigate} from "react-router-dom";
import {setChooseWeapon} from "../features/chooseWeapon";

const ChooseWeapons = ({weapons}) => {
    const dispatch = useDispatch()

    const nav = useNavigate()
    const chooseWeapons=(x)=>{
        console.log("weapons", x, x.price, x.effects)
         dispatch(setChooseWeapon(x))
        // nav("/trade")
    }
    return (
        <div className="d-flex wrap space-around">
            {weapons.map((x, i) =>
                <button className="start-button" key={i}>
                    <div className="weapons"
                         onClick={ () => chooseWeapons(x)}
                    >
                        <img src={x.image} alt=""/>
                        <div ><b>MaxDamage:</b> {x.maxDamage}</div>
                        <div><b>EnergyPerHit:</b> {x.energyPerHit}</div>
                        <div><b>Effects:</b> {x. effects}</div>
                        <div><b>Price:{x.price} </b> </div>
                    </div>
                </button>
            )}
            <button className="buy-button" onClick={()=> chooseWeapons()}>Buy</button>
        </div>
    );
};

export default ChooseWeapons;