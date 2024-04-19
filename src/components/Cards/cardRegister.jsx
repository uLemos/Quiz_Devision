import React, { useState } from "react";
import '../../css/cardCss/cardRegister.css'

const CardRegister = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();

        if(!user || !password)
            return;

        console.log(`${user}\n${password}`)
        setUser('');
        setPassword('');
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handlerSubmit}>
                    <h1>Registre-se</h1>
                    <div className="container-form">
                        <input type="text" value={user} onChange={(x) => {setUser(x.target.value)}} placeholder="Usuário" />
                        <input type="password" value={password} onChange={(x) => {setPassword(x.target.value)}} placeholder="Senha" />
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
                        <button type="submit">Registrar</button>
                    </div>
                </form>
            </div>   
        </>
    )
}

export default CardRegister;