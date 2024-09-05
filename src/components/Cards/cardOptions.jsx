import React from "react";
import '../../css/cardCss/cardOptions.css';
import { useState, useEffect } from 'react';


const CardOptions = ({ options, title, id, onSelectionChange }) => {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [validIndex, setValidIndex] = useState(null);
    
    useEffect(() => {
        const buttons = document.querySelectorAll(`.btnOptions-${id}`);

        buttons.forEach((button, index) => {

            if (index === selectedIndex){
                button.classList.add('selected'); 
                // setValidIndex(null);
            }
            else if(validIndex === index){
                button.classList.remove('selected');
                setValidIndex(null);
            }
            else{
                button.classList.remove('selected');
                setValidIndex(null);
            }
            
        });

    }, [selectedIndex]);

    const handleOptionSelect = (index) => {
        console.log(index)
        console.log(id)
        console.log(validIndex)

        setSelectedIndex(index);
        onSelectionChange(id, index);
        setValidIndex(index);
    }

    return (
        <>
            <div className="containerOptions">
                <div className="titleOptions">
                    <a>{title}</a>
                </div>
                {options.map((option, index) => (
                    <button 
                        key={index}
                        type="button" 
                        className={`btnOptions btnOptions-${id}`}
                        onClick={() => handleOptionSelect(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </>
    )
}

export default CardOptions;