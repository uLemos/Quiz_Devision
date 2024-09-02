import React from "react";
import Home from "../components/home.jsx";
import ScreenInitial from "../components/screenInitial.jsx";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import LoginPage from "../components/loginPage.jsx";
import Admin from "../components/admin/admin.jsx";
import Manager from "../components/manager/manager.jsx";
import { AnimatePresence } from "framer-motion";
import CategoriesPage from "../components/categoriesPage.jsx";

const Routs = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<ScreenInitial />} path="/screenInitial" />
        <Route element={<LoginPage />} path="/loginPage" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Manager />} path="/manager" />
        <Route element={<CategoriesPage />} path="/categories" />
      </Routes>
    </AnimatePresence>
  );
};

export default Routs;
