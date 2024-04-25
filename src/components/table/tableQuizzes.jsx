import React from 'react';
import '../../css/table/tableQuizzes.css';

const TableQuizzes = () => {
  return (
    <>
      <div className='container-quizzes'>
        <div className='header-quizzes'>
          <h2>Quizzes mais respondidos por mês</h2>
        </div>
        <div className='sub-header'>
          <div>
            <p>Quizzes</p>
          </div>
          <div>
            <p>Corretas</p>
            <p>Tentativas</p>
            <p>Respostas</p>
          </div>
        </div>
        <div className='list-quizzes'>

        </div>
      </div>
    </>    
  )
}

export default TableQuizzes;