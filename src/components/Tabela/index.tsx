import * as C from "./style";
import api from "../../Api/axios";
import { useEffect, useState } from "react";
import { Empreendimento } from "../../types/Empreendimento";
import BotaoVer from "../Botoes/Empreendimento/Ver";
import BotaoEditar from "../Botoes/Empreendimento/Editar";
import BotaoDeletar from "../Botoes/Empreendimento/Deletar";

export const Table = () => {
  const [empreendimentosState, setEmpreendimentos] = useState<Empreendimento[]>(
    []
  );

  useEffect(() => {
    carregarEmpreendimentos();
  }, []);

  const carregarEmpreendimentos = async () => {
    let empreendimentos = await api.getAllEmpreendimentos();
    setEmpreendimentos(empreendimentos);
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th>Código</C.Th>
          <C.Th>Nome</C.Th>
          <C.Th>Localização</C.Th>
          <C.Th>Prazo de Entrega</C.Th>
          <C.Th>Quantidade de Unidades</C.Th>
          <C.Th>Ações</C.Th>
        </C.Tr>
      </C.Thead>
      {empreendimentosState && (
        <C.Tbody>
          {empreendimentosState.map((item, index) => (
            <C.Tr key={index}>
              <C.Td>{item.id}</C.Td>
              <C.Td>{item.nome}</C.Td>
              <C.Td>{item.localizacao}</C.Td>
              <C.Td>{item.entrega_previsao}</C.Td>
              <C.Td>3</C.Td>
              <C.Td>
                <BotaoVer id={item.id} />
                <BotaoEditar id={item.id} />
                <BotaoDeletar id={item.id} />
              </C.Td>
            </C.Tr>
          ))}
        </C.Tbody>
      )}
    </C.Table>
  );
};
