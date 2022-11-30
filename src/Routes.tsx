import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Pagina404 from "./pages/Page404";
import Home from "./pages/Home";
import Start from "./pages/Init";
import Question from "./pages/Question";


export function Routess() {

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/question/:world" element={<Question />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  );
}
