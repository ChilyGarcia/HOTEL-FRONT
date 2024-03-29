import React, { useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { EmpleadoRestauranteComponent } from "./components/EmpleadoRestauranteComponent";

export const EmpleadoRestauranteScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <EmpleadoRestauranteComponent estadoSideBar={isOpen}></EmpleadoRestauranteComponent>
    </>
  );
};
