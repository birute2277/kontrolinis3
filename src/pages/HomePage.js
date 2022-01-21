import React from 'react';
import StartPage from "./StartPage";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const nav = useNavigate()

    return (
        <div className="home">
            <div className="start-toolbar a-center j-center">
                <button><h1 onClick={() => nav("./start")}> START GAME</h1></button>

            </div>

        </div>
    );
};

export default HomePage;