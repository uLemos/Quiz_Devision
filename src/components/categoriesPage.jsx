import React from "react";
import "../css/ellipses.css";
import Ellipses from "./ellipses.jsx";
import ButtonBack from "./buttons/buttonBack.jsx";
import CardOptions from "./Cards/cardOptions.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoriesPage = () => {

    const [selections, setSelections] = useState({});

    const handleSelectionChange = (id, index) => {
        setSelections(prevSelections => ({
            ...prevSelections,
            [id]: index
        }));
    }

    const handleConfirm = () => {
        console.log("Seleções: ", selections);
    }

    return (
        <>
            <Ellipses />
            <ButtonBack path={"/screenInitial"} isLogged={true}/>
            <CardOptions 
                options={["Iniciante", "Intermediário", "Avançado"]} 
                title={"Dificuldade"}
                id={"Dificuldade"}
                onSelectionChange={handleSelectionChange}
            /> 
            <div className="midOptions"></div>
            <CardOptions 
                options={["Front-end", "Back-end", "Full Stack"]} 
                title={"Categoria"} 
                id={"Categoria"}
                onSelectionChange={handleSelectionChange}
            /> 
            <div className="confirmedOptions">
                <Link 
                    to={{
                        pathname: selections.Dificuldade != null && selections.Categoria != null ? "/questionsPage" : "",
                        state: { selections }  
                    }}  
                >
                    <button onClick={handleConfirm}>Confirmar</button>
                </Link>
            </div>
        </>
    )
}

export default CategoriesPage;