import React from "react";
import Ellipses from "../ellipses";
import '../../css/admin/admin.css';
import PainelDeControle from '../../img/painel-de-controle.png';
import Gerenciamento from '../../img/do-utilizador.png';
import Atividades from '../../img/cronometro.png';
import Editar from '../../img/editar.png';
import Configuracoes from '../../img/definindo-linhas.png';
import Deslogar from '../../img/botao-ligar-desligar.png';
import { Link } from 'react-router-dom';

const Admin = () => {

    return (
        <>
            <Ellipses />
            <div className="container-admin">
                <div className="menu">
                    <div className="control-panel">
                        <h1 className="">Quiz</h1>
                        <div className="titlesInPanelControl">
                            <a><img src={PainelDeControle} /></a>
                            <p>Painel de Controle</p>
                        </div>
                        <div className="titlesInPanelControl">
                            <a><img src={Gerenciamento} /></a>
                            <p>Gerenciamento</p>
                        </div>
                        <div className="titlesInPanelControl">
                            <a><img src={Atividades} /></a>
                            <p>Atividades</p>
                        </div>
                        <div className="titlesInPanelControl">
                            <a><img src={Editar} /></a>
                            <p>Editar site</p>
                        </div>
                    </div>
                    <div className="control-panel-footer">
                        <div className="titlesInPanelControl">
                            <a><img src={Configuracoes} /></a>
                            <p>Configuraçoes</p>
                        </div>
                        <div className="titlesInPanelControl">
                            <a><img src={Deslogar} /></a>
                            <p>Desconectar</p>
                        </div>
                    </div>
                </div>
                <div className="container-datasQuiz">
                    <div className="info-admin">
                        <div className="perfil-admin">
                            <div className="photo">
                                <img src={Gerenciamento} />
                            </div>
                            <div className="Welcome-Admin">
                                <h1>uLemos</h1>
                                <a>Bem vindo ao seu painel de controle do Quiz.</a>
                            </div>
                        </div>
                        <div className="buttons-info">

                        </div>
                    </div>
                    <div className="info-users">
                        
                    </div>
                    <div className="table-container">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;