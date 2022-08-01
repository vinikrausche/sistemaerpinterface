import styled from "styled-components";

export const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 10px;
`;
export const FormFiltro = styled.form`
  width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px auto;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #434a40;
  padding: 10px;
  border-radius: 4px;
`;

export const Busca = styled.label`
  color: #343a40;
  font-weight: bold;
`;
