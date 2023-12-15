import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: var(--orange);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Logo />
      <Menu />
    </HeaderStyle>
  );
}
