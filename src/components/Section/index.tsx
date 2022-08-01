import { useNavigate } from "react-router-dom";
import BotaoEnviar from "../Botoes/Empreendimento/Enviar";
import Header from "../Header";
import { Table } from "../Tabela";
import * as C from "./style";

const Section = () => {
  const navigate = useNavigate();

  const Redirect = () => {
    navigate("/novoempreendimento");
  };
  return (
    <C.Section>
      <Header />
      <C.ContainerTable>
        <Table />
      </C.ContainerTable>

      <div
        style={{
          width: "300px",
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "80px",
        }}
      >
        <BotaoEnviar txt="Novo Empreendimento" method={Redirect} />
      </div>
    </C.Section>
  );
};

export default Section;
