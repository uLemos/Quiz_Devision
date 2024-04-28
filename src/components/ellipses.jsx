import React from "react";
import "../css/ellipses.css";
import { motion } from "framer-motion";
import { colors } from "@mui/material";

const Ellipses = () => {
  const listEllipses = [
    {
      ellipses: "#FF4F4F",
    },
    {
      ellipses: "#ffcf30",
    },
    {
      ellipses: "#f371ff",
    },
    {
      ellipses: "#9A76FF",
    },
    {
      ellipses: "#ff9886",
    },
    {
      ellipses: "#FFA53A",
    },
  ];

  return (
    <>
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse1"
      />
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse2"
      />
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse3"
      />
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse4"
      />
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse5"
      />
      <motion.div
        initial={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        animate={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        exit={{
          background: listEllipses[parseInt(Math.random() * 5)].ellipses,
        }}
        className="Ellipse6"
      />
    </>
  );
};

export default Ellipses;
