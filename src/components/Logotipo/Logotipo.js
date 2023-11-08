import logo from "../../images/logo.png";
import styled from "styled-components";

const AppLogo = styled.div`
  #logo {
    height: 5rem;
  }
`;

export default function Logotipo() {
  return (
    <AppLogo>
      <img id="logo" src={logo} alt="logo"></img>
    </AppLogo>
  );
}
