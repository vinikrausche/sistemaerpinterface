import * as C from "./style";
import Card from "../Card";
import { useState, useEffect } from "react";
import api from "../../Api/axios";
const Dados = () => {
  const [totalMoneySales, setTotalMoneySales] = useState(0);
  const [totalSalesState, setTotalSales] = useState(0);
  const [totalReserveState, setReserve] = useState(0);
  const [totalAvailableState, setAvailable] = useState(0);

  const carregarDadosFi = async () => {
    let totalcash = await api.getTotalMoneySales();
    let totalvendas = await api.getTotalSales();
    let totalReservadas = await api.getAllReserve();
    let totalDisponiveis = await api.getAllAvailables();

    setTotalMoneySales(totalcash);
    setTotalSales(totalvendas);
    setReserve(totalReservadas);
    setAvailable(totalDisponiveis);
  };

  useEffect(() => {
    carregarDadosFi();
  }, []);
  return (
    <C.Section>
      <C.SectionTitle>Dados Financeiros</C.SectionTitle>
      <C.ContainerDados>
        <Card title="Total de Faturamento" cash={totalMoneySales} />
        <Card title="Total de Vendas" qtd={totalSalesState} />
        <Card title="Unidades Reservadas" qtd={totalReserveState} />
        <Card title="Unidades Disponíveis" qtd={totalAvailableState} />
      </C.ContainerDados>
    </C.Section>
  );
};

export default Dados;
