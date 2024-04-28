import React from "react";
import "../../css/table/tableQuizzes.css";
import { motion } from "framer-motion";

const TableQuizzes = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: window.innerWidth }}
        className="container-quizzes"
      >
        <div className="header-quizzes">
          <h2>Quizzes mais respondidos por mês</h2>
        </div>
        <div className="sub-header">
          <div>
            <p>Quizzes</p>
          </div>
          <div>
            <p>Corretas</p>
            <p>Tentativas</p>
            <p>Respostas</p>
          </div>
        </div>
        <div className="division" />
        <div className="list-quizzes">
          <div className="bars-quizzes">
            <div>
              <p>Full Stack</p>
            </div>
            <div>
              <p>850</p>
              <p>350</p>
              <p>1500</p>
            </div>
          </div>
          <div className="bars-quizzes">
            <div>
              <p>Front-End</p>
            </div>
            <div>
              <p>850</p>
              <p>350</p>
              <p>1500</p>
            </div>
          </div>
          <div className="bars-quizzes">
            <div>
              <p>Back-End</p>
            </div>
            <div>
              <p>850</p>
              <p>350</p>
              <p>1500</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TableQuizzes;
