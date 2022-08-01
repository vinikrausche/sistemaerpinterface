import { useNavigate, useParams } from "react-router-dom";
import BotaoEnviar from "../components/Botoes/Unidades/Enviar";
import FiltroUnidades from "../components/FiltroUnidades";
import Header from "../components/Header";
import * as C from "../components/Section/style";
import TabelaUnidades from "../components/TabelaUnidades";

const Unidades = () => {
  const navigate = useNavigate();

  const params = useParams();

  const Redirect = () => {
    navigate(`/novaunidade/${params.id}`);
  };
  return (
    <C.Section>
      <Header />
      <C.ContainerTable>
        <TabelaUnidades />
      </C.ContainerTable>
      <div
        style={{
          width: "300px",
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "300px",
        }}
      >
        {params.id && (
          <BotaoEnviar
            idempree={params.id}
            txt="Nova Unidade"
            method={Redirect}
          />
        )}
      </div>
    </C.Section>
  );
};

export default Unidades;
