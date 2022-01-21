import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const UserInventory = () => {
    const nav = useNavigate()
    const slots = useSelector(state=>state.inventorySlots.value)
    console.log(slots)
    return (

            <div className="userInventory d-flex column ">
                <div> <h1>User Inventory </h1></div>
               <div className=" a-center d-flex wrap space-around row">
                {slots.map((x,index)=>
                    <button className="start-button inventory d-flex  space-around" key={index}>
                       <img  src={x.image}  alt="Empty slot"/>


                    </button>
                )}
            </div>
                <div><h1>You need inventory, go to Shop</h1>
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