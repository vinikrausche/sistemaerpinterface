import React from "react";
import * as F from "./style";

type Props = {
  searchtxt: string;
  method: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FiltroUnidades = ({ searchtxt, method }: Props) => {
  return (
    <F.FiltroContainer>
      <F.FormFiltro>
        <F.Busca>Buscar Unidades</F.Busca>
        <F.Input onChange={method} />
      </F.FormFiltro>
    </F.FiltroContainer>
  );
};

export default FiltroUnidades;
