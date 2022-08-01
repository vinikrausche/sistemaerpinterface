import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Empreendimentos from "../pages/Empreendimentos";
import Login from "../pages/Login";
import Usuarios from "../pages/Usuarios";
import Empreendimento from "../pages/Empreendimento";
import Unidades from "../pages/Unidades";
import Unidade from "../pages/Unidade";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/empreendimentos" element={<Empreendimentos />} />
      <Route path="/empreendimento/:id" element={<Empreendimento />} />
      <Route path="/novoempreendimento" element={<Empreendimento />} />
      <Route path="/minhasunidades/:id" element={<Unidades />} />
      <Route path="/unidade/:id/:idEmpree" element={<Unidade />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/novaunidade/:idEmpree" element={<Unidade />} />
    </Routes>
  );
};

export default MainRoutes;
