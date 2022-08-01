import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px #ccc;
  padding: 10px;
  margin: 20px auto;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #343a40;
`;

export const Input = styled.input`
  width: 260px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #ccc;
  margin: 10px 20px;
`;

export const InputLabelContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 10px;
`;
