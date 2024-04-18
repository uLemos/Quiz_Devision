import React from 'react';
import '../css/ellipses.css'
import '../css/screenInitial.css'
import Ellipses from './ellipses.jsx';
import { Link } from 'react-router-dom';
import CardAccess from './Cards/cardAccess.jsx';
import CardRegister from './Cards/cardRegister.jsx';

const ScreenInitial = () => {
  return (
    <>
      <div className='container-back'>
        <Link to='/'>
          <button className='back'><a>&lt;</a></button>
        </Link>
      </div>
      <div className='container-screenInitial'>
        <CardAccess />
        <div className='mid' />
        <CardRegister />
      </div>
      <Ellipses /> 
    </>
  )
}

export default ScreenInitial;