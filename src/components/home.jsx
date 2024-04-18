import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import Ellipses from './ellipses.jsx';

const Home = () => {
 
  return (  
    <>
      <div className='home'>
        <Ellipses />
        <Link to='/screenInitial'>
          <p className='title'>Hello &lt;/user&gt;</p>
        </Link>
      </div>
    </>
  )

}

export default Home;