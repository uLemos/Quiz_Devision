import React from "react";
import '../../css/cardCss/cardRegister.css'

const CardRegister = () => {

    const handlerSubmit = (event) => {
        
    }

    return (
        <>
            <div className="container">
                <form action="POST">
                    <h1>Registre-se</h1>
                    <div className="container-form">
                        <input type="text" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                    </div>
                    <div className="container-subFormRegistger">
                        <div className="checkBoxRegister">
                            <input type="checkbox" />
                            <p>Termos de uso</p>
                        </div>
                        <div className="checkBoxRegister">
                            <input type="checkbox" />
                            <p>Políticas de Privacidade</p>
                        </div>
                    </div>
                    <div className="buttonRegister">
                        <button onSubmit="">Registrar</button>
                    </div>
                </form>
            </div>   
        </>
    )
}

export default CardRegister;