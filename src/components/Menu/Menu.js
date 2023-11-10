import login from "../../images/login.svg";
import styled from "styled-components";

const listaMenu = ["Início", "Produtos", "Contato"];

const MenuListStyle = styled.ul`
  display: flex;
  list-style-type: none;
  width: 30%;
  height: 100%;
  gap: 5px;
  align-items: center;
  justify-content: space-around;

  .menu-items {
    color: var(--white);
    font: 20px bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    padding: 2rem 1rem;
    border-radius: 20px;
  }

  .menu-items:hover {
    background-color: #ffc6a7;
  }
`;

const MenuButtonsStyle = styled.div`
  display: flex;
  gap: 10px;

  input {
    background-image: url("../../images/search.svg");
    background-repeat: no-repeat;
    background-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    font: 18px bold;
    cursor: pointer;
  }

  #login {
    background-color: var(--white);
  }
`;

export default function Menu() {
  return (
    <>
      <MenuListStyle>
        {listaMenu.map((item) => (
          <li className="menu-items">{item}</li>
        ))}
      </MenuListStyle>
      <MenuButtonsStyle>
        <button id="login">Entrar</button>
        <button id="signup">Crie sua conta</button>
      </MenuButtonsStyle>
    </>
  );
}
