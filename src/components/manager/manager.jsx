import React from 'react';
import Ellipses from '../ellipses';
import Menu from '../admin/menu';
import InfoAdmin from '../admin/infoAdmin';
import TableUsers from '../table/tableUsers';

const Manager = () => {
    return (
        <>
            <Ellipses />
            <div className='container-admin'>
                <Menu />
                <div className='container-datasQuiz'>
                    <InfoAdmin />
                    <div className='info-users'>
                        
                    </div>
                    <div className='table-container'>
                        <TableUsers />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager;