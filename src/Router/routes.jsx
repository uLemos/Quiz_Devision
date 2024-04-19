import React from "react";
import Home from '../components/home.jsx'
import ScreenInitial from "../components/screenInitial.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../components/loginPage.jsx";

const Routs = () => {
   return(
      <BrowserRouter>
          <Routes>
            <Route element = { <Home/> }  path="/" />
            <Route element = { <ScreenInitial/> }  path="/screenInitial" />
            <Route element = { <LoginPage /> } path="/loginPage"/>
          </Routes>
      </BrowserRouter>
   )
}

export default Routs;

