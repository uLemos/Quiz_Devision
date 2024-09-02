import React from "react";
import "../../css/buttons.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Dog from "../../img/dog.png";

const ButtonBack = ({ path, isLogged }) => {
  const teste = () => {
    if (path.typeof === "undefined") path = "/";
    console.log(path);
  };

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: -window.innerWidth }}
        className="container-back"
      >
        <Link to={path}>
          <button onClick={teste} className="back">
            <a>&lt;</a>
          </button>
        </Link>

        {isLogged && (
          <div className="perfilName">
            <a>uLemos</a>
            <img src={Dog} />
          </div>
        )}
        
      </motion.div>
    </>
  );
};

export default ButtonBack;
