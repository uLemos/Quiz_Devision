import React from 'react';
import Ellipses from './ellipses.jsx';
import '../css/ellipses.css'
import CardAccess from './Cards/cardAccess.jsx';
import { Link } from 'react-router-dom';

const ScreenInitial = () => {
  return (
    <>
      <Ellipses /> 
      <CardAccess />
      <Link to='/'>
        <button className='back'>&lt;</button>
      </Link>
    </>
  )
}

export default ScreenInitial;