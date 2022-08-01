import * as C from "./style";

type Props = {
  id: number;
};
const BotaoEditar = ({ id }: Props) => {
  return <C.BotaoEditar href={`/empreendimento/${id}`}>Editar</C.BotaoEditar>;
};

export default BotaoEditar;
