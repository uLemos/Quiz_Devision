import React, { useState } from "react";
import '../../css/cardCss/cardAccess.css';

const CardAccess = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();

    if(!user || !password)
      return;
    setUser('')
    setPassword('')
    console.log(`Usuário: ${user} - Senha: ${password}`)
  }

  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <h1>Entrar</h1>
        <div className="container-form">
          <input type="text" value={user} onChange={(event) => {setUser(event.target.value)}} placeholder="Usuário" />
          <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Senha" />
        </div>
        <div className="container-subForm">
          <div className="checkBox">
            <input type="checkbox" id="remenber" />
            <label for="remenber">Lembre-se de mim</label>
          </div>
          <p>Esqueci a senha</p>
        </div>
        <div className="buttonLogin">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>    
  )
}

export default CardAccess;