import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import Ellipses from "./ellipses.jsx";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Ellipses />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="home"
      >
        <Link to="/screenInitial">
          <p
            className="title"
          >
            Hello &lt;/user&gt;
          </p>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
