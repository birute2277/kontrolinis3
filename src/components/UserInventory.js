import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setItemToSlot} from "../features/itemToSlot";

const UserInventory = (item) => {
    const nav = useNavigate()
    const slots = useSelector(state=>state.inventorySlots.value)
    console.log( "slotai", slots)
    return (

            <div className="userInventory d-flex column ">
                <div> <h1>User Inventory </h1></div>
               <div className=" a-center d-flex wrap space-around ">
                {slots.map((x,index)=>
                    <button className="start-button inventory d-flex  space-around" key={index}>
                       <img  src={x.image}  alt="Empty slot"/>
                    </button>
                )}
            </div>
                <div><h1>You have so much slots for weapons </h1>
                    <h1>Go to Trader</h1>
                    {/*<button className="trader-button"  onClick={() => nav("./trader")}><h1 >Shop</h1></button>*/}
                </div>
</div>

    );
};

export default UserInventory;

/*
* feature <- items = []
*
* * slot = {
*   imgage: "url("paveijsliuks")"
*   value: empty
* }
* items = [slot,slot,slot] // sitai darau kartu koks yra slotNumber
* tada su mapu atvaizduoju items
*
*
*
* */
//
// ++++++++++++++++++++   cia reikes parinkti ginkla   +++++++++++++++++++++++
//
//
// import React from 'react';
// import {useDispatch} from "react-redux";
// import {setCharactersInfo} from "../features/charactersInfo";
// import {setInventorySlots} from "../features/inventorySlots";
// import {useNavigate} from "react-router-dom";
// import {setItemToSlot} from "../features/itemToSlot";
//
//
// const Weapons = ({weapons, slots, changeMoney}) => {
//     const dispatch = useDispatch()
//     let money = 2000
//
//     const nav = useNavigate()
//     const chooseWeapons=(x)=>{
//         console.log("weapons", x, x.price, x.effects)
//
//         // nav("/main")
//     }
//     return (
//         <div className="d-flex wrap space-around">
//             {weapons.map((x, i) =>
//                 <button className="start-button" key={i}>
//                     <div className="weapons"
//                          onClick={ () => chooseWeapons(x)}
//                     >
//                         <img src={x.image} alt=""/>
//                         <div ><b>MaxDamage:</b> {x.maxDamage}</div>
//                         <div><b>EnergyPerHit:</b> {x.energyPerHit}</div>
//                         <div><b>Effects:</b> {x. effects}</div>
//                         <div><b>Price:{x.price} </b> </div>
//                     </div>
//                 </button>
//             )}
//             <button className="buy-button" onClick={()=> chooseWeapons()}>Buy</button>
//         </div>
//     );
// };
//
// export default Weapons;

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
