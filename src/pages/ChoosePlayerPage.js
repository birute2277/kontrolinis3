import React from 'react';
import Characters from "../components/Characters";
// import StartPage from "./StartPage";
// import {useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";

const ChoosePlayerPage = () => {


    return (
        <div className="start">
<div className="toolbar a-center j-center">
    <div><h1>Choose which character you wants to play with</h1></div>

</div>
            <Characters/>

        </div>
    );
};

export default ChoosePlayerPage;