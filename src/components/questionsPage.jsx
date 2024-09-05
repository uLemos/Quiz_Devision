import React from "react";
import Ellipses from "./ellipses";
import ButtonBack from "./buttons/buttonBack";
import { useLocation } from "react-router-dom";

const QuestionsPage = () => {

    const location = useLocation();
    const { selections } = location.state || {};

    console.log(selections);

    return (
        <>
            <Ellipses/>
            <ButtonBack path={"/categories"} isLogged={true}/>
        </>
    )
};

export default QuestionsPage;