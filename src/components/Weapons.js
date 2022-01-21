

import React from 'react';
import {useDispatch} from "react-redux";
import {setCharactersInfo} from "../features/charactersInfo";
import {setInventorySlots} from "../features/inventorySlots";
import {useNavigate} from "react-router-dom";

  const Weapons = ({weapons}) => {
  const dispatch = useDispatch()

    const nav = useNavigate()
    const chooseWeapons=(x)=>{
        console.log("weapons", x, x.price, x.effects)

        // nav("/main")
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

export default Weapons;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{/*<button className="trader-button" onClick={()=> setWeapons(false)}>Potions</button>*/}

//PAGE is Start Page+++++++++++++++++++++++++++++++++++++++++++++++++

// import React from 'react';
// import Characters from "../components/Characters";
// // import HomePage from "./HomePage";
// // import {useSelector} from "react-redux";
// // import {useNavigate} from "react-router-dom";
//
// const StartPage = () => {
//
//
//     return (
//         <div className="start">
//             <div className="start-toolbar a-center j-center">
//                 <div><h1>Choose which character you wants to play with</h1></div>
//
//             </div>
//             <Characters/>
//
//         </div>
//     );
// };

// export default StartPage;
