import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { EmpleadosComponent } from "./components/EmpleadosComponent";

export const EmpleadosScreen = () => {

  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };


  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <EmpleadosComponent estadoSideBar={isOpen}></EmpleadosComponent>
    </>
  );
};
