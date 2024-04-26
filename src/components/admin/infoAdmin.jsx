import React from 'react';
import Dog from '../../img/dog.png';
import Sino from '../../img/sino.png';
import Lupa from '../../img/lupa.png';
import '../../css/admin/infoAdmin.css';

const InfoAdmin = () => {
    return (
        <>
            <div className="info-admin">
                <div className="perfil-admin">
                    <div className="photo">
                        <img src={Dog} />
                    </div>
                    <div className="Welcome-Admin">
                        <h1>uLemos</h1>   
                        <a>Bem vindo ao seu painel de controle do Quiz.</a>
                    </div>
                </div>
                <div className="buttons-info">
                    <div>
                        <button><img src={Sino} /></button>
                    </div>
                    <div>
                        <button><img src={Lupa} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoAdmin;