import api from "../../../../Api/axios";
import * as C from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
};

const BotaoDeletar = ({ id }: Props) => {
  const navigate = useNavigate();

  const handleDel = async () => {
    let res = window.prompt("Tem certeza que deseja deletar este item? [S,N]");

    if (res === "S" || res === "s") {
      let idEmprre = id.toString();
      let response = await api.delEmpreendimento(idEmprre);
      alert(response);
    }
  };

  return <C.BotaoDeletar onClick={handleDel}>Deletar</C.BotaoDeletar>;
};

export default BotaoDeletar;
