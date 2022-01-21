import React from 'react';
import Characters from "../components/Characters";
// import HomePage from "./HomePage";
// import {useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";

const StartPage = () => {


    return (
        <div className="start">
<div className="start-toolbar a-center j-center">
    <div><h1>Choose which character you wants to play with</h1></div>

</div>
            <Characters/>

        </div>
    );
};

export default StartPage;