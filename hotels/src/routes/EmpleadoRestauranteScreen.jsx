import React, { useState} from "react";
import { PanelComponent } from "./components/PanelComponent";

export const EmpleadoRestauranteScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
    </>
  );
};
