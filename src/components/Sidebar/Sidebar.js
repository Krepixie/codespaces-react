import styled from "styled-components";
import dog from "../../images/dog.png";
import arrow from "../../images/arrow.svg";

const SidebarStyle = styled.nav`
  height: 100%;
  width: 20rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const CategoryStyle = styled.li`
  list-style-type: none;
  color: var(--teal);
  

  img {
    width: 1rem;
  }
`;

function Category({ icon, name }) {
  return (
    <CategoryStyle>
      {name}
      <img src={arrow} alt="Show"></img>
    </CategoryStyle>
  );
}

export default function Sidebar() {
  return (
    <SidebarStyle>
      <ul>
        <Category name={"Rações e Petiscos"}></Category>
        <Category name={"Roupas e Acessórios"}></Category>
        <Category name={"Higiene e Limpeza"}></Category>
        <Category name={"Brinquedos"}></Category>
        <Category name={"Medicina e Saúde"}></Category>
        <Category name={"Camas e Casinhas"}></Category>
      </ul>
      <img id="dog" src={dog} alt="Cachorro"></img>
    </SidebarStyle>
  );
}
