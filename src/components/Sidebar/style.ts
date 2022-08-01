import styled from "styled-components";

export const SidebarNav = styled.nav`
  width: 300px;
  height: 100%;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #000;
`;

export const UlList = styled.ul`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
`;

export const List = styled.li`
  border: 1px solid #ccc;
  list-style: none;
  margin: 5px auto;
  padding: 10px;
`;

export const Link = styled.a`

    text-decoration:none;
    color #fff;
    text-align: center;

`;
