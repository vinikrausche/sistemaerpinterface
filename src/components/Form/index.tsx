import BotaoEnviar from "../Botoes/Empreendimento/Enviar";
import * as C from "./style";
import api from "../../Api/axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Empreendimento } from "../../types/Empreendimento";

const Form = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [EmpreendimentoState, setEmpreendimentoState] =
    useState<Empreendimento>();

  const [nameState, setName] = useState("");
  const [localizacaoState, setLocalizacao] = useState("");
  const [prazoState, setPrazo] = useState("");
  const [idState, setIdState] = useState("");

  const carregarEmpreendimento = async () => {
    if (params.id !== undefined) {
      let id = params.id;
      setIdState(id);
      let dados = await api.getOneEmpreendimento(id);
      setEmpreendimentoState(dados);
      setName(dados.nome);
      setLocalizacao(dados.localizacao);
      setPrazo(dados.entrega_previsao);
    }
  };

  useEffect(() => {
    carregarEmpreendimento();
  }, []);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeLocalizacao = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalizacao(e.target.value);
  };

  const handleChangePrazo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrazo(e.target.value);
  };

  const sendRequestPUT = async () => {
    let res = await api.updateEmpreendimento(
      nameState,
      localizacaoState,
      prazoState,
      idState
    );
  };

  const Redirect = () => {
    navigate("/empreendimentos");
  };

  const sendRequestPost = async () => {
    if (nameState == "" || localizacaoState == "" || prazoState == "") {
      alert("Preencha todos os campos");
      return;
    }
    let res = await api.createEmpreendimento(
      nameState,
      localizacaoState,
      prazoState
    );

    Redirect();
  };

  return (
    <div>
      {EmpreendimentoState && (
        <C.Formulario>
          <h3>Atualizar Empreendimento</h3>
          <C.InputLabelContainer>
            <C.Label>Nome</C.Label>
            <C.Input onChange={handleChangeName} placeholder={nameState} />
          </C.InputLabelContainer>
          <C.InputLabelContainer>
            <C.Label>Localização</C.Label>
            <C.Input
              onChange={handleChangeLocalizacao}
              placeholder={localizacaoState}
            />
          </C.InputLabelContainer>
          <C.InputLabelContainer>
            <C.Label>Prazo de Entrega</C.Label>
            <C.Input onChange={handleChangePrazo} placeholder={prazoState} />
          </C.InputLabelContainer>

          <BotaoEnviar txt="Enviar" method={sendRequestPUT} />
        </C.Formulario>
      )}

      {!EmpreendimentoState && (
        <C.Formulario>
          <h3>Criar Novo Empreendimento</h3>
          <C.InputLabelContainer>
            <C.Label>Nome</C.Label>
            <C.Input onChange={handleChangeName} placeholder={nameState} />
          </C.InputLabelContainer>
          <C.InputLabelContainer>
            <C.Label>Localização</C.Label>
            <C.Input
              onChange={handleChangeLocalizacao}
              placeholder={localizacaoState}
            />
          </C.InputLabelContainer>
          <C.InputLabelContainer>
            <C.Label>Prazo de Entrega</C.Label>
            <C.Input onChange={handleChangePrazo} placeholder={prazoState} />
          </C.InputLabelContainer>

          <BotaoEnviar txt="Enviar" method={sendRequestPost} />
        </C.Formulario>
      )}
    </div>
  );
};

export default Form;
