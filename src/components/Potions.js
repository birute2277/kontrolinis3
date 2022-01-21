

import React from 'react';
import {useDispatch} from "react-redux";
import {setCharactersInfo} from "../features/charactersInfo";
import {setInventorySlots} from "../features/inventorySlots";
import {useNavigate} from "react-router-dom";

const Potions = ({potions}) => {



    const nav = useNavigate()
    const choosePotions=(x)=>{
        console.log("potions", x, x.price, x.effect)

        // nav("/main")
    }
    return (
        <div className="d-flex wrap space-around">
            {potions.map((x, i) =>
                <button className="start-button" key={i}>
                    <div className="weapons"
                         onClick={ () => choosePotions(x)}
                    >
                        <img src={x.image} alt=""/>
                        <div ><b>{x.title}</b> </div>
                        {/*<div><b>Health</b> {x.effect.health}</div>*/}
                        {/*<div><b>Energy</b> {x.effect.energy}</div>*/}
                        <div><b>Price:{x.price} </b> </div>



                    </div>
                </button>
            )}
        </div>
    );
};

export default Potions;

