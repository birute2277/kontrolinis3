import React from 'react';
import {useNavigate} from "react-router-dom";

const StartPage = () => {
    const nav = useNavigate()

    return (
            <div className="start a-center j-center">

                    <div className="start-button button"><h1 onClick={() => nav("./choosePlayer")}> START GAME</h1></div>
            </div>
    );
};

export default StartPage;