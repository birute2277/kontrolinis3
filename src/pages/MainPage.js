import React from 'react';

import Toolbar from "../components/Toolbar";
import CharactersInfo from "../components/CharactersInfo";
import UserInventory from "../components/UserInventory"


const MainPage = () => {

    return (
        <div className="start">
            <Toolbar/>
            <div className="d-flex user-weapons" >

            <CharactersInfo/>
            <UserInventory/>

        </div>
        </div>
    );
};

export default MainPage;