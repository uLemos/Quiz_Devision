import React, { useState } from "react";
import Ellipses from "./ellipses";
import ButtonBack from "./buttons/buttonBack";
import { useLocation } from "react-router-dom";
import "../css/quentionsPage.css";

const QuestionsPage = () => {

    const [positionIndex, setPositionIndex] = useState(null);

    const location = useLocation();
    const { selections } = location.state || {};
    const list = [1,2,3,4,5];
    const listOptions = [1,2,3,4];

    const Position = ({index}) => {
        setPositionIndex(index);
        if(index == 1)
            return <div className="barsQuantityQuestions-quantity" style={{backgroundColor: "green"}}/>;
        return <div className="barsQuantityQuestions-quantity" />;
    }

    console.log(selections);

    return (
        <>
            <Ellipses />
            <ButtonBack path={"/categories"} isLogged={true} />
            <div className="containerQuestions">
                <div className="cardQuestions">
                    <div className="barsQuantityQuestions">
                        {list.map(index => (
                            <Position
                                index={index}
                            >
                                <div className="barsQuantityQuestions-quantity" />
                            </Position>
                        ))}
                        <a>Pergunta {positionIndex - 4}</a>
                        <h1>Como se...</h1>
                    </div>
                </div>
                <div className="optionsQuestions">
                    {listOptions.map(() => (
                        <button className="barsOptions">
                            <p>A</p>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
};

export default QuestionsPage;