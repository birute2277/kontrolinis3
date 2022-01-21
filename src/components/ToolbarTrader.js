import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ToolbarTrader = () => {

    const nav = useNavigate()


    return (

        <div className="main-toolbar a-center j-center space-around">
            <div><h1 onClick={() => nav("/main")}>Main</h1></div>
            <div><h1 onClick={() => nav("./arena")}>Arena</h1></div>


        </div>

        // onClick={ () => chooseCharacter(x)} key={i}
    );
};

export default ToolbarTrader;