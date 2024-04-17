import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import Ellipses from './ellipses.jsx';

const Home = () => {
 
  return (
    <>
      <div className='home'>
        <Ellipses />
        <p className='title'>Hello &lt;/user&gt;</p>
        <Link to='/screenInitial'>
          <p className='subTitle'>Pressione para começar...</p>
        </Link>
      </div>
    </>
  )

}

export default Home;