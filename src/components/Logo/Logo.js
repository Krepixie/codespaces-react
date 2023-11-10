import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoStyle = styled.div`
  #logo {
    height: 5rem;
  }
`;

export default function Logo() {
  return (
    <LogoStyle>
      <img id="logo" src={logo} alt="logo"></img>
    </LogoStyle>
  );
}
