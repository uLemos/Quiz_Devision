import React from 'react';
import '../css/ellipses.css'
import '../css/screenInitial.css'
import Ellipses from './ellipses.jsx';
import { Link } from 'react-router-dom';
import CardAccess from './Cards/cardAccess.jsx';
import CardRegister from './Cards/cardRegister.jsx';
import ButtonBack from './buttons/buttonBack.jsx';

const ScreenInitial = () => {

  return (
    <>
      <ButtonBack path='/' />
      <div className='containerCards'>
        <div className='container-screenInitial'>
          <CardAccess />
          <div className='mid' />
          <CardRegister />
        </div>
      </div>
      <Link to='/loginPage'>
        <div className='container-admin'>
          <button>Administrador</button>
        </div>
      </Link>
      <Ellipses /> 
    </>
  )
}

export default ScreenInitial;