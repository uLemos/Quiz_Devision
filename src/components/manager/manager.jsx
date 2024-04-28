import React from "react";
import Ellipses from "../ellipses";
import Menu from "../admin/menu";
import InfoAdmin from "../admin/infoAdmin";
import TableUsers from "../table/tableUsers";
import "../../css/admin/manager.css";
import View from "../../img/view.png";
import Monitor from "../../img/monitor.png";
import { motion } from "framer-motion";

const Manager = () => {
  return (
    <>
      <Ellipses />
      <div className="container-admin">
        <Menu />
        <div className="container-datasQuiz">
          <InfoAdmin />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: window.innerWidth }}
            className="info-users"
          >
            <div className="visualizations">
              <div>
                <button>
                  <img src={View} />
                </button>
              </div>
              <div>
                <p>Membros total</p>
                <p>2.200</p>
                <p>%30 Este mes</p>
              </div>
            </div>
            <div className="visualizations">
              <div>
                <button>
                  <img src={Monitor} />
                </button>
              </div>
              <div>
                <p>Ativos agora</p>
                <p>214</p>
                <p>Perfil das pessoas online</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: window.innerWidth }}
            className="table-users"
          >
            <h3>Todos os jogadores</h3>
            <TableUsers />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Manager;
