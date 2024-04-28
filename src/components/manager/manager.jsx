import React from 'react';
import Ellipses from '../ellipses';
import Menu from '../admin/menu';
import InfoAdmin from '../admin/infoAdmin';
import TableUsers from '../table/tableUsers';
import '../../css/admin/manager.css';
import View from '../../img/view.png';
import Monitor from '../../img/monitor.png';

const Manager = () => {
    return (
        <>
            <Ellipses />
            <div className='container-admin'>
                <Menu />
                <div className='container-datasQuiz'>
                    <InfoAdmin />
                    <div className='info-users'>
                        <div className="visualizations">
                            <div>
                                <button><img src={View} /></button>
                            </div>
                            <div>
                                <p>Membros total</p>
                                <p>2.200</p>
                                <p>%30 Este mes</p>
                            </div>
                        </div>
                        <div className="visualizations">
                            <div>
                                <button><img src={Monitor} /></button>
                            </div>
                            <div>
                                <p>Ativos agora</p>
                                <p>214</p>
                                <p>Perfil das pessoas online</p>
                            </div>
                        </div>
                    </div>
                    <div className='table-users'>
                        <h3>Todos os jogadores</h3>
                        <TableUsers />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager;