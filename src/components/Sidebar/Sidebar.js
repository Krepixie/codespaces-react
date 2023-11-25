import styled from "styled-components";
import dog from "../../images/dog.png"
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

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
  }

  #dog {
    height: 30rem;
  }
`;

// const CategoryStyle = styled.li`
//   list-style-type: none;
//   color: var(--teal);
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     color: var(--blue);
//   }

//   .arrow,
//   .icon {
//     width: 1rem;
//   }
// `;

const CategoryStyle = styled(AccordionGroup)`
  .category-name {
    color: var(--teal);
  }
`;

function Category({ name }) {
  return (
    <CategoryStyle>
      <Accordion>
        <AccordionSummary className="category-name">{name}</AccordionSummary>
        <AccordionDetails>
          <ul>
            
          </ul>
        </AccordionDetails>
      </Accordion>
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
