import React from "react";
import Ellipses from "./ellipses";
import CardAccess from "./Cards/cardAccess";
import ButtonBack from "./buttons/buttonBack";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <>
      <Ellipses />
      <ButtonBack path={"/screenInitial"} isLogged={false} />
      <div className="containerCard">
        <CardAccess isLoginAdm={true} />
      </div>
    </>
  );
};

export default LoginPage;
