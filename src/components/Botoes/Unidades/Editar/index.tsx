import * as C from "./style";

type Props = {
  id: number;
  empree: string;
};
const BotaoEditar = ({ id, empree }: Props) => {
  return (
    <C.BotaoEditar href={`/unidade/${id}/${empree}`}>Editar</C.BotaoEditar>
  );
};

export default BotaoEditar;
