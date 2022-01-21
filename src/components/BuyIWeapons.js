

import React from 'react';
import {useDispatch} from "react-redux";
import {setBuyWeapon} from "../features/buyWeapon";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {setItemToSlot} from "../features/itemToSlot";


const BuyWeapon = ({weapons, slots, itemToSlot, changeMoney}) => {
    const dispatch = useDispatch()
     let money = 2000
    const nav = useNavigate()

    const buyWeapon=(arg)=>{
        console.log("weapons", arg)
        // dispatch(setBuyWeapon(arg))
        // nav("/trade")
        // ----------------------------------------------------------------------
        const item = weapons.find(x =>x.image===arg) // perkamas itemas
        console.log("masyvas slotams AAA",item)
        // if(money-item.price>=0){

            // cia patikrinimas ar yra tusciu slotu ir daikto idejimas jei yra

            const arr = slots.map((x, index) => (index === slots.findIndex(x => x === "")) ? item:x)
            console.log("masyvas slotams", item, arr)

            dispatch(setItemToSlot(arr))

            dispatch(changeMoney(money-item.price))

        // }


        // ------------------------------------------------------------------------------------

    }
    return (
        <div className="d-flex wrap space-around">
            {weapons.map((x, i) =>
                <div className="start-button" key={i}>
                    <div
                         onClick={ () => buyWeapon(x.image)}
                    >
                        <img src={x.image} alt=""/>
                        <div ><b>MaxDamage:</b> {x.maxDamage}</div>
                        <div><b>EnergyPerHit:</b> {x.energyPerHit}</div>
                        <div><b>Effects:</b> {x. effects}</div>
                        <div><b>Price:{x.price} </b> </div>

                    </div>

                </div>

            )}

        </div>
    );
};

export default BuyWeapon;

{/*<button className="buy-button" onClick={()=> chooseWeapon()}>ChooseWeapon</button>*/}