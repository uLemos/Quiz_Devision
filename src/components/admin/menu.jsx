import React from "react";
import PainelDeControle from "../../img/painel-de-controle.png";
import Gerenciamento from "../../img/do-utilizador.png";
import Atividades from "../../img/cronometro.png";
import Editar from "../../img/editar.png";
import Configuracoes from "../../img/definindo-linhas.png";
import Deslogar from "../../img/botao-ligar-desligar.png";
import "../../css/admin/menu.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  const navigation = useNavigate();

  const handlePageControllPanel = () => {
    navigation("/admin");
  };

  const handlePageManager = () => {
    navigation("/manager");
  };

  const handlePageLoginAdm = () => {
    navigation("/loginPage");
  };

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 350 }}
        exit={{ x: window.innerWidth }}
        className="menu"
      >
        <div className="control-panel">
          <h1 className="">Quiz</h1>
          <div className="titlesInPanelControl">
            <a>
              <img src={PainelDeControle} />
            </a>
            <p onClick={handlePageControllPanel}>Painel de Controle</p>
          </div>
          <div className="titlesInPanelControl">
            <a>
              <img src={Gerenciamento} />
            </a>
            <p onClick={handlePageManager}>Gerenciamento</p>
          </div>
          <div className="titlesInPanelControl">
            <a>
              <img src={Atividades} />
            </a>
            <p>Atividades</p>
          </div>
          <div className="titlesInPanelControl">
            <a>
              <img src={Editar} />
            </a>
            <p>Editar site</p>
          </div>
        </div>
        <div className="control-panel-footer">
          <div className="titlesInPanelControl">
            <a>
              <img src={Configuracoes} />
            </a>
            <p>Configuraçoes</p>
          </div>
          <div className="titlesInPanelControl">
            <a>
              <img src={Deslogar} />
            </a>
            <p onClick={handlePageLoginAdm}>Desconectar</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
