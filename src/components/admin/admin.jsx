import React from "react";
import Ellipses from "../ellipses";
import '../../css/admin/admin.css';
import View from '../../img/view.png';
import Users from '../../img/users.png';
import Quizzes from '../../img/quizzes.png';
import TableQuizzes from '../table/tableQuizzes';
import Menu from "./menu";
import InfoAdmin from "./infoAdmin";

const Admin = () => {

    return (
        <>
            <Ellipses />
            <div className="container-admin">
                <Menu />
                <div className="container-datasQuiz">
                    <InfoAdmin />
                    <div className="info-users">
                        <div className="visualizations">
                            <div>
                                <button><img src={View} /></button>
                            </div>
                            <div>
                                <p>Novas visualizaçoes</p>
                                <p>1,000</p>
                                <p>Mes anterior 750</p>
                            </div>
                        </div>
                        <div className="visualizations">
                            <div>
                                <button><img src={Users} /></button>
                            </div>
                            <div>
                                <p>Novos usuários registrados</p> 
                                <p>500</p>
                                <p>Mes anterior 150</p>
                            </div>
                        </div>
                        <div className="visualizations">
                            <div>
                                <button><img src={Quizzes} /></button>
                            </div>
                            <div>
                                <p>Novos quizzes respondidos</p> 
                                <p>400</p>
                                <p>Mes anterior 200</p>
                            </div>
                        </div>
                    </div>
                    <div className="table-container">
                        <TableQuizzes />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;