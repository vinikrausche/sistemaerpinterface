import { EventHandler, MouseEventHandler } from "react";
import * as C from "./styled";

type Props = {
  method: () => void;
  txt: string;
  idempree?: string;
};

const BotaoEnviar = ({ method, txt }: Props) => {
  return <C.BotaoEnviar onClick={method}>{txt}</C.BotaoEnviar>;
};

export default BotaoEnviar;
