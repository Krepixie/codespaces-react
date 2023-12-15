import { Button } from "@mui/material";
import styled from "styled-components";
import { Login } from "@mui/icons-material";

const listaMenu = ["Início", "Produtos", "Contato"];

const MenuListStyle = styled.ul`
  display: flex;
  list-style-type: none;

  gap: 5px;
  align-items: center;
  justify-content: space-between;

  .menu-items {
    color: var(--white);

    cursor: pointer;
    transition: 0.5s;
    border-radius: 20px;
  }

  .menu-items:hover {
    background-color: #ffc6a7;
  }
`;

const MenuButtonsStyle = styled.div`
  display: flex;
  gap: 10px;

  Button {
    text-transform: capitalize;
  }
  #signup {
    background-color: var(--white);
  }
`;

export default function Menu() {
  return (
    <>
      <MenuListStyle>
        {listaMenu.map((item) => (
          <Button variant="text" className="menu-items">
            {item}
          </Button>
        ))}
      </MenuListStyle>
      <MenuButtonsStyle>
        <Button variant="contained" size="small" id="login">
          Entrar
        </Button>
        <Button variant="outlined" size="small" id="signup">
          Registrar
        </Button>
      </MenuButtonsStyle>
    </>
  );
}
