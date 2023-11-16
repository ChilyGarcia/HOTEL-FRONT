import React from "react";

export const EmpleadoRestauranteComponent = ({ estadoSideBar }) => {
  const tableClass = estadoSideBar ? styles.tableOpen : styles.tableClose;
  const thClass = estadoSideBar ? styles.thOpen : styles.thClose;
  const inputContainerClass = estadoSideBar
    ? styles.inputContainerOpen
    : styles.inputContainerClose;

  const paginationClass = estadoSideBar
    ? styles.paginationOpen
    : styles.paginationClose;

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
