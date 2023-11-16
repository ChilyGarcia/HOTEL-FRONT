import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginSignInScreen } from "./routes/LoginSignInScreen";

import { HotelScreen } from "./routes/HotelScreen";

import {  TrasladosScreen } from "./routes/TrasladosScreen";
import { EmpleadosScreen } from "./routes/EmpleadosScreen";
import { EmpleadoRestauranteScreen } from "./routes/EmpleadoRestauranteScreen";
import { ModificarEmpleadoRestauranteScreen } from "./routes/ModificarEmpleadoRestauranteScreen";
import { InformacionEmpleadoRestaurante } from "./routes/InformacionEmpleadoRestaurante";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginSignInScreen />} />
        <Route path="/empleados" element={<EmpleadosScreen />}></Route>
        <Route path="/hotel" element={<HotelScreen />}></Route>
        <Route path="/traslados" element={<TrasladosScreen />}></Route>
        <Route path="/empleado-rest" element={<EmpleadoRestauranteScreen />}></Route>
        <Route path="/modificar-empleado-res" element={<ModificarEmpleadoRestauranteScreen/>}></Route>
        <Route path="/info-restaurante" element={<InformacionEmpleadoRestaurante/>}/>
      </Routes>
    </>
  );
};
