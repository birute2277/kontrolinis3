

import React from 'react';
import {useDispatch} from "react-redux";
// import {setCharactersInfo} from "../features/charactersInfo";
// import {setInventorySlots} from "../features/inventorySlots";
import {useNavigate} from "react-router-dom";
import {setItemToSlot} from "../features/itemToSlot";


const Weapons = ({weapons, slots, itemToSlot, changeMoney, item}) => {
    const dispatch = useDispatch()
    let money = 2000
    const nav = useNavigate()

    function buyWeapon(arg){
        console.log(arg)
        // dispatch(setBuyWeapon(arg))
        nav("/trade")

        const item = weapons.find(x =>x.image===arg.image)
        console.log("masyvas slotams AAA",item)
        if(money-item.price>=0){
        const arr = slots.map((x, index) => (index === slots.findIndex(x => x === "")) ? item:x)
        console.log("masyvas slotams", item, arr)

        dispatch(setItemToSlot(arr))

        // dispatch(setItemToSlot(arg))

         }

    }
    return (
        <div className="d-flex wrap space-around">
            {weapons.map((x, i) =>
                <div className="start-button" key={i}>
                    <div
                        onClick={ () => buyWeapon(x)}
                    >
                        <img src={x.image} alt=""/>
                        <div ><b>MaxDamage:</b> {x.maxDamage}</div>
                        <div><b>EnergyPerHit:</b> {x.energyPerHit}</div>
                        <div><b>Effects:</b> {x. effects}</div>
                        <div><b>Price:{x.price} </b> </div>
                       <button>Buy</button>
                    </div>

                </div>

            )}

        </div>
    );
};

export default Weapons;

{/*<button className="buy-button" onClick={()=> chooseWeapon()}>ChooseWeapon</button>*/}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{/*<button className="trader-button" onClick={()=> setWeapons(false)}>Potions</button>*/}

//PAGE is Start Page+++++++++++++++++++++++++++++++++++++++++++++++++

// import React from 'react';
// import Characters from "../components/Characters";
// // import StartPage from "./StartPage";
// // import {useSelector} from "react-redux";
// // import {useNavigate} from "react-router-dom";
//
// const ChoosePlayerPage = () => {
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

// export default ChoosePlayerPage;
