import React, { useState } from "react";
import styles from "../../styles/empleadosStyle.module.css";

export const EmpleadoRestauranteComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
    {
      Código: "656745",
      Programa: "Juan",
      Periodo: "Garcia",
      Inscritos: "Empresa",
      Admitidos: "2",
      Matriculados: "1",
      Graduados: "2",
      Snacks: "1",
    },
  ];
  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginationClass = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleModificar = () => {
    window.location.href = "modificar-empleado-res";
  };

  const handleInformacion = () => {
    window.location.href = "info-restaurante";
  };

  return (
    <>
      <div className={inputContainerClass}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Ingrese el empleado"
            className="form-control"
          />
          <div className={styles.buttonGroup}>
            <button className="btn btn-outline-danger">Buscar</button>
            <button className="btn btn-outline-success">Excel</button>
          </div>
        </div>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            <th className={thClass}>Código</th>
            <th className={thClass}>Nombre</th>
            <th className={thClass}>Apellido</th>
            <th className={thClass}>Empresa</th>
            <th className={thClass}>Desayuno</th>
            <th className={thClass}>Almuerzo</th>
            <th className={thClass}>Cena</th>
            <th className={thClass}>Snacks</th>
            <th className={thClass}>Acción</th>
            <th className={thClass}>Información</th>
          </tr>
        </thead>
        <tbody className={styles["table-hover"]}>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i} className={styles["text-left"]}>
                  {value}
                </td>
              ))}
              <td>
                <button onClick={handleModificar}>Modificar</button>
              </td>

              <td>
                <button onClick={handleInformacion}>Info</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={paginationClass}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};
