import React from 'react';

import ToolbarArena from "../components/ToolbarArena";
import CharactersInfo from "../components/CharactersInfo";
// import UserInventory from "../components/UserInventory"
// import {useNavigate} from "react-router-dom";


const ArenaPage = () => {


    return (
        <div className="start">
            <ToolbarArena/>
            <div className='d-flex'>
                <CharactersInfo/>


            </div>
        </div>
    );
};

export default ArenaPage;