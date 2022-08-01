import * as C from "./style";

type Props = {
  id: number;
};
const BotaoVer = ({ id }: Props) => {
  return <C.BotaoVer href={`/minhasunidades/${id}`}>Ver Unidades</C.BotaoVer>;
};

export default BotaoVer;
