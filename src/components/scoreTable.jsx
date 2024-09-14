import React from "react";
import Ellipses from "./ellipses";
import ButtonBack from "./buttons/buttonBack";
import "../css/scoreTable.css";

const ScoreTable = () => {
    return (
        <>
            <Ellipses />
            <ButtonBack path={"/categories"} isLogged={true}/>
            <div className="containertable">
                <div className="scoreTable">
                    <h1>Tabela</h1>
                    <div>

                    </div>
                </div>
                <div className="buttonsActions">
                    <button>Tentar Novamente</button>
                    <button>Voltar ao início</button>
                </div>
            </div>
        </>
    )
}

export default ScoreTable;