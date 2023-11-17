import styled from "styled-components";
import dog from "../../images/dog.png";
import arrow from "../../images/arrow.svg";
import food from "../../images/food.svg"
import collar from "../../images/collar.svg"
import soap from "../../images/soap.svg"
import yarn from "../../images/yarn.svg"
import health from "../../images/health.svg"
import pet_bed from "../../images/pet-bed.svg"

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
    gap: 2rem;
    margin-top: 5rem;
  }
`;

const CategoryStyle = styled.li`
  list-style-type: none;
  color: var(--teal);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: .3s;
  &:hover {
    color: var(--blue);
  }

  .arrow, .icon {
    width: 1rem;
  }


`;

function Category({ icon, name }) {
  return (
    <CategoryStyle>
      <img className="icon" src={icon} alt={name}></img>
      {name}
      <img className="arrow" src={arrow} alt="Show"></img>
    </CategoryStyle>
  );
}

export default function Sidebar() {
  return (
    <SidebarStyle>
      <ul>
        <Category name={"Rações e Petiscos"} icon={food}></Category>
        <Category name={"Roupas e Acessórios"} icon={collar}></Category>
        <Category name={"Higiene e Limpeza"} icon={soap}></Category>
        <Category name={"Brinquedos"} icon={yarn}></Category>
        <Category name={"Medicina e Saúde"} icon={health}></Category>
        <Category name={"Camas e Casinhas"} icon={pet_bed}></Category>
      </ul>
      <img id="dog" src={dog} alt="Cachorro"></img>
    </SidebarStyle>
  );
}
