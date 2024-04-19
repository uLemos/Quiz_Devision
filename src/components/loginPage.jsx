import React from "react";
import Ellipses from "./ellipses";
import CardAccess from "./Cards/cardAccess";
import ButtonBack from "./buttons/buttonBack";

const LoginPage = () => {

  return (
    <>
      <Ellipses />
      <ButtonBack />
      <div className="containerCard">
        <CardAccess />
      </div>
    </>
  )
}

export default LoginPage;