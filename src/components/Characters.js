import React from 'react';
import {useDispatch} from "react-redux";
import {setCharactersInfo} from "../features/charactersInfo";
import {setInventorySlots} from "../features/inventorySlots";
import {useNavigate} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch()
    const characters = [
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte097d3ac18c5b8ed/6165ec51ff59d903990f26e3/EE3E9KVL9ROW1613677289232.png",
            race: "Human",
            damage: 3,
            health: 150,
            energy: 50,
            stamina: 3,
            strength: 1,
            inventorySlots: 3,
            gold: 100
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png",
            race: "Dwarf",
            damage: 5,
            health: 90,
            energy: 30,
            stamina: 4,
            strength: 3,
            inventorySlots: 5,
            gold: 300
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdd9c3bc7630ea097/6165ee1b85a779070bc77f55/A62H0NRB056O1613677289519.png",
            race: "Elf",
            damage: 4,
            health: 100,
            energy: 40,
            stamina: 5,
            strength: 1,
            inventorySlots: 2,
            gold: 200
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5440cbe6b11972e4/6165e787c7341a058edee6c1/ZGHFCTYH33H41613677288710.png",
            race: "Gnome",
            damage: 3,
            health: 80,
            energy: 80,
            stamina: 7,
            strength: 1,
            inventorySlots: 4,
            gold: 1000
        },

        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8a0bea138cdc9f77/6165eebb70b75d5011e405d4/GYI6XASNQ8YE1613677290450.png",
            race: "Orc",
            damage: 7,
            health: 120,
            energy: 40,
            stamina: 1,
            strength: 10,
            inventorySlots: 5,
            gold: 50
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte86b6ed1f29656b9/6165e7dedfd0436b6dcf6e2e/YAAFZMAKCVPG1613677288954.png",
            race: "Goblin",
            damage: 5,
            health: 90,
            energy: 90,
            stamina: 5,
            strength: 2,
            inventorySlots: 3,
            gold: 200
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt9d279b401555fd09/6165efc047c23d6a01ffdf49/NF9Y4RYPBLZ91613677291342.png",
            race: "Troll",
            damage: 6,
            health: 100,
            energy: 70,
            stamina: 4,
            strength: 4,
            inventorySlots: 3,
            gold: 100
        },
        {
            image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0b1f2cd145aedbcd/6165f001a3e18902e03811d3/4UX5EM1CFKV81613677292421.png",
            race: "Undead",
            damage: 4,
            health: 40,
            energy: 50,
            stamina: 10,
            strength: 1,
            inventorySlots: 8,
            gold: 400
        },

    ]
    const nav = useNavigate()
    const chooseCharacter=(x)=>{
        console.log("Charakt", x, x.race, x.inventorySlots)
        dispatch(setCharactersInfo(x))
        dispatch(setInventorySlots(x.inventorySlots))
        nav("/main")
    }
    return (
        <div className="d-flex wrap space-around">
            {characters.map((x, i) =>
                <button className="st-button" key={i}>
            <div className="character"
                  onClick={ () => chooseCharacter(x)}
            >
                <img src={x.image} alt=""/>
                <h2><b>{x.race}</b> </h2>
                <div><b>Damage:</b> {x.damage}</div>
                <div><b>Health:</b> {x.health}</div>
                <div><b>Energy:</b> {x.energy}</div>
                <div><b>Stamina:</b> {x.stamina}</div>
                <div><b>Strength:</b> {x.strength}</div>
                <div><b>Slots:</b> {x.inventorySlots }</div>
                <div><b>Gold:</b> {x.gold }</div>

            </div>
                </button>
            )}
        </div>
    );
};

export default Characters;