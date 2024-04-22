import React from "react";
import Ellipses from "../ellipses";
import '../../css/admin/admin.css'

const Admin = () => {

    return (
        <>
            <Ellipses />
            <div className="container-admin">
                <div className="menu">
                    <div className="control-panel">
                        <h1 className="">Quiz</h1>
                        <p>Painel de Controle</p>
                        <p>Gerenciamento</p>
                        <p>Aitivdades</p>
                        <p>Editar site</p>
                    </div>
                    <div className="control-panel-footer">
                        <p>Configuraçoes</p>
                        <p>Desconectar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;