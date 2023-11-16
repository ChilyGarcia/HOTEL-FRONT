import React, { useState } from "react";
import { PanelComponent } from "./components/PanelComponent";
import { InformacionEmpleadoRestauranteComponent } from "./components/InformacionEmpleadoRestauranteComponent";

export const InformacionEmpleadoRestaurante = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <InformacionEmpleadoRestauranteComponent
        estadoSideBar={isOpen}
      ></InformacionEmpleadoRestauranteComponent>
    </>
  );
};
