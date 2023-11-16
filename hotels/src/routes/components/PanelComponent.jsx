import React, { useState, useEffect } from "react";
import styles from "../../styles/panelStyles.module.css";
import { Link } from "react-router-dom";

export const PanelComponent = ({ enviarEstado }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const rol = localStorage.getItem("rol");

    setUserRole(rol);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    enviarEstado(!isSidebarOpen);
  };

  const handleLogOut = () => {
    localStorage.removeItem("rol");
  };

  return (
    <div className={styles.panelContainer}>
      <div
        className={`${styles.navbar} ${
          isSidebarOpen ? styles["navbar-open"] : ""
        }`}
      >
        <button onClick={toggleSidebar}>
          <i className={`fa fa-bars ${styles.iconFontAwesome}`}></i>
        </button>

        <div className={styles.iconContainer}>
          <button>
            <i className={`fa fa-user ${styles.iconFontAwesome}`}></i>
          </button>
        </div>
      </div>
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles["sidebar-open"] : ""
        }`}
      >
        <div className={styles["sidebar-content"]}>
          <nav className={`${styles["main-menu"]} ${styles["sidebar-open"]}`}>
            <ul>
              {userRole === "administrador" && (
                <>
                  <li>
                    <Link to="/hotel" className={styles["round-corners"]}>
                      <i
                        className={`fa fa-table fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                      ></i>
                      <span className={styles["nav-text"]}>Hoteles</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/empleados" className={styles["round-corners"]}>
                      <i
                        className={`fa fa-user fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                      ></i>
                      <span className={styles["nav-text"]}>Empleados</span>
                    </Link>
                  </li>
                  <li className={styles["has-subnav"]}>
                    <Link to="/traslados" className={styles["round-corners"]}>
                      <i
                        className={`fa fa-plus fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                      ></i>
                      <span className={styles["nav-text"]}>Traslados</span>
                    </Link>
                  </li>
                </>
              )}
              {userRole === "restaurante" && (
                <li className={styles["has-subnav"]}>
                  <Link to="/empleado-rest" className={styles["round-corners"]}>
                    <i
                      className={`fa fa-user fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                    ></i>
                    <span className={styles["nav-text"]}>Empleado</span>
                  </Link>
                </li>
              )}
              {/* <li>
                <Link to="/infoHistorica" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-info fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>
                    Informacion histórica
                  </span>
                </Link>
              </li> */}
              {/* <li className={styles["has-subnav"]}>
                <Link to="/nuevoUsuario" className={styles["round-corners"]}>
                  <i
                    className={`fa fa-user fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Nuevo usuario</span>
                </Link>
              </li> */}
            </ul>

            <ul className={styles.logout}>
              <li>
                <Link
                  to="/login"
                  className={styles["round-corners"]}
                  onClick={handleLogOut}
                >
                  <i
                    className={`fa fa-power-off fa-2x ${styles["fa"]} ${styles["fa-2x"]}`}
                  ></i>
                  <span className={styles["nav-text"]}>Cerrar sesión</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
