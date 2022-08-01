import * as C from "./style";
import api from "../../Api/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UnidadesType } from "../../types/UnidadesType";
import BotaoVer from "../Botoes/Unidades/Ver";
import BotaoEditar from "../Botoes/Unidades/Editar";
import BotaoDeletar from "../Botoes/Unidades/Deletar";
import FiltroUnidades from "../FiltroUnidades";
import BotaoBusca from "../BotaoBusca";
import BotaoEnviar from "../Botoes/Unidades/Enviar";

const TabelaUnidades = () => {
  const params = useParams();

  const [unidadesStates, setUnidades] = useState<UnidadesType[]>([]);
  const [idEmpreeState, setIdEmpre] = useState("");

  const CarregarUnidades = async () => {
    if (params.id) {
      let idEmpree = params.id;
      setIdEmpre(idEmpree);

      let response = await api.listAllUnidadesFromEmpreendimento(idEmpree);
      console.log(response);

      setUnidades(response);
    }
  };

  useEffect(() => {
    CarregarUnidades();
  });
  return (
    <div>
      {unidadesStates && (
        <C.TableContainer>
          <h2>Unidades</h2>
          <C.Table>
            <C.Thead>
              <C.Tr>
                <C.Th>Código</C.Th>
                <C.Th>Nome</C.Th>
                <C.Th>Bloco</C.Th>
                <C.Th>Valor</C.Th>
                <C.Th>Status</C.Th>
                <C.Th>Ações</C.Th>
              </C.Tr>
            </C.Thead>
            <C.Tbody>
              {unidadesStates.map((item, index) => (
                <C.Tr key={index}>
                  <C.Td>{item.id}</C.Td>
                  <C.Td>{item.nome}</C.Td>
                  <C.Td>{item.bloco}</C.Td>
                  <C.Td>{item.valor}</C.Td>
                  <C.Td>{item.status}</C.Td>
                  <C.Td>
                    <BotaoEditar empree={idEmpreeState} id={item.id} />
                    <BotaoDeletar id={item.id} />
                  </C.Td>
                </C.Tr>
              ))}
            </C.Tbody>
          </C.Table>
        </C.TableContainer>
      )}

      {!unidadesStates && (
        <C.TableContainer>
          <h3>Nenhuma unidade ainda</h3>
          <C.Table>
            <C.Thead>
              <C.Tr>
                <C.Th>Código</C.Th>
                <C.Th>Nome</C.Th>
                <C.Th>Bloco</C.Th>
                <C.Th>Valor</C.Th>
                <C.Th>Status</C.Th>
              </C.Tr>
            </C.Thead>
            <C.Tbody></C.Tbody>
          </C.Table>
        </C.TableContainer>
      )}
    </div>
  );
};

export default TabelaUnidades;
