import React from "react";
import Home from '../components/home.jsx'
import ScreenInitial from "../components/screenInitial.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../components/loginPage.jsx";
import Admin from "../components/admin/admin.jsx";
import Manager from "../components/manager/manager.jsx";

const Routs = () => {
   return(
      <BrowserRouter>
          <Routes>
            <Route element = { <Home/> }  path="/" />
            <Route element = { <ScreenInitial/> }  path="/screenInitial" />
            <Route element = { <LoginPage /> } path="/loginPage" />
            <Route element = { <Admin />} path="/admin" />
            <Route element = { <Manager />} path="/manager" />
          </Routes>
      </BrowserRouter>
   )
}

export default Routs;

