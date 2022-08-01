import Header from "../components/Header";
import * as C from "../components/Section/style";
import * as D from "../components/Dados/style";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const Empreendimento = () => {
  const params = useParams();

  return (
    <C.Section>
      <Header />
      <D.ContainerDados>
        <Form />
      </D.ContainerDados>
    </C.Section>
  );
};

export default Empreendimento;
