import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { ModificarEmpleadorRestaurante } from "./components/ModificarEmpleadorRestaurante";

export const ModificarEmpleadoRestauranteScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <ModificarEmpleadorRestaurante></ModificarEmpleadorRestaurante>
    </>
  );
};
