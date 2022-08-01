import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const api = {
  getAllEmpreendimentos: async () => {
    let response = await axios.get(`${BASE_URL}`);
    return response.data;
  },

  getTotalMoneySales: async () => {
    let response = await axios.get(`${BASE_URL}totalvendas`);
    return response.data;
  },

  getTotalSales: async () => {
    let response = await axios.get(`${BASE_URL}unidadesvendidas`);
    return response.data;
  },

  getAllAvailables: async () => {
    let response = await axios.get(`${BASE_URL}unidadesdisponiveis`);
    return response.data;
  },

  getAllReserve: async () => {
    let response = await axios.get(`${BASE_URL}unidadesreservadas`);
    return response.data;
  },

  getOneEmpreendimento: async (id: string) => {
    let response = await axios.get(`${BASE_URL}verempreendimento/${id}`);
    return response.data;
  },

  createEmpreendimento: async (
    nome: string,
    localizacao: string,
    prazo: string
  ) => {
    let response = await axios.post(`${BASE_URL}novoempreendimento`, {
      nome,
      localizacao,
      prazo,
    });

    return response.data;
  },

  updateEmpreendimento: async (
    nome: string,
    localizacao: string,
    prazo: string,
    id: string
  ) => {
    let response = await axios.put(`${BASE_URL}atualizarempreendimento`, {
      nome,
      localizacao,
      prazo,
      id,
    });

    return response;
  },

  delEmpreendimento: async (id: string) => {
    let response = await axios.delete(`${BASE_URL}deletarempreendimento/${id}`);
    return response.data;
  },

  listAllUnidadesFromEmpreendimento: async (
    id: string,
    search: string = ""
  ) => {
    if (search === "") {
      let response = await axios.get(`${BASE_URL}minhasunidades?id=${id}`);
      return response.data;
    } else {
      let response = await axios.get(
        `${BASE_URL}minhasunidades?id=${id}&search=${search}`
      );
      return response.data;
    }
  },

  getOneUnidade: async (id: string) => {
    let response = await axios.get(`${BASE_URL}verunidade/${id}`);
    return response.data;
  },

  createUnidade: async (
    nome: string,
    bloco: string,
    valor: string,
    status: string,
    id_empreendimento: string
  ) => {
    let response = await axios.post(`${BASE_URL}novaunidade`, {
      nome,
      bloco,
      valor,
      status,
      id_empreendimento,
    });
    return response.data;
  },

  editUnidade: async (
    id: string,
    nome: string,
    bloco: string,
    valor: string,
    status: string,
    id_empreendimento: string
  ) => {
    let response = await axios.put(`${BASE_URL}atualizarunidade`, {
      id,
      nome,
      bloco,
      valor,
      status,
      id_empreendimento,
    });

    return response.data;
  },

  delUnidade: async (id: string) => {
    let response = await axios.delete(`${BASE_URL}deletarunidade/${id}`);
    return response.data;
  },
};

export default api;
