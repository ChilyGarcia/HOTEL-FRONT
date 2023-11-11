import React, { useState, useEffect } from "react";
import styles from "../../styles/empleadosStyle.module.css";

export const EmpleadosComponent = ({ estadoSideBar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Datos simulados (ajusta estos datos según tus necesidades)
  const data = [
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "744 horas y 31 minutos",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "744 horas y 31 minutos",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "744 horas y 31 minutos",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "744 horas y 31 minutos",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "744 horas y 31 minutos",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
    {
      Código: "656745",
      Programa: "Negoc",
      Periodo: "Juan",
      Inscritos: "Garcia",
      Admitidos: "20-02-21",
      Matriculados: "20-03-21",
      Graduados: "time",
    },
  ];

  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const paginationClass = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
            <th className={thClass}>Hotel</th>
            <th className={thClass}>Nombre</th>
            <th className={thClass}>Apellido</th>
            <th className={thClass}>Ingreso</th>
            <th className={thClass}>Salida</th>
            <th className={thClass}>Tiempo</th>
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
