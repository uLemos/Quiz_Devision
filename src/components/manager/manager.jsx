import React from 'react';
import Ellipses from '../ellipses';
import Menu from '../admin/menu';
import InfoAdmin from '../admin/infoAdmin';

const Manager = () => {
    return (
        <>
            <Ellipses />
            <div className='container-admin'>
                <Menu />
                <div className='container-datasQuiz'>
                    <InfoAdmin />
                </div>
            </div>
        </>
    )
}

export default Manager;