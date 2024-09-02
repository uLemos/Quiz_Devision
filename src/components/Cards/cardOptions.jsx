import React from "react";
import '../../css/cardCss/cardOptions.css';
import { useState, useEffect } from 'react';


const CardOptions = ({ options, title }) => {

    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const buttons = document.querySelectorAll('.btnOptions');
        buttons.forEach((button, index) => {
            if (index === selectedIndex) {
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });
    }, [selectedIndex]);

    const handleOptionSelect = (index) => {
        console.log(index);
        setSelectedIndex(index);
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
                        className="btnOptions"
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