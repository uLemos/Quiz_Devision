import React from "react"
import '../../css/buttons.css'
import { Link } from 'react-router-dom';

const ButtonBack = ({ path }) => {

  const teste = () => {
    if(path.typeof === 'undefined')
      path = '/'
    console.log(path)
  }

  return (
    <>
      <div className='container-back'>
        <Link to={path}>
          <button onClick={ teste } className='back'><a>&lt;</a></button>
        </Link>
      </div>
    </>
  )
}

export default ButtonBack;