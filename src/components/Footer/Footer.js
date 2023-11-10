import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 20rem;
  background: var(--teal) url("../..//images/wave.svg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: var(--white);
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <span>Made with 💜 by Bianca Pena - 2023 </span>
    </FooterStyle>
  );
}
