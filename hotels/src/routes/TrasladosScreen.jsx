import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { TrasladosComponent } from "./components/TrasladosComponent";

export const TrasladosScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };
  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <TrasladosComponent estadoSideBar={isOpen}></TrasladosComponent>
    </>
  );
};
