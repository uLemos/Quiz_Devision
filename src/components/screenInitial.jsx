import React from "react";
import "../css/ellipses.css";
import "../css/screenInitial.css";
import Ellipses from "./ellipses.jsx";
import { Link } from "react-router-dom";
import CardAccess from "./Cards/cardAccess.jsx";
import CardRegister from "./Cards/cardRegister.jsx";
import ButtonBack from "./buttons/buttonBack.jsx";
import { motion } from "framer-motion";

const ScreenInitial = () => {
  return (
    <>
      <Ellipses />
      <ButtonBack path={"/"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="containerCards"
      >
        <div className="container-screenInitial">
          <CardAccess isLoginAdm={false} />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 3 }}
            exit={{ x: window.innerWidth }}
            className="mid"
          />
          <CardRegister />
        </div>
      </motion.div>
      <Link to="/loginPage">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth }}
          className="container-admin"
        >
          <button>Administrador</button>
        </motion.div>
      </Link>
    </>
  );
};

export default ScreenInitial;
