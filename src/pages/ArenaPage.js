import React from 'react';
import {useSelector} from "react-redux";

import Characters from "../components/Characters";
import Toolbar from "../components/Toolbar";
import CharactersInfo from "../components/CharactersInfo";
import UserInventory from "../components/UserInventory"
import {useNavigate} from "react-router-dom";


const ArenaPage = () => {


    return (
        <div className="start">
            <Toolbar/>
            <div className='d-flex'>
                <CharactersInfo/>
                <UserInventory/>

            </div>
        </div>
    );
};

export default ArenaPage;