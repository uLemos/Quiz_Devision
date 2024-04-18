import React from "react";
import '../../css/cardAccess.css';

const CardAccess = () => {
  return (
    <div className="container">
      <form action="POST">
        <h1>Entrar</h1>
        <div className="container-form">
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
        </div>
        <div className="container-subForm">
          <div className="checkBox">
            <input type="checkbox" id="remenber" />
            <label for="remenber">Lembre-se de mim</label>
          </div>
          <p>Esqueci minha senha</p>
        </div>
      </form>
    </div>    
  )
}

export default CardAccess;