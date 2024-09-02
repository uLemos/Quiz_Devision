import React from "react";
import "../css/ellipses.css";
import Ellipses from "./ellipses.jsx";
import ButtonBack from "./buttons/buttonBack.jsx";
import CardOptions from "./Cards/cardOptions.jsx";

const CategoriesPage = () => {
    return (
        <>
            <Ellipses />
            <ButtonBack path={"/screenInitial"} isLogged={true}/>
            <CardOptions options={["Iniciante", "Intermediário", "Avançado"]} title={"Dificuldade"} /> 
            <div className="midOptions"></div>
            <CardOptions options={["Front-end", "Back-end", "Full Stack"]} title={"Categoria"} /> 
            <div className="confirmedOptions">
                <button>Confirmar</button>
            </div>
        </>
    )
}

export default CategoriesPage;