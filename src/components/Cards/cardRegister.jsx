import React from "react";
import '../../css/cardRegister.css'

const CardRegister = () => {
    return (
        <>
            <div className="container">
                <form action="POST">
                    <h1>Registrar</h1>
                    <div className="container-form">
                        <input type="text" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                    </div>
                    <div className="container-subFormRegistger">
                        <div className="checkBox">
                            <input type="checkbox" />
                            <p>Termos de uso</p>
                        </div>
                        <div className="checkBox2">
                            <input type="checkbox" />
                            <p>Políticas de Privacidade</p>
                        </div>
                    </div>
                </form>
            </div>   
        </>
    )
}

export default CardRegister;