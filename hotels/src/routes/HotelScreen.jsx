import React, {useState} from "react";
import { PanelComponent } from "./components/PanelComponent";
import { HotelComponent } from "./components/HotelComponent";


export const HotelScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const enviarEstadoSideBar = (estado) => {
    setIsOpen(estado);
  };

  return (
    <>
      <PanelComponent enviarEstado={enviarEstadoSideBar}></PanelComponent>
      <HotelComponent estadoSideBar={isOpen}></HotelComponent>
    </>
  );
};
