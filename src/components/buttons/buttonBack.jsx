import React from "react"
import '../../css/buttons.css'
import { Link } from 'react-router-dom';

const ButtonBack = (props) => {

  const teste = () => {
    console.log(props.path)
  }

  return (
    <>
      <div className='container-back'>
        <Link to={ props.path }>
          <button onClick={ teste } className='back'><a>&lt;</a></button>
        </Link>
      </div>
    </>
  )
}

export default ButtonBack;