import React from "react";
import "../../css/buttons.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ButtonBack = ({ path }) => {
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
      </motion.div>
    </>
  );
};

export default ButtonBack;
