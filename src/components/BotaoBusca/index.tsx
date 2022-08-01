import * as B from "./style";

type Props = {
  search: () => void;
};

const BotaoBusca = ({ search }: Props) => {
  return <B.ButtonBuscas onClick={search}>Buscar</B.ButtonBuscas>;
};

export default BotaoBusca;
