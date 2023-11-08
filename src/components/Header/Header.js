import "./Header.css";
import Menu from "../Menu/Menu";
import Logotipo from "../Logotipo/Logotipo";
import styled from "styled-components";

const Cabecalho = styled.header`
  background-color: var(--orange);
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Header() {
  return (
    <Cabecalho>
      <Logotipo />
      <Menu />
    </Cabecalho>
  );
}
