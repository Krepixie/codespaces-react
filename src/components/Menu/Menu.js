import search from "../../images/search.svg";
import login from "../../images/login.svg";
import styled from "styled-components";
import "./Menu.css";

const listaMenu = ["Início", "Produtos", "Contato"];
const listaImagens = [search, login];

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  width: 30%;
  height: 100%;
  gap: 5px;
  align-items: center;
  justify-content: space-around;

  .menu-items {
    color: var(--white);
    font: 24px bold;
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

const MenuButtons = styled.div`
  display: flex;
  gap: 10px;

  > button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: transparent;
    font: 18px bold;
    cursor: pointer;
  }

  .menu-icons {
    width: 1.5rem;
  }
`;

export default function Menu() {
  return (
    <>
      <MenuList>
        {listaMenu.map((item) => (
          <li className="menu-items">{item}</li>
        ))}
      </MenuList>
      <MenuButtons>
        {listaImagens.map((image) => (
          <button>
            <img src={image} alt="" className="menu-icons"></img>
          </button>
        ))}
      </MenuButtons>
    </>
  );
}
