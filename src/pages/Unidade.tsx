import Header from "../components/Header/";
import * as S from "../components/Section/style";
import * as F from "../components/Form/style";
import * as D from "../components/Dados/style";
import BotaoEnviar from "../components/Botoes/Unidades/Enviar";
import { UnidadesType } from "../types/UnidadesType";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../Api/axios";
const Unidade = () => {
  const params = useParams();

  const [UnidadeState, setUnidade] = useState<UnidadesType>();

  const [nomeState, setNome] = useState("");
  const [blocoState, setBloco] = useState("");
  const [valorState, setValor] = useState("");
  const [statusState, setStatus] = useState("");
  const [idState, setId] = useState("0");
  const [idEmpreeState, setIdEmpreeState] = useState("0");

  const handleChangeNome = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNome(e.target.value);

  const handleChangeBloco = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBloco(e.target.value);

  const handleChangeValor = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValor(e.target.value);

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStatus(e.target.value);

  const RequestPUT = async () => {
    let req = await api.editUnidade(
      idState,
      nomeState,
      blocoState,
      valorState,
      statusState,
      idEmpreeState
    );
  };

  const RequestPOST = async () => {
    if (params.idEmpree) {
      let idEmpree = params.idEmpree;

      if (
        nomeState == "" ||
        blocoState == "" ||
        valorState == "" ||
        statusState == ""
      ) {
        alert("Preencha todos os campos!");
        return;
      }

      let req = await api.createUnidade(
        nomeState,
        blocoState,
        valorState,
        statusState,
        idEmpree
      );
    }
  };

  const carregarUnidade = async () => {
    if (params.id && params.idEmpree) {
      let idUnidade = params.id;
      let idEmpree = params.idEmpree;
      let dados = await api.getOneUnidade(idUnidade);
      setId(idUnidade);
      setUnidade(dados);
      setIdEmpreeState(idEmpree);
      setNome(dados.nome);
      setBloco(dados.bloco);
      setStatus(dados.status);
      setValor(dados.valor);

      console.log(idState, idEmpreeState);
    }
  };

  useEffect(() => {
    carregarUnidade();
  }, []);

  return (
    <S.Section>
      <Header />

      <D.ContainerDados>
        {UnidadeState && (
          <F.Formulario>
            <h3>Atualizar Unidade</h3>
            <F.InputLabelContainer>
              <F.Label>Nome</F.Label>
              <F.Input placeholder={nomeState} onChange={handleChangeNome} />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Bloco</F.Label>
              <F.Input placeholder={blocoState} onChange={handleChangeBloco} />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Valor</F.Label>
              <F.Input
                placeholder={valorState.toString()}
                onChange={handleChangeValor}
              />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Status</F.Label>
              <F.Input
                onChange={handleChangeStatus}
                placeholder={statusState}
              />
            </F.InputLabelContainer>
            <BotaoEnviar txt="salvar" method={RequestPUT} />
          </F.Formulario>
        )}

        {!UnidadeState && (
          <F.Formulario>
            <h3>Criar Unidade</h3>
            <F.InputLabelContainer>
              <F.Label>Nome</F.Label>
              <F.Input placeholder={nomeState} onChange={handleChangeNome} />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Bloco</F.Label>
              <F.Input placeholder={blocoState} onChange={handleChangeBloco} />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Valor</F.Label>
              <F.Input
                placeholder={valorState.toString()}
                onChange={handleChangeValor}
              />
            </F.InputLabelContainer>
            <F.InputLabelContainer>
              <F.Label>Status</F.Label>
              <F.Input
                onChange={handleChangeStatus}
                placeholder={statusState}
              />
            </F.InputLabelContainer>
            <BotaoEnviar txt="salvar" method={RequestPOST} />
          </F.Formulario>
        )}
      </D.ContainerDados>
    </S.Section>
  );
};

export default Unidade;
