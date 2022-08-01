import * as C from "./style";

type Props = {
  title: string;
  cash?: number;
  qtd?: number;
};
const Card = ({ title, cash, qtd }: Props) => {
  return (
    <C.Body>
      <C.CardTitle>{title}</C.CardTitle>

      {qtd && <C.CardValue> {qtd}</C.CardValue>}

      {cash && <C.CardValue>R$ {cash}</C.CardValue>}
    </C.Body>
  );
};

export default Card;
