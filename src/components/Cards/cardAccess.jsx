import React, { useState } from "react";
import "../../css/cardCss/cardAccess.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardAccess = ({ isLoginAdm }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (!user || !password) return;
    setUser("");
    setPassword("");
    console.log(`${user}\n${password}\n${isLoginAdm}`);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 450 }}
      exit={{ x: window.innerWidth }}
      className="container"
    >
      <form onSubmit={handlerSubmit}>
        <h1>Entrar</h1>
        <div className="container-form">
          <input
            type="text"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
            }}
            placeholder="Usuário"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Senha"
          />
        </div>
        {!isLoginAdm && (
          <div className="container-subForm">
            <div className="checkBox">
              <input type="checkbox" id="remenber" />
              <label for="remenber">Lembre-se de mim</label>
            </div>
            <p>Esqueci a senha</p>
          </div>
        )}
        <div className="buttonLogin">
          {isLoginAdm && (
            <Link to="/admin">
              <button type="submit" style={{ marginTop: 50 }}>
                Entrar
              </button>
            </Link>
          )}
          {!isLoginAdm && 
            (
              <Link to="/categories">
                <button type="submit">Entrar</button>
              </Link>
            )
          }
        </div>
      </form>
    </motion.div>
  );
};

export default CardAccess;
